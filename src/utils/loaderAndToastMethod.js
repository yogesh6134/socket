import {showMessage} from 'react-native-flash-message';
import {put} from 'redux-saga/effects';

import {hideLoading, showLoading} from '@components/LoadingView/action';
import {hideModal, showModal} from '@components/CustomModal/action';

export function* hideLoader(isError, errorMessage) {
  yield put(hideLoading(isError, errorMessage));
}
export function* showLoader(silentFetch) {
  if (!silentFetch) {
    yield put(showLoading());
  }
}

export function* showCustomModal(data) {
  yield put(showModal(data));
}

export function* hideCustomModal() {
  yield put(hideModal());
}

export const showToast = (message, type) => {
  return showMessage({
    message: `${message}`,
    type: `${type}`,
    icon: 'auto',
  });
};

export const hideToast = (message, type) =>
  showMessage({
    message: `${message}`,
    type: type,
    icon: 'auto',
  });
