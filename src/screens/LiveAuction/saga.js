import { showCustomModal } from "@utils/loaderAndToastMethod";
import { takeLatest, put, takeEvery } from "redux-saga/effects";
import { BUY_AUCTION_REQUEST, PROCESSING_LIVE_REQUEST } from "./type";
import Config from "@utils/apiConstant";
import { Request } from "@services";
import { recordError } from "@utils/crashlytics";
import {
  userBuyAuctionPaymentRequest,
  userBuyAuctionSuccess,
  processingLiveSuccess,
} from "./action";
import socketServices from "@utils/socketServices";

function* buyAuctionRequest({ data }) {
  try {
    const response = yield Request.post(Config.signup, data);
    if (response.success) {
      yield showCustomModal(response.data);
      yield put(userBuyAuctionSuccess(response.data));
      yield put(userBuyAuctionPaymentRequest(response.success));
      //yield socketServices.disconnect()
    }
  } catch (error) {
    recordError(error);
  }
}

function* processingLiveAuction() {
  try {
    const response = yield Request.get(Config.signup);
    if (response.data.length > 0) {
      yield put(processingLiveSuccess(response.data));
    } else {
      yield put(processingLiveSuccess([]));
    }
  } catch (error) {
    recordError(error);
  }
}

export function* liveAuctionSaga() {
  yield takeLatest(BUY_AUCTION_REQUEST, buyAuctionRequest);
  yield takeEvery(PROCESSING_LIVE_REQUEST, processingLiveAuction);
}
