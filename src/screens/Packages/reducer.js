import {PACKAGES_SUCCESS,PACKAGES_FAILED} from './type';

const initialState = {
  packageData: [],
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PACKAGES_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        packageData: data,
      };
    }
    case PACKAGES_FAILED: {
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
