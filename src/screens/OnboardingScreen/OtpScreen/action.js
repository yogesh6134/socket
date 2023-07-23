import {
  USER_REGISTER_OTP_REQUEST,
  USER_REGISTER_OTP_SUCCESS,
  USER_REGISTER_OTP_FAILED,
  USER_RESEND_OTP_REQUEST,
  USER_RESET_PASSWORD,
  CLEAR_PASSWORD_ERROR,
} from './type';

export const userVerifyRequest = ({data, detail, navigation}) => ({
  type: USER_REGISTER_OTP_REQUEST,
  data,
  detail,
  navigation
});
export const userVerifySuccess = data => ({
  type: USER_REGISTER_OTP_SUCCESS,
  data,
});

export const userChangePassword = data => ({
  type: USER_RESET_PASSWORD,
  data,
});

export const userVerifyFailed = data => ({
  type: USER_REGISTER_OTP_FAILED,
  data,
});

export const userResendOtp = ({data}) => ({
  type: USER_RESEND_OTP_REQUEST,
  data,
});

export const clearError = data => ({
  type: CLEAR_PASSWORD_ERROR,
});
