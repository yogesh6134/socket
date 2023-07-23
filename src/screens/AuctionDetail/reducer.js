import {
  GET_SINGLE_AUCTION_DATA,
  GET_SINGLE_AUCTION_DATA_SUCCESS,
  GET_SINGLE_AUCTION_DATA_FAILED,
} from './type';

const initialState = {
  singleAuctionData: {},
  errorShowAuction: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_AUCTION_DATA: {
      return {
        ...state,
      };
    }
    case GET_SINGLE_AUCTION_DATA_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        singleAuctionData: data,
      };
    }
    case GET_SINGLE_AUCTION_DATA_FAILED: {
      return {
        ...state,
        singleAuctionData: [],
      };
    }
    default:
      return state;
  }
};
