import {SHOW_LOADING_VIEW, HIDE_LOADING_VIEW} from './type';

export const showLoading = (isError, errorMessage) => ({
  type: SHOW_LOADING_VIEW,
  isError,
  errorMessage,
});
export const hideLoading = (isError, errorMessage, errorCode) => ({
  type: HIDE_LOADING_VIEW,
  isError,
  errorMessage,
  errorCode,
});
