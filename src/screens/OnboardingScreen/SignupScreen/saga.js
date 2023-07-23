import {hideLoader, showLoader, showToast} from '@utils/loaderAndToastMethod';
import * as RootNavigation from '@utils/navigateTo';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import {takeLatest, put, delay} from 'redux-saga/effects';
import {USER_REGISTER_REQUEST} from './type';
import Config from '@utils/apiConstant';
import {Request} from '@services';
import {
  userRegisterFailed,
  userRegisterSuccess,
  userRegisterStatus,
} from './action';
import { referCodeRequest } from '@redux/action/CommonAction';
import { recordError } from '@utils/crashlytics';

function* registerRequest({data}) {
  yield showLoader();
  try {
    const response = yield Request.post(Config.Register, data);
    if (response.success === true) {
      yield put(userRegisterSuccess(response));
      yield put(userRegisterStatus(response.status));
      yield put(userRegisterFailed(''));
      yield showToast(response.message, 'success');
      yield referCodeRequest('');
      RootNavigation.navigate(NAVIGATION_SCREENS.OTP_SCREEN, {
        email: data.email,
        type: 'email',
        location_path: 'signup',
      });
    } else {
      if (response.data.email) {
        yield showToast(
          'Your account is already registered. Please login!',
          'warning',
        );
        yield delay(5000);
      } else {
        yield showToast(response.data.mobile[0], 'danger');
      }
    }
  } catch (error) {
    recordError(error);
  }
  yield hideLoader();
}

export function* userRegisterSaga() {
  yield takeLatest(USER_REGISTER_REQUEST, registerRequest);
}
