import {call, delay, takeEvery, takeLatest} from 'redux-saga/effects';
import {hideLoader, showLoader, showToast} from '@utils/loaderAndToastMethod';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import Config from '@utils/apiConstant';
import {Request} from '@services';
import {LOGOUT_REQUEST} from './type';
import * as RootNavigation from '@utils/navigateTo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { persistor} from '@redux/configureStore';
import { recordError } from '@utils/crashlytics';

function* logoutRequest() {
  yield showLoader();
  try {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: NAVIGATION_SCREENS.LOGIN}],
    });
    const response = yield Request.post(Config.Logout);
    if (response.success) {
      // yield call([AsyncStorage, 'clear']);
      AsyncStorage.clear()
      yield persistor.purge();
      yield delay(1000)
      yield RootNavigation.navigationRef.dispatch(resetAction);
    } else {
      yield showToast(response.message, 'danger');
    }
  } catch (error) {
    recordError(error)
  }
  yield hideLoader();
}

export function* logoutSaga() {
  yield takeEvery(LOGOUT_REQUEST, logoutRequest);
}
