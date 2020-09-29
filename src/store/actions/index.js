import * as types from '../../constants/AcitonType';
import axios from '../../utils/axios';

// --------------------------------------------------------------------------------------
// ------------------------------------------API REQUEST---------------------------------
// --------------------------------------------------------------------------------------

export const actGenerateOtpRequest = (data) => (dispatch) =>
  axios
    .post('/otp/generate', data)
    .then((res) => {
      if (res.data) {
        dispatch(actFetchOtpToken(res.data));
      }
      dispatch(actSetOtpStatus(res.success));
      dispatch(setMessagePopup({ message: res.message, success: res.success }));
    })
    .catch((err) =>
      dispatch(setMessagePopup({ message: err.message, success: err.success }))
    );

export const actValidateOtpRequest = (data) => (dispatch) =>
  axios
    .post('/otp/validate', data)
    .then((res) => {
      if (res.data) {
        dispatch(actFetchOtpToken(res.data));
      }
      dispatch(setMessagePopup({ message: res.message, success: res.success }));
    })
    .catch((err) => {
      dispatch(setMessagePopup({ message: err.message, success: err.success }));
    });

export const actRegenerateOtpRequest = (data) => (dispatch) =>
  axios
    .post('/otp/regenerate', data)
    .then((res) => {
      dispatch(actSetOtpStatus(res.success));
      dispatch(setMessagePopup({ message: res.message, success: res.success }));
    })
    .catch((err) => {
      dispatch(setMessagePopup({ message: err.message, success: err.success }));
    });

export const actFetchTokenRequest = (data) => (dispatch) =>
  axios
    .post('/auth/login', data)
    .then((res) => {
      localStorage.setItem('token', JSON.stringify(res.data));
      dispatch(actFetchToken(res.data));
      dispatch(setMessagePopup({ message: res.message, success: res.success }));
    })
    .catch((err) => {
      dispatch(setMessagePopup({ message: err.message, success: err.success }));
    });

export const actRegisterAccountRequest = (data, token) => (dispatch) => {
  axios
    .post('/auth/register', data, {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
    .then((res) => {
      dispatch(setMessagePopup({ message: res.message, success: res.success }));
      dispatch(
        setMessagePopup({
          message: 'Wait a few seconds to redirect the login page',
          success: true,
        })
      );
      return setTimeout(() => {
        window.location.replace('/login');
      }, 5000);
    })
    .catch((err) => {
      dispatch(setMessagePopup({ message: err.message, success: err.success }));
    });
};

export const actFetchUserProfileRequest = () => (dispatch) => {
  axios
    .get('/customer/profile')
    .then((res) => {
      console.log(res.data);
      // dispatch(actFetchUserProfile(res.data));
    })
    .catch((err) => {
      debugger;
      dispatch(setMessagePopup({ message: err.message, success: err.success }));
    });
};
// --------------------------------------------------------------------------------------
// ---------------------------------------ACTION REQUEST---------------------------------
// --------------------------------------------------------------------------------------

export const setMessagePopup = (data) => {
  return {
    type: types.SET_MESSAGE_POPUP,
    payload: data,
  };
};

export const resetMessagePopup = () => {
  return {
    type: types.RESET_MESSAGE_POPUP,
  };
};

export const actFetchToken = (data) => {
  return {
    type: types.SET_TOKEN,
    payload: data.token.accessToken,
  };
};

export const actSetOtpStatus = (data) => {
  return {
    type: types.SET_OTP_STATUS,
    payload: data,
  };
};

export const actFetchOtpToken = (data) => {
  return {
    type: types.SET_OTP_TOKEN,
    payload: data,
  };
};

export const actUserLogout = () => {
  localStorage.removeItem('token');
  return {
    type: types.USER_LOGOUT,
  };
};

export const actFetchUserProfile = (data) => {
  return {
    type: types.SET_USER_PROFILE,
    payload: data,
  };
};
