import * as types from '../../constants/AcitonType';

let initialState = {
  profile: {},
};

const customer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.SET_USER_PROFILE:
      return { ...state, profile: payload };
    default:
      return state;
  }
};

export default customer;
