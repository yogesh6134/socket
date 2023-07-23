import {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED} from './type';

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = data => ({
  type: LOGOUT_SUCCESS,
  data
});

export const logoutFailed = () => ({
  type: LOGOUT_FAILED,
});
