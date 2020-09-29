import React, { useEffect } from 'react';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchTokenRequest, actUserLogout } from '../../store/actions';

function LoginContainer(props) {
  // const errors = useSelector((state) => state.errors);
  const otpStatus = useSelector((state) => state.otp.success);
  const errors = {};
  const dispatch = useDispatch();

  useEffect(() => {
    otpStatus && dispatch(actUserLogout());
  }, [dispatch, otpStatus]);

  const handleSubmitForm = (data, e) => {
    dispatch(actFetchTokenRequest(data));
    e.preventDefault();
  };
  return <Login errs={errors} handleSubmitForm={handleSubmitForm} />;
}

export default LoginContainer;
