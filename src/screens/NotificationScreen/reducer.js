import {USER_NOTIFICATION_SUCCESS, USER_NOTIFICATION_FAILED} from './type';

const initialState = {
  NotificationData: [],
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_NOTIFICATION_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        NotificationData: data,
      };
    }
    case USER_NOTIFICATION_FAILED: {
      const {data} = action;
      return {
        ...state,
        errorMessage: data,
      };
    }
    default:
      return state;
  }
};
