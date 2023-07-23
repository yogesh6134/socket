import {
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAILED,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAILED,
} from './type';

const initialState = {
  error: null,
  changePassError: null,
  changePassword: {},
  changePassword1: {},
  isPasswordChanged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
      };
    }
    case USER_RESET_PASSWORD_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        changePassword: data,
      };
    }
    case USER_RESET_PASSWORD_FAILED: {
      const {data} = action;
      return {
        ...state,
        error: data,
      };
    }

    case USER_CHANGE_PASSWORD_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        changePassword1: data,
      };
    }
    case USER_CHANGE_PASSWORD_FAILED: {
      const {data} = action;
      return {
        ...state,
        changePassError: data,
      };
    }
    default:
      return state;
  }
};
