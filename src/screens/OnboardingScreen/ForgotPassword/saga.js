import { takeLatest, put } from "redux-saga/effects";
import { hideLoader, showLoader, showToast } from "@utils/loaderAndToastMethod";
import { NAVIGATION_SCREENS } from "@utils/navigationScreen";
import Config from "@utils/apiConstant";
import { Request } from "@services";
import { forgotPasswordSuccess } from "./action";
import { FORFOT_PASSWORD_REQUEST } from "./type";
import * as RootNavigation from "@utils/navigateTo";

function* forgotPasswordRequest({ data }) {
  yield showLoader();
  try {
    const response = yield Request.post(Config.signup, data);
    if (response.success === true) {
      yield put(forgotPasswordSuccess(response));
      RootNavigation.navigate(NAVIGATION_SCREENS.OTP_SCREEN, {
        email: data.email,
        phone: data.phone,
        type: data.type,
      });
    } else {
      if (data.type === "email") {
        yield showToast(response.data.email, "danger");
      } else {
        yield showToast(
          [
            `${response.data.phone}  ${
              response?.data?.country_code ? response?.data?.country_code : ""
            }`,
          ],
          "danger"
        );
      }
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}

export function* forgotPasswordSaga() {
  yield takeLatest(FORFOT_PASSWORD_REQUEST, forgotPasswordRequest);
}
