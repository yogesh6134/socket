import {
   PACKAGES_REQUEST,
    PACKAGES_SUCCESS,
    PACKAGES_FAILED,
  } from './type';
  
  export const packageRequest = () => ({
    type: PACKAGES_REQUEST,
  });
  
  export const packageSuccess = data => ({
    type: PACKAGES_SUCCESS,
    data,
  });
  
  export const packageFailed = data => ({
    type: PACKAGES_FAILED,
    data,
  });
  
  