import {
  USER_REGISTER_OTP_SUCCESS,
  USER_REGISTER_OTP_FAILED,
  USER_RESET_PASSWORD,
  CLEAR_PASSWORD_ERROR,
} from './type';

const initialState = {
  error: '',
  userData: {},
  userDetail: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_OTP_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        userData: data,
      };
    }
    case USER_REGISTER_OTP_FAILED: {
      const {data} = action;
      return {
        ...state,
        error: data,
      };
    }
    case USER_RESET_PASSWORD: {
      const {data} = action;
      return {
        ...state,
        userDetail: data,
      };
    }
    case CLEAR_PASSWORD_ERROR: {
      return {
        ...state,
        error: '',
      };
    }
    default:
      return state;
  }
};
