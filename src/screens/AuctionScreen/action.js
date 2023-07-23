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

export const upcomingAuctionRequest = () => ({
  type: UPCOMING_AUCTIONS_REQUEST,
});
export const upcomingAuctionRequestSuccess = data => ({
  type: UPCOMING_AUCTIONS_SUCCESS,
  data,
});

export const cancelledAuctionRequest = () => ({
  type: CANCELLED_AUCTIONS_REQUEST,
});

export const cancelledAuctionRequestSuccess = data => ({
  type: CANCELLED_AUCTIONS_SUCCESS,
  data,
});

export const completedAuctionRequest = () => ({
  type: COMPLETED_AUCTIONS_REQUEST,
});

export const completedAuctionRequestSuccess = data => ({
  type: COMPLETED_AUCTIONS_SUCCESS,
  data,
});

export const wonAuctionRequest = () => ({
  type: WON_AUCTIONS_REQUEST,
});

export const wonAuctionRequestSuccess = data => ({
  type: WON_AUCTIONS_SUCCESS,
  data,
});
