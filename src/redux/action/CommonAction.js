import {
  FILTER_DATA,
  CATEGORIES,
  CATEGORIES_SUCCESS,
  CATEGORIES_CLEAR,
  SORT,
  PUSH_TOKEN,
  REFER_CODE
} from '../types';

export function PushAction(payload) {
  return {
    type: PUSH_TOKEN,
    payload,
  };
}

export function FilterAction(payload) {
  return {
    type: FILTER_DATA,
    payload,
  };
}

export const categoriesRequest = () => ({
  type: CATEGORIES,
});

export const categoriesSuccess = data => ({
  type: CATEGORIES_SUCCESS,
  data,
});

export const categoriesClear = data => ({
  type: CATEGORIES_CLEAR,
  data,
});

export function sortRequest(payload) {
  return {
    type: SORT,
    payload,
  };
}

export function referCodeRequest(payload) {
  return {
    type: REFER_CODE,
    payload,
  };
}
