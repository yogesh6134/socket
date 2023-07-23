import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILED,
  EDIT_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILED,
  EDIT_PROFILE_PIC_REQUEST,
  EDIT_PROFILE_PIC_SUCCESS,
  EDIT_PROFILE_PIC_FAILED,
  VERIFY_PHONE_REQUEST,
  VERIFY_PHONE_SUCCESS,
  VERIFY_PHONE_FAILED,
  CHECK_TOKEN_REQUEST,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_FAILED
} from './type';
export const userProfileRequest = () => ({
  type: USER_PROFILE_REQUEST,
});
export const userProfileSuccess = data => ({
  type: USER_PROFILE_SUCCESS,
  data,
});
export const userProfileFailed = () => ({
  type: USER_PROFILE_FAILED,
});
export const editUserProfileRequest = ({data}) => ({
  type: EDIT_USER_PROFILE_REQUEST,
  data,
});
export const editUserProfileSuccess = data => ({
  type: EDIT_USER_PROFILE_SUCCESS,
  data,
});
export const editUserProfileFailed = () => ({
  type: EDIT_USER_PROFILE_FAILED,
});
export const editProfilePicRequest = data => ({
  type: EDIT_PROFILE_PIC_REQUEST,
  data,
});
export const editProfilePicSuccess = data => ({
  type: EDIT_PROFILE_PIC_SUCCESS,
  data,
});
export const editProfilePicFailed = () => ({
  type: EDIT_PROFILE_PIC_FAILED,
});

//
export const verifySuccess = data => ({
  type: VERIFY_PHONE_SUCCESS,
  data,
});
export const verifyFailed = () => ({
  type: VERIFY_PHONE_FAILED,
});
export const verifyRequest = ({data}) => ({
  type: VERIFY_PHONE_REQUEST,
  data,
});
//

export const checkTokenRequest = () => ({
  type: CHECK_TOKEN_REQUEST,
});
export const checkTokenSuccess = data => ({
  type: CHECK_TOKEN_SUCCESS,
  data,
});
export const checkTokenSuccessFailed = () => ({
  type: CHECK_TOKEN_FAILED,
});
