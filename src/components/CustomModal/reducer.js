import {SHOW_MODAL, HIDE_MODAL} from './type';

const INITIAL_STATE = {
  isVisibleModal: false,
  data: undefined,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isVisibleModal: true,
        data: action.data,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isVisibleModal: false,
        data: undefined,
      };
    default:
      return state;
  }
};
