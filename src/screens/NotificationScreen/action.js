import {
  USER_NOTIFICATION_REQUEST,
  USER_NOTIFICATION_SUCCESS,
  USER_NOTIFICATION_FAILED,
  USER_NOTIFICATION_REQUEST_READ,
  USER_NOTIFICATION_SUCCESS_READ,
  USER_NOTIFICATION_FAILED_READ,
} from './type';

export const userNotificationRequest = () => ({
  type: USER_NOTIFICATION_REQUEST,
});

export const userNotificationSuccess = data => ({
  type: USER_NOTIFICATION_SUCCESS,
  data,
});

export const userNotificationFailed = data => ({
  type: USER_NOTIFICATION_FAILED,
  data,
});
//
export const userNotificationRequestRead = ({data, item}) => ({
  type: USER_NOTIFICATION_REQUEST_READ,
  data,
  item,
});

export const userNotificationSuccessRead = data => ({
  type: USER_NOTIFICATION_SUCCESS_READ,
  data,
});

export const userNotificationFailedRead = data => ({
  type: USER_NOTIFICATION_FAILED_READ,
  data,
});
