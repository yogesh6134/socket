import { takeLatest, put, takeEvery, call, delay } from "redux-saga/effects";
import {
  EDIT_PROFILE_PIC_REQUEST,
  EDIT_USER_PROFILE_REQUEST,
  USER_PROFILE_REQUEST,
  VERIFY_PHONE_REQUEST,
  CHECK_TOKEN_REQUEST,
} from "./type";
import { hideLoader, showLoader, showToast } from "@utils/loaderAndToastMethod";
import Config from "@utils/apiConstant";
import config from "@utils/apiUrl";
import { Request } from "@services";
import { userProfileSuccess } from "./action";
import { recordError } from "@utils/crashlytics";
import { NAVIGATION_SCREENS } from "@utils/navigationScreen";
import axios from "axios";
import { store, persistor } from "@redux/configureStore";
import * as RootNavigation from "@utils/navigateTo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";

function* userProfileRequest() {
  try {
    const response = yield Request.get(Config.signup);
    yield put(userProfileSuccess(response));
  } catch (error) {
    recordError(error);
  }
}
//Edit Profile
function* userEditProfileRequest({ data }) {
  yield showLoader();
  try {
    const response = yield Request.post(Config.signup, data);
    if (response.success === true) {
      yield showToast(response.message, "success");
      RootNavigation.navigate(NAVIGATION_SCREENS.DRAWERSCREEN);
    } else {
      if (response.data.mobile) {
        yield showToast(response.data.mobile, "danger");
      } else {
        yield showToast(response.data, "danger");
      }
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}
//Edit Profile Pic Only
function* editProfilePicture({ data }) {
  const getStore = store.getState();
  const loginData = getStore.loginReducer.userData?.data?.token;
  const signupData = getStore.otpReducer.userData?.data?.token;
  const access_token = loginData || signupData;
  yield showLoader();
  try {
    const response = yield call(
      axios.post,
      `${config.signup}${Config.signup}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data.success) {
      showToast(response.data.message, "success");
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}

//Verify mobile
function* verifyMobile({ data }) {
  yield showLoader();
  try {
    const response = yield Request.post(Config.verify_mobile, data);
    if (response.success === true) {
      yield showToast(response.message.data, "success");
      RootNavigation.navigate(NAVIGATION_SCREENS.OTP_SCREEN, {
        phone: data.mobile,
        type: "verifyPhone",
      });
    } else {
      showToast(response.message, "danger");
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}

function* validateToken() {
  try {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        { name: NAVIGATION_SCREENS.LOGIN, params: { val: "logoutSuccess" } },
      ],
    });
    const response = yield Request.get(Config.checkToken);
    if (!response.success) {
      yield showToast("Your Account is Logged into another device.", "danger");
      AsyncStorage.clear();
      yield persistor.purge();
      yield delay(1000);
      yield RootNavigation.navigationRef.dispatch(resetAction);
    }
  } catch (error) {
    recordError(error);
  }
}

export function* ProfileSaga() {
  yield takeEvery(USER_PROFILE_REQUEST, userProfileRequest);
  yield takeLatest(EDIT_USER_PROFILE_REQUEST, userEditProfileRequest);
  yield takeLatest(EDIT_PROFILE_PIC_REQUEST, editProfilePicture);
  yield takeLatest(VERIFY_PHONE_REQUEST, verifyMobile);
  yield takeLatest(CHECK_TOKEN_REQUEST, validateToken);
}
