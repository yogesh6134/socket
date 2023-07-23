import {
  FORFOT_PASSWORD_SUCCESS,
  FORFOT_PASSWORD_FAILED,
  FORFOT_PASSWORD_REQUEST,
} from './type';

const initialState = {
  error: '',
  forgotPassword: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORFOT_PASSWORD_REQUEST: {
      return {
        ...state,
      };
    }
    case FORFOT_PASSWORD_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        forgotPassword: data,
      };
    }
    case FORFOT_PASSWORD_FAILED: {
      const {data} = action;
      return {
        ...state,
        error: data,
      };
    }
    default:
      return state;
  }
};
