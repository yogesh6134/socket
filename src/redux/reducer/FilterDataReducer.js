import {
  PUSH_TOKEN,
  FILTER_DATA,
  CATEGORIES,
  CATEGORIES_SUCCESS,
  CATEGORIES_CLEAR,
  SORT,
  REFER_CODE
} from '../types';

const initialState = {
  pushToken: '',
  TabData: false,
  categories: [],
  sortItem: 'Newest',
  refer_code: ''
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_TOKEN:
      return {
        ...state,
        pushToken: action.payload,
      };
    case FILTER_DATA:
      return {
        ...state,
        TabData: action.payload,
      };
    case CATEGORIES: {
      return {
        ...state,
      };
    }
    case CATEGORIES_SUCCESS: {
      const {data} = action;
      return {
        ...state,
        categories: data,
      };
    }
    case CATEGORIES_CLEAR: {
      return {
        ...state,
        categories: [],
      };
    }
    case SORT:
      return {
        ...state,
        sortItem: action.payload,
      };
      case REFER_CODE: 
      return {
        ...state,
        refer_code: action.payload
      }
    default:
      return state;
  }
};
export default FilterReducer;
