import {takeLatest, put} from 'redux-saga/effects';
import {CATEGORIES} from '../types';
import Config from '@utils/apiConstant';
import {Request} from '@services';
import {recordError} from '@utils/crashlytics';
import {categoriesSuccess} from '../action/CommonAction';

function* categories() {
  try {
    const response = yield Request.get(Config.Categories);
    if (response) {
      yield put(categoriesSuccess(response));
    }
  } catch (error) {
    recordError(error);
  }
}

export function* SagaServices() {
  yield takeLatest(CATEGORIES, categories);
}
