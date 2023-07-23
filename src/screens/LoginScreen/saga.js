import {takeLatest, put} from 'redux-saga/effects';
import {USER_LOGIN_REQUEST, USER_PHONE_REQUEST} from './type';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import {hideLoader, showLoader, showToast} from '@utils/loaderAndToastMethod';
import {userLoginFailed, userLoginSuccess} from './action';

import Config from '@utils/apiConstant';
import {Request} from '@services';
import {recordError} from '@utils/crashlytics';
import * as RootNavigation from '@utils/navigateTo';
import { referCodeRequest } from '@redux/action/CommonAction';


function* loginRequest({data}) {
  yield showLoader();
  try {
    const response = yield Request.post(Config.Login, data);
    if (response.success === true) {
      yield put(userLoginSuccess(response));
      yield put(userLoginFailed(null));
      yield showToast(response.message, 'success');
      RootNavigation.navigate(NAVIGATION_SCREENS.TABNAVIGATOR)
    } else if (
      response.data.error ===
      'Email Address is not verified.Please Enter 4 Digit OTP to Verify Email Address.'
    ) {
      yield put(userLoginFailed(''));
      RootNavigation.navigate(NAVIGATION_SCREENS.OTP_SCREEN, {
        email: data.email,
      });
    } else {
      yield showToast(response.data.error, 'danger');
      yield put(userLoginFailed(response.data.error));
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}
//
function* loginWithPhoneRequest({data, mobile}) {
  yield showLoader();
  try {
    const response = yield Request.post(Config.Login_With_Phone, data);
    if (response.success === true) {
      yield put(userLoginSuccess(response));
      yield put(userLoginFailed(null));
      yield showToast(response.message, 'success');
      yield referCodeRequest('');
      RootNavigation.navigate(NAVIGATION_SCREENS.TABNAVIGATOR)
    } else {
      yield showToast(response.data.error, 'danger');
      yield put(userLoginFailed(response.data.error));
      if (response.data.status === 0) {
        RootNavigation.navigate(NAVIGATION_SCREENS.OTP_SCREEN, {phone: mobile});
      }
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}

export function* loginSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, loginRequest);
  yield takeLatest(USER_PHONE_REQUEST, loginWithPhoneRequest);
}
