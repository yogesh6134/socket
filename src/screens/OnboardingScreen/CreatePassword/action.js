import {
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAILED,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAILED,
} from './type';

export const userResetPasswordRequest = ({data, navigation}) => ({
  type: USER_RESET_PASSWORD_REQUEST,
  data,
  navigation
});

export const userResetPasswordSuccess = data => ({
  type: USER_RESET_PASSWORD_SUCCESS,
  data,
});

export const userResetPasswordFailed = data => ({
  type: USER_RESET_PASSWORD_FAILED,
  data,
});

export const userChangePasswordRequest = ({data, navigation}) => ({
  type: USER_CHANGE_PASSWORD_REQUEST,
  data,
  navigation
});

export const userChangePasswordSuccess = data => ({
  type: USER_CHANGE_PASSWORD_SUCCESS,
  data,
});

export const userChangePasswordFailed = data => ({
  type: USER_CHANGE_PASSWORD_FAILED,
  data,
});
