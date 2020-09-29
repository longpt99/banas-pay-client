import * as types from '../../constants/AcitonType';

let initialState = {
  message: 'Welcome 🚀',
  success: true,
};

const messageReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.SET_MESSAGE_POPUP:
      return { ...state, ...payload };
    case types.RESET_MESSAGE_POPUP:
      return {};
    default:
      return state;
  }
};

export default messageReducer;
