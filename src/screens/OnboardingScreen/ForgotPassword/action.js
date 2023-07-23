import {
  FORFOT_PASSWORD_REQUEST,
  FORFOT_PASSWORD_SUCCESS,
  FORFOT_PASSWORD_FAILED,
} from './type';

export const forgotPasswordRequest = ({data}) => ({
  type: FORFOT_PASSWORD_REQUEST,
  data,
});

export const forgotPasswordSuccess = ({data}) => ({
  type: FORFOT_PASSWORD_SUCCESS,
  data,
});

export const forgotPasswordFailed = data => ({
  type: FORFOT_PASSWORD_FAILED,
  data,
});
