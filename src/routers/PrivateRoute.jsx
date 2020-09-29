import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fetchToken } from '../utils/token';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = fetchToken();
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
