import {SHOW_MODAL, HIDE_MODAL} from './type';

export const showModal = data => ({
  type: SHOW_MODAL,
  data,
});
export const hideModal = data => ({
  type: HIDE_MODAL,
  data,
});
