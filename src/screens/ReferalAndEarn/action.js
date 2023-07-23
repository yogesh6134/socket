import {USER_REGISTER_SUCCESS, USER_REGISTER_FAILED} from './type';

export const referalRequest = ({data, navigation}) => ({
  type: USER_REGISTER_SUCCESS,
  data,
  navigation,
});
