import { combineReducers } from 'redux';

import token from './token';
import popup from './popup';
import otp from './otp';
import customer from './customer';

const appReducers = combineReducers({
  token,
  popup,
  otp,
  customer,
});

const rootReducers = (state, action) => {
  switch (action.type) {
    case 'USER_LOGOUT':
      return appReducers(undefined, action);
    default:
      return appReducers(state, action);
  }
};

export default rootReducers;
