import {
  ALL_AUCTION_DATA,
  ALL_AUCTION_SUCCESS,
  JOIN_AUCTION_REQUEST,
  JOIN_AUCTION__SUCCESS,
  JOIN_AUCTION__FAILED,
  LOW_BALENCE,
  AUCTION_MESSAGE,
} from './type';

export const allAuctionRequest = () => ({
  type: ALL_AUCTION_DATA,
});

export const allAuctionSuccess = data => ({
  type: ALL_AUCTION_SUCCESS,
  data,
});

export const joinAuctionRequest = ({data}) => ({
  type: JOIN_AUCTION_REQUEST,
  data,
});

export const joinAuctionSuccess = data => ({
  type: JOIN_AUCTION__SUCCESS,
  data,
});

export const resultMessage = data => ({
  type: AUCTION_MESSAGE,
  data,
});

export const joinAuctionFailed = data => ({
  type: JOIN_AUCTION__FAILED,
  data,
});
