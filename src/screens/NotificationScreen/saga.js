import { takeLatest, call, put } from "redux-saga/effects";
import Config from "@utils/apiConstant";
import { Request } from "@services";
import { recordError } from "@utils/crashlytics";
import { userNotificationSuccess } from "./action";
import {
  USER_NOTIFICATION_REQUEST,
  USER_NOTIFICATION_REQUEST_READ,
} from "./type";
import { NAVIGATION_SCREENS } from "@utils/navigationScreen";
import * as RootNavigation from "@utils/navigateTo";

function* notificationRequest() {
  try {
    const response = yield Request.get(Config.signup);
    yield put(userNotificationSuccess(response.data));
  } catch (error) {
    recordError(error);
  }
}

function* notificationRequestRead({ data, item }) {
  try {
    const response = yield Request.post(Config.signup, data);
    if (response.success) {
      switch (true) {
        case item.notification_type === "6":
          return RootNavigation.navigate(NAVIGATION_SCREENS.WINNERSCREEN, {
            item,
          });
        case item.notification_type === "7":
          return RootNavigation.navigate(
            NAVIGATION_SCREENS.TRANSACTIONHOSTORY,
            { type: item.notification_type }
          );
        case item.notification_type === "1":
          return RootNavigation.navigate(NAVIGATION_SCREENS.PROFILE);
        default:
          return RootNavigation.navigate(NAVIGATION_SCREENS.AUCTION_DETAIL, {
            itemId: item.slug,
            joined:
              item.notification_type === "5" && item.is_joined === 0
                ? false
                : true,
            type: true,
          });
      }
    }
  } catch (error) {
    recordError(error);
  }
}

export function* notificationSaga() {
  yield takeLatest(USER_NOTIFICATION_REQUEST, notificationRequest);
  yield takeLatest(USER_NOTIFICATION_REQUEST_READ, notificationRequestRead);
}
