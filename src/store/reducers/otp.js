import * as types from '../../constants/AcitonType';

let initialState = {
  success: false,
  token: null,
};

const otpReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.SET_OTP_STATUS:
      return { ...state, success: payload };
    case types.SET_OTP_TOKEN: {
      return { ...state, token: payload };
    }
    default:
      return state;
  }
};

export default otpReducer;
