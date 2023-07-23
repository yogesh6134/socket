import { takeLatest, put } from "redux-saga/effects";
import {
  UPCOMING_AUCTIONS_REQUEST,
  CANCELLED_AUCTIONS_REQUEST,
  COMPLETED_AUCTIONS_REQUEST,
  WON_AUCTIONS_REQUEST,
} from "./type";
import Config from "@utils/apiConstant";

import {
  cancelledAuctionRequestSuccess,
  completedAuctionRequestSuccess,
  upcomingAuctionRequestSuccess,
  wonAuctionRequestSuccess,
} from "./action";
import { Request } from "@services";
import { recordError } from "@utils/crashlytics";

function* upcomingAuctionRequests() {
  try {
    const response = yield Request.get(Config.login);
    if (response.data) {
      yield put(upcomingAuctionRequestSuccess(response.data));
    }
  } catch (error) {
    recordError(error);
  }
}
function* cancelledAuctionRequests() {
  try {
    const response = yield Request.get(Config.Login);
    if (response.data) {
      yield put(cancelledAuctionRequestSuccess(response.data));
    }
  } catch (error) {
    recordError(error);
  }
}

function* completedAuctionRequests() {
  try {
    const response = yield Request.get(Config.login);
    if (response.data) {
      yield put(completedAuctionRequestSuccess(response.data));
    }
  } catch (error) {
    recordError(error);
  }
}

function* wonAuctionRequests() {
  try {
    const response = yield Request.get(Config.login);
    if (response.data) {
      yield put(wonAuctionRequestSuccess(response.data));
    }
  } catch (error) {
    recordError(error);
  }
}

export function* auctionSagas() {
  yield takeLatest(UPCOMING_AUCTIONS_REQUEST, upcomingAuctionRequests);
  yield takeLatest(CANCELLED_AUCTIONS_REQUEST, cancelledAuctionRequests);
  yield takeLatest(COMPLETED_AUCTIONS_REQUEST, completedAuctionRequests);
  yield takeLatest(WON_AUCTIONS_REQUEST, wonAuctionRequests);
}
