import React from 'react';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  gender: yup.mixed().oneOf(['male', 'female', 'others']).defined(),
  password: yup.string().min(6).required(),
  cf_password: yup
    .string()
    .oneOf([yup.ref('password')], "Password's not match")
    .required('Required!'),
});

function Account(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(props.handleSubmitForm)}
      >
        <div className="flex justify-between">
          <div className="mr-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                ref={register}
              />
              {errors.name && (
                <p className="text-red-500 italic text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                ref={register}
              />
              {errors.email && (
                <p className="text-red-500 italic text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="birth"
              >
                Birth
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="birth"
                type="date"
                name="birth"
                placeholder="Phone"
                ref={register}
              />
              {errors.birth && (
                <p className="text-red-500 italic text-xs">
                  {errors.birth.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
                type="checkbox"
                name="gender"
                placeholder="Phone"
                ref={register}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 italic text-xs">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                name="address"
                placeholder="Address"
                ref={register}
              />
              {errors.address && (
                <p className="text-red-500 italic text-xs">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="mb-4">
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
                placeholder="********"
                ref={register}
              />
              {errors.password && (
                <p className="text-red-500 italic text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cf_password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="cf_password"
                type="password"
                name="cf_password"
                placeholder="********"
                ref={register}
              />
              {errors.cf_password && (
                <p className="text-red-500 italic text-xs">
                  {errors.cf_password.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <p className="text-sm italic text-blue-400 mt-3">
          * You only have 5 mins to complete the form.
        </p>
      </form>
    </div>
  );
}

export default Account;
