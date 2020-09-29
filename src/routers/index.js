import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
const AuthPage = lazy(() => import('../pages/Auth'));
const HomePage = lazy(() => import('../pages/Home'));
const ProfilePage = lazy(() => import('../pages/Profile'));
// const HomePage = lazy(() => import('pages/Home'));

const Routes = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/login" component={AuthPage} />
        <PublicRoute exact path="/register" component={AuthPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default Routes;
