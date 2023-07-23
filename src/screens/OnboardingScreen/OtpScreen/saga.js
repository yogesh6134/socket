import {takeLatest, put} from 'redux-saga/effects';
import {hideLoader, showLoader, showToast} from '@utils/loaderAndToastMethod';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import Config from '@utils/apiConstant';
import {Request} from '@services';
import * as RootNavigation from '@utils/navigateTo';
import {
  userVerifyFailed,
  userVerifySuccess,
} from './action';
import {USER_REGISTER_OTP_REQUEST, USER_RESEND_OTP_REQUEST} from './type';
import { CommonActions } from '@react-navigation/native';
import { recordError } from '@utils/crashlytics';

function* otpRequest({data, detail, navigation}) {
  yield showLoader();
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: NAVIGATION_SCREENS.LOGIN}],
  });
  try {
    const response = yield Request.post(Config.Verification, data);
    if (response.success === true) {
      yield put(userVerifySuccess(response));
      yield put(userVerifyFailed(''));
      yield showToast(response.message, 'success');
      if (detail.type && !detail.location_path) {
        if(detail.type === "verifyPhone") {
          yield navigation.goBack()
        }
        else {
        RootNavigation.navigate(NAVIGATION_SCREENS.CREATE_PASSWORD, {
          detail: detail.type,
          forgetEmail: data.email,
          phone: data.phone,
        });
      }
      } else {
        yield navigation.dispatch(resetAction)
      }
    } else {
      yield put(userVerifyFailed(response.data.error));
      yield showToast(response.data.error, 'danger');
    }
  } catch (error) {
    yield recordError(error)
  }
  yield hideLoader();
}

function* resentRequest({data}) {
  yield showLoader();
  try {
    const response = yield Request.post(Config.Reset_otp, data);
    if (response.success === true) {
      yield showToast(response.message, 'success');
    } else {
      yield showToast(response.data.error, 'danger');
    }
  } catch (error) {
    yield recordError(error)
  }
  yield hideLoader();
}

export function* verifyUserSaga() {
  yield takeLatest(USER_REGISTER_OTP_REQUEST, otpRequest);
  yield takeLatest(USER_RESEND_OTP_REQUEST, resentRequest);
}