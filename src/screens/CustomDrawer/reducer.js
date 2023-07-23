import { LOGOUT_SUCCESS, LOGOUT_FAILED } from './type';

const initialState = {
  error: '',
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        userData: {},
        
      };
    }
    case LOGOUT_FAILED: {
      const {data} = action
      return {
        ...state,
        error: data,
      };
    }
    default:
      return state;
  }
};
