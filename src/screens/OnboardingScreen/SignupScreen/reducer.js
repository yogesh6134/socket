import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_STATUS
} from './type';

const initialState = {
  userData: {},
  registrationError: '',
  status: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        userData: data,
      };
    }
    case USER_REGISTER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case USER_REGISTER_FAILED: {
      const {data} = action;
      return {
        ...state,
        registrationError: data,
      };
    }
    default:
      return state;
  }
};
