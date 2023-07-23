import { put, takeLatest } from "redux-saga/effects";
import { GET_SINGLE_AUCTION_DATA } from "./type";
import Config from "@utils/apiConstant";
import { singleAuctionSuccess } from "./action";
import { Request } from "@services";
import { recordError } from "@utils/crashlytics";

function* singleAuction({ id }) {
  try {
    const response = yield Request.get(Config.Login + id);
    if (response) {
      yield put(singleAuctionSuccess(response.data));
    } else {
      yield put(singleAuctionSuccess(null));
    }
  } catch (error) {
    recordError(error);
  }
}

export function* singleAuctionDetailSaga() {
  yield takeLatest(GET_SINGLE_AUCTION_DATA, singleAuction);
}
