import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ALL_AUCTION_DATA, JOIN_AUCTION_REQUEST } from "./type";
import Config from "@utils/apiConstant";
import { Request } from "@services";
import { allAuctionSuccess, joinAuctionSuccess, resultMessage } from "./action";
import { showCustomModal, showToast } from "@utils/loaderAndToastMethod";
import { NAVIGATION_SCREENS } from "@utils/navigationScreen";
import { recordError } from "@utils/crashlytics";
import * as RootNavigation from "@utils/navigateTo";
function* allAuction() {
  try {
    const response = yield Request.get(Config.Login);
    if (response) {
      yield put(allAuctionSuccess(response));
    }
  } catch (error) {
    recordError(error);
  }
}

function* joinAuction({ data }) {
  try {
    const response = yield Request.post(Config.signup, data);
    if (response.success) {
      yield put(joinAuctionSuccess(true));
      yield put(resultMessage(response.message.auction_name));
      yield showCustomModal({
        name: response.message.auction_name,
        join: "success",
        lucky_draw: response.message.lucky_draw,
      });
      RootNavigation.navigate("My Auctions");
    } else if (!response.success && response?.message?.amount_required) {
      yield showToast(response.data.error, "warning");
      yield delay(2000);
      yield put(joinAuctionSuccess(false));
      yield put(resultMessage(""));
      yield RootNavigation.navigate(NAVIGATION_SCREENS.PACKAGES, {
        amount: response.message.amount_required,
        type: "wallets",
        auctionId: data.auction_id,
      });
    } else if (
      !response.success &&
      response?.message?.due_payment?.length > 0
    ) {
      yield showToast(response.data.error, "danger");
      yield put(joinAuctionSuccess(false));
      yield put(resultMessage(""));
      yield RootNavigation.navigate(NAVIGATION_SCREENS.ADD_FUND, {
        amount: response?.message?.due_payment[0].winning_price,
        auction_id: response?.message?.due_payment[0].auction_id,
        currency_name: response?.message?.due_payment[0].currency_name,
        Payment_currency:
          response?.message?.due_payment[0].custom_currency_symbol,
      });
    } else {
      yield showToast(response.data.error, "warning");
      yield put(joinAuctionSuccess(false));
      yield put(resultMessage(""));
    }
  } catch (error) {
    recordError(error);
    yield put(joinAuctionSuccess(false));
  }
}
export function* DashboardSaga() {
  yield takeEvery(ALL_AUCTION_DATA, allAuction);
  yield takeLatest(JOIN_AUCTION_REQUEST, joinAuction);
}
