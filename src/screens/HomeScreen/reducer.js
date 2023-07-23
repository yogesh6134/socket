import {
  ALL_AUCTION_DATA,
  ALL_AUCTION_SUCCESS,
  JOIN_AUCTION__SUCCESS,
  AUCTION_MESSAGE,
} from './type';

const initialState = {
  allData: [],
  showAlert: false,
  joinAuctionDate: [],
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_AUCTION_DATA: {
      return {
        ...state,
      };
    }
    case ALL_AUCTION_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        allData: data,
      };
    }
    case JOIN_AUCTION__SUCCESS: {
      const {data} = action;
      return {
        ...state,
        showAlert: data,
      };
    }
    case AUCTION_MESSAGE: {
      const {data} = action;
      return {
        ...state,
        message: data,
      };
    }
    default:
      return state;
  }
};
