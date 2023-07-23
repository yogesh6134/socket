import { LOGOUT_SUCCESS } from '@screens/CustomDrawer/type';
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_PHONE_REQUEST,
  USER_PHONE_FAILED
} from './type';

const initialState = {
  userData: {},
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        userData: data,
      };
    }
    case USER_LOGIN_FAILED: {
      const {data} = action;
      return {
        ...state,
        errorMessage: data,
      };
    }
    case USER_PHONE_REQUEST: {
      const {data} = action;
      return {
        ...state,
        userData: data,
      };
    }
    case USER_PHONE_FAILED: {
      const {data} = action;
      return {
        ...state,
        errorMessage: data,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        userData: {},
      };
    }
    default:
      return state;
  }
};
