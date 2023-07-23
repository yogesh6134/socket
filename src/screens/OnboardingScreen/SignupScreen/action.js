import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_STATUS,
} from './type';

export const userRegisterRequest = ({data}) => ({
  type: USER_REGISTER_REQUEST,
  data,
});

export const userRegisterSuccess = ({data}) => ({
  type: USER_REGISTER_SUCCESS,
  data,
});
export const userRegisterStatus = status => ({
  type: USER_REGISTER_STATUS,
  status,
});

export const userRegisterFailed = data => ({
  type: USER_REGISTER_FAILED,
  data,
});
