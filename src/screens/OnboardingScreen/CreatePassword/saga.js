import { takeLatest } from "redux-saga/effects";
import { hideLoader, showLoader, showToast } from "@utils/loaderAndToastMethod";
import { NAVIGATION_SCREENS } from "@utils/navigationScreen";
import Config from "@utils/apiConstant";
import { Request } from "@services";
import {
  USER_CHANGE_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_REQUEST,
} from "./type";
import { CommonActions } from "@react-navigation/native";
import { recordError } from "@utils/crashlytics";

function* resetPassword({ data, navigation }) {
  yield showLoader();
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: NAVIGATION_SCREENS.LOGIN }],
  });
  try {
    const response = yield Request.post(Config.signup, data);
    if (response.success === true) {
      yield showToast(response.message, "success");
      yield navigation.dispatch(resetAction);
    } else {
      yield showToast(response.data.error, "danger");
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}
function* changePassword({ data, navigation }) {
  yield showLoader();
  try {
    const response = yield Request.post(Config.signup, data);
    if (response.success === true) {
      yield showToast(response.message, "success");
      yield navigation.goBack();
    } else {
      yield showToast(response.data.error, "danger");
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}

export function* resetPasswordSaga() {
  yield takeLatest(USER_RESET_PASSWORD_REQUEST, resetPassword);
  yield takeLatest(USER_CHANGE_PASSWORD_REQUEST, changePassword);
}
