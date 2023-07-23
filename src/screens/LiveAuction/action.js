import {
  BUY_AUCTION_REQUEST,
  BUY_AUCTION_SUCCESS,
  BUY_AUCTION_FAILED,
  PROCESSING_LIVE_REQUEST,
  PROCESSING_LIVE_SUCCESS,
  PROCESSING_LIVE_FAILED,
  BUY_AUCTION_PAYMENT_REQUEST,
  USER_AUCTION_REQUEST,
  SHOW_MODAL,
  HIDE_MODAL,
} from './type';

export const userBuyAuctionRequest = ({data}) => ({
  type: BUY_AUCTION_REQUEST,
  data,
});

export const userBuyAuctionSuccess = data => ({
  type: BUY_AUCTION_SUCCESS,
  data,
});

export const userBuyAuctionFailed = () => ({
  type: BUY_AUCTION_FAILED,
});

export const processingLiveRequest = () => ({
  type: PROCESSING_LIVE_REQUEST,
});

export const processingLiveSuccess = data => ({
  type: PROCESSING_LIVE_SUCCESS,
  data,
});

export const processingLiveFailed = data => ({
  type: PROCESSING_LIVE_FAILED,
  data,
});

export const userActiveAuctionRequest = data => ({
  type: USER_AUCTION_REQUEST,
  data,
});

export const userBuyAuctionPaymentRequest = data => ({
  type: BUY_AUCTION_PAYMENT_REQUEST,
  data,
});

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
