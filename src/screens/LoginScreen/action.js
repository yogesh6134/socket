import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_PHONE_REQUEST,
  USER_PHONE_SUCCESS,
  USER_PHONE_FAILED
} from './type';

export const userLoginRequest = ({data}) => ({
  type: USER_LOGIN_REQUEST,
  data,
});

export const userLoginSuccess = data => ({
  type: USER_LOGIN_SUCCESS,
  data,
});

export const userLoginFailed = data => ({
  type: USER_LOGIN_FAILED,
  data,
});

export const userPhoneRequest = ({data, mobile}) => ({
  type: USER_PHONE_REQUEST,
  data,
  mobile,
});

export const userphoneSuccess = data => ({
  type: USER_PHONE_SUCCESS,
  data,
});

export const userPhoneRequestFailed = () => ({
  type: USER_PHONE_FAILED,
  data
});
