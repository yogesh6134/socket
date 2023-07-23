import {
  USER_TRANSACTION_FAILED,
  USER_TRANSACTION_SUCCESS,
  TRANSACTION_CHARGES_SUCCESS,
  USER_PURCHASES_ITEM_SUCCESS,
  REFERRAL_REWARDS_SUCCESS,
} from './type';

const initialState = {
  stripeData: [],
  errorMessage: '',
  stripeDataCharges: [],
  purchasesItem: [],
  referralData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_TRANSACTION_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        stripeData: data,
      };
    }
    case USER_TRANSACTION_FAILED: {
      const {data} = action;
      return {
        ...state,
        errorMessage: data,
      };
    }
    case TRANSACTION_CHARGES_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        stripeDataCharges: data,
      };
    }
    case USER_PURCHASES_ITEM_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        purchasesItem: data,
      };
    }
    case REFERRAL_REWARDS_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        referralData: data,
      };
    }

    default:
      return state;
  }
};
