import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Header.propTypes = {};

function Header(props) {
  return (
    <nav className="w-full fixed bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://www.flaticon.com/premium-icon/icons/svg/831/831896.svg"
                  alt="Workflow logo"
                />
                <h1 className="text-xl ml-1 text-orange-600">Pay</h1>
              </div>
              {/* <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              /> */}
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <Link
                  to="###"
                  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-orange-400 focus:outline-none focus:text-white focus:bg-orange-700 transition duration-150 ease-in-out"
                >
                  Personal
                </Link>
                <Link
                  to="###"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-orange-300 hover:text-white hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-orange-700 transition duration-150 ease-in-out"
                >
                  Business
                </Link>
                <Link
                  to="###"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-orange-300 hover:text-white hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-orange-700 transition duration-150 ease-in-out"
                >
                  News
                </Link>
                <Link
                  to="###"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-orange-300 hover:text-white hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-orange-700 transition duration-150 ease-in-out"
                >
                  About
                </Link>
                <Link
                  to="###"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-orange-300 hover:text-white hover:bg-orange-400 focus:outline-none focus:text-white focus:bg-orange-700 transition duration-150 ease-in-out"
                >
                  Career
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="p-1 border-2 border-transparent text-orange-400 rounded-full hover:text-white hover:bg-orange-500 focus:outline-none focus:text-white focus:bg-orange-700 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <div className="ml-3 relative">
              <div className="dropdown">
                <div>
                  <button
                    className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://www.flaticon.com/premium-icon/icons/svg/3001/3001758.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="origin-top-right absolute right-0 pt-2 w-48 rounded-md shadow-lg dropdown-menu hidden">
                  <div
                    className="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    {props.token ? (
                      <>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Profile
                        </Link>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Setting
                        </Link>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                          onClick={props.handleLogout}
                        >
                          Sign Out
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
