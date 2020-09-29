import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  phone: yup
    .string()
    .required('required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    )
    .min(10, 'to short')
    .max(10, 'to long')
    .required(),
  password: yup.string().required(),
});
// Login.propTypes = {};

function Login(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="container flex items-center justify-center h-screen ml-auto mr-auto">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(props.handleSubmitForm)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Ex: 0369092599"
              ref={register}
            />
            {errors.phone && (
              <p className="text-red-500 italic text-xs">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="long123"
              ref={register}
            />
            {errors.password && (
              <p className="text-red-500 italic text-xs">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="###"
            >
              Forgot Password?
            </a>
          </div>
          <p className="italic text-sm mt-3 text-gray-600">
            Do not have an account ?{' '}
            <Link to="/register">
              <span className="text-blue-500 hover:text-blue-700  hover:underline">
                Go to register
              </span>
            </Link>
          </p>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Banas Bank. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
