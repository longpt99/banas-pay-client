import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

Confirmation.propTypes = {};

const schema = yup.object().shape({
  otp: yup
    .string()
    .required('required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'OTP number is not valid'
    )
    .min(6, 'to short')
    .max(6, 'to long')
    .required(),
});

function Confirmation(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(props.handleSubmitForm)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Please enter the verification code sent to {props.phone}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otp"
            name="otp"
            type="text"
            placeholder="******"
            ref={register}
          />
          {errors.otp && (
            <p className="text-red-500 italic text-xs">{errors.otp.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Confirm OTP
          </button>
          {props.countTime === 0 ? (
            <button
              className="italic text-sm text-blue-400"
              onClick={props.handleRenewOtp}
            >
              Renew OTP
            </button>
          ) : (
            <p className="italic text-sm text-blue-400">
              Count time:{' '}
              <span className="underline not-italic">{props.countTime}s</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Confirmation;
