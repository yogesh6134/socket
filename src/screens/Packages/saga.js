import { takeLatest, call, put } from "redux-saga/effects";
import Config from "@utils/apiConstant";
import { Request } from "@services";
import { recordError } from "@utils/crashlytics";
import { packageSuccess, userNotificationSuccess } from "./action";
import { PACKAGES_REQUEST } from "./type";

function* packageRequest() {
  try {
    const response = yield Request.get(Config.signup);
    yield put(packageSuccess(response.data));
  } catch (error) {
    recordError(error);
  }
}

export function* packageSaga() {
  yield takeLatest(PACKAGES_REQUEST, packageRequest);
}
