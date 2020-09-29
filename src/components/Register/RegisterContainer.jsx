import React, { useState, useEffect } from 'react';
import Register from './Register';
import Account from './Account';
import Information from './Information';
import Confirmation from './Confirmation';
import { useDispatch, useSelector } from 'react-redux';
import {
  actGenerateOtpRequest,
  actRegenerateOtpRequest,
  actRegisterAccountRequest,
  actSetOtpStatus,
  actValidateOtpRequest,
} from '../../store/actions';

const numberToPhone = (number) => {
  return number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

function RegisterContainer() {
  const otpStatus = useSelector((state) => state.otp.success);
  const token = useSelector((state) => state.otp.token);
  const dispatch = useDispatch();
  const [deviceId, setDeviceId] = useState(null);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  let [countTime, setCountTime] = useState(30);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setDeviceId(res.ip);
      })
      .catch((err) => console.error('Problem fetching my IP', err));
  }, []);

  useEffect(() => {
    if (otpStatus && !token) {
      const count = setInterval(() => {
        if (countTime === 0) {
          clearInterval(count);
        }
        setCountTime(countTime--);
      }, 1000);
      setStep(2);
    }
  }, [otpStatus]);

  useEffect(() => {
    if (token) {
      setStep(3);
    }
  }, [token]);

  const handleSubmitForm = (data, e) => {
    if (step === 1) {
      setPhone(data.phone);
      dispatch(actGenerateOtpRequest({ phone: data.phone, deviceId }));
    }

    if (step === 2) {
      dispatch(
        actValidateOtpRequest({
          phone,
          deviceId,
          otpToken: data.otp,
        })
      );
    }

    if (step === 3) {
      delete data.cf_password;
      const { password } = data;
      delete data.password;
      const basicInfo = { ...data };
      dispatch(actRegisterAccountRequest({ basicInfo, password }, token));
    }
    console.log(data);
    e.preventDefault();
  };

  const handleChangeStep = (num, e) => {
    setStep(num);
  };

  const handleRenewOtp = () => {
    dispatch(actRegenerateOtpRequest({ phone }));
    dispatch(actSetOtpStatus(false));
    setCountTime(30);
  };

  const props = { handleSubmitForm, handleChangeStep };

  return (
    <Register>
      {step === 1 ? (
        <Account {...props} />
      ) : step === 2 ? (
        <Confirmation
          {...props}
          phone={numberToPhone(phone)}
          countTime={countTime}
          handleRenewOtp={handleRenewOtp}
        />
      ) : (
        <Information {...props} />
      )}
    </Register>
  );
}

export default RegisterContainer;
