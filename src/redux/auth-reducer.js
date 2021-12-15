import { LoginAPI, ProfileAPI, securityAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_DATA = 'social-network/auth/SET-AUTH-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/SET-CAPTCHA-URL-SUCCESS';

let defaultState = {
  userId: null,
  login: null,
  email: null,
  isLogin: false,
  captchaUrl: null
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      }

      case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
};

export const setAuthData = (userId, login, email, isLogin, captchaUrl) => ({
  type: SET_AUTH_DATA,
  payload: { userId, login, email, isLogin, captchaUrl }
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }});


export const getAuthProfileThunkCreator = () => async (dispatch) => {
  const response = await ProfileAPI.getAuthProfile();

  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setAuthData(id, login, email, true));
  }
};

export const getLoginProfileThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await LoginAPI.getLogin(email, password, rememberMe, captcha);

  if (response.resultCode === 0) {
    dispatch(getAuthProfileThunkCreator());
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message = response.messages.length > 0 ? response.messages[0] : "Some error";
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const getLogout = () => async (dispatch) => {
  const response = await LoginAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false, null));
  }
};

export { authReducer };