import {
  USER_TRANSACTION_REQUEST,
  USER_TRANSACTION_SUCCESS,
  USER_TRANSACTION_FAILED,
  TRANSACTION_CHARGES_REQUEST,
  TRANSACTION_CHARGES_SUCCESS,
  USER_PURCHASES_ITEM_REQUEST,
  USER_PURCHASES_ITEM_SUCCESS,
  REFERRAL_REWARDS_REQUEST,
  REFERRAL_REWARDS_SUCCESS,
} from './type';

export const userTransactionRequest = () => ({
  type: USER_TRANSACTION_REQUEST,
});

export const userTransactionSuccess = data => ({
  type: USER_TRANSACTION_SUCCESS,
  data,
});

export const userTransactionFailed = data => ({
  type: USER_TRANSACTION_FAILED,
  data,
});

export const userTransactionChargesRequest = () => ({
  type: TRANSACTION_CHARGES_REQUEST,
});

export const userTransactionChargesSuccess = data => ({
  type: TRANSACTION_CHARGES_SUCCESS,
  data,
});

export const userPurchasesItemRequest = () => ({
  type: USER_PURCHASES_ITEM_REQUEST,
});

export const userPurchasesItemSuccess = data => ({
  type: USER_PURCHASES_ITEM_SUCCESS,
  data,
});

export const userRewardsRequest = () => ({
  type: REFERRAL_REWARDS_REQUEST,
});

export const userrewardsSuccess = data => ({
  type: REFERRAL_REWARDS_SUCCESS,
  data,
});
