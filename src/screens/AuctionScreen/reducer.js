import {
  UPCOMING_AUCTIONS_REQUEST,
  UPCOMING_AUCTIONS_SUCCESS,
  CANCELLED_AUCTIONS_REQUEST,
  CANCELLED_AUCTIONS_SUCCESS,
  COMPLETED_AUCTIONS_REQUEST,
  COMPLETED_AUCTIONS_SUCCESS,
  WON_AUCTIONS_REQUEST,
  WON_AUCTIONS_SUCCESS,
} from './type';

const initialState = {
  upcomingAuctions: [],
  completedAuctions: [],
  canceledAuctions: [],
  wonAuctions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPCOMING_AUCTIONS_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        upcomingAuctions: data,
      };
    }
    case CANCELLED_AUCTIONS_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        canceledAuctions: data,
      };
    }
    case COMPLETED_AUCTIONS_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        completedAuctions: data,
      };
    }
    case WON_AUCTIONS_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        wonAuctions: data,
      };
    }
    default:
      return state;
  }
};
