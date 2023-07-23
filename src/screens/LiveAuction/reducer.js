import {
  BUY_AUCTION_SUCCESS,
  BUY_AUCTION_FAILED,
  USER_AUCTION_REQUEST,
  PROCESSING_LIVE_SUCCESS,
  PROCESSING_LIVE_FAILED,
  BUY_AUCTION_PAYMENT_REQUEST,
} from './type';

const initialState = {
  success: false,
  activeUser: 0,
  auctionResult: {},
  LiveAuction: [],
  isModalVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUY_AUCTION_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        auctionResult: data,
      };
    }

    case BUY_AUCTION_PAYMENT_REQUEST: {
      const {data} = action;
      return {
        ...state,
        success: data,
      };
    }

    case BUY_AUCTION_FAILED: {
      return {
        ...state,
        success: false,
      };
    }
    case PROCESSING_LIVE_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        LiveAuction: data,
      };
    }

    case PROCESSING_LIVE_FAILED: {
      return {
        ...state,
        LiveAuction: [],
      };
    }

    case USER_AUCTION_REQUEST: {
      const {data} = action;
      return {
        ...state,
        activeUser: data,
      };
    }
    case 'SHOW_MODAL':
      return {
        ...state,
        isModalVisible: true,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        isModalVisible: false,
      };

    default:
      return state;
  }
};
