import {REF_AND_EARN} from './type';

const initialState = {
  success: false,
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REF_AND_EARN: {
      const {data} = action;
      return {
        ...state,
        userData: data,
      };
    }
    default:
      return state;
  }
};
