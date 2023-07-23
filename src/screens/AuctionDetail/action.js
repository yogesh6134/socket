import {
  GET_SINGLE_AUCTION_DATA,
  GET_SINGLE_AUCTION_DATA_SUCCESS,
  GET_SINGLE_AUCTION_DATA_FAILED,
} from './type';

export const singleAuctionRequest = id => ({
  type: GET_SINGLE_AUCTION_DATA,
  id,
});

export const singleAuctionSuccess = data => ({
  type: GET_SINGLE_AUCTION_DATA_SUCCESS,
  data,
});

export const singleAuctionFailed = data => ({
  type: GET_SINGLE_AUCTION_DATA_FAILED,
  data,
});
