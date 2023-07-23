import { takeLatest, put } from "redux-saga/effects";
import Config from "@utils/apiConstant";
import { Request } from "@services";
import { recordError } from "@utils/crashlytics";
import {
  userTransactionChargesSuccess,
  userTransactionSuccess,
  userPurchasesItemSuccess,
} from "./action";
import {
  USER_TRANSACTION_REQUEST,
  TRANSACTION_CHARGES_REQUEST,
  USER_PURCHASES_ITEM_REQUEST,
  REFERRAL_REWARDS_REQUEST,
} from "./type";
import { showToast } from "@utils/loaderAndToastMethod";
import { userrewardsSuccess } from "./action";

function* transactionRequest() {
  try {
    const response = yield Request.get(Config.signup);
    if (response) {
      yield put(userTransactionSuccess(response.data));
    } else {
      yield showToast(response.data.error, "danger");
    }
  } catch (error) {
    recordError(error);
  }
}
function* transactionChargesRequest() {
  try {
    const response = yield Request.get(Config.signup);
    if (response.data.length > 0) {
      yield put(userTransactionChargesSuccess(response.data));
    }
  } catch (error) {
    recordError(error);
  }
}

function* purchaseRequest() {
  try {
    const response = yield Request.get(Config.signup);
    if (response.data.length > 0) {
      yield put(userPurchasesItemSuccess(response.data));
    }
  } catch (error) {
    recordError(error);
  }
}

function* referralRewardsDetail() {
  try {
    const response = yield Request.get(Config.signup);
    if (response.length > 0) {
      yield put(userrewardsSuccess(response));
    }
  } catch (error) {
    recordError(error);
  }
}

export function* transactionHistorySaga() {
  yield takeLatest(USER_TRANSACTION_REQUEST, transactionRequest);
  yield takeLatest(TRANSACTION_CHARGES_REQUEST, transactionChargesRequest);
  yield takeLatest(USER_PURCHASES_ITEM_REQUEST, purchaseRequest);
  yield takeLatest(REFERRAL_REWARDS_REQUEST, referralRewardsDetail);
}
