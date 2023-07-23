import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILED,
  USER_PROFILE_REQUEST,
} from './type';

const initialState = {
  profileData: null,
  updateImage: null,
  err: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST: {
      return {
        ...state,
      };
    }
    case USER_PROFILE_SUCCESS: {
      return {
        ...state,
        profileData: action,
      };
    }
    case USER_PROFILE_FAILED: {
      return {
        ...state,
        err: action,
      };
    }
    default:
      return state;
  }
};
