import { Request } from "@services/index";
import { takeLatest } from "redux-saga/effects";
import { HELP_AND_SUPPORT } from "./type";
import Config from "@utils/apiConstant";
import { showToast } from "@utils/loaderAndToastMethod";

function* HelpCenter({ data }) {
  try {
    const response = yield Request.post(Config.signup, data);
    if (response.success) {
      yield showToast(response.message, "success");
    }
  } catch (error) {
    return null;
  }
}

export function* HelpAndSupportSaga() {
  yield takeLatest(HELP_AND_SUPPORT, HelpCenter);
}
