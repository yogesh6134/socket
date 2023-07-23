import { all } from "redux-saga/effects";
import { loginSaga } from "@screens/LoginScreen/saga";
import { userRegisterSaga } from "@screens/OnboardingScreen/SignupScreen/saga";
import { verifyUserSaga } from "@screens/OnboardingScreen/OtpScreen/saga";
import { forgotPasswordSaga } from "@screens/OnboardingScreen/ForgotPassword/saga";
import { ProfileSaga } from "@screens/ProfileScreen/saga";
import { SagaServices } from "./saga/sagaServices";
import { logoutSaga } from "@screens/CustomDrawer/saga";
import { DashboardSaga } from "@screens/HomeScreen/saga";
import { resetPasswordSaga } from "@screens/OnboardingScreen/CreatePassword/saga";
import { transactionHistorySaga } from "@screens/TransactionsHistory/saga";
import { notificationSaga } from "@screens/NotificationScreen/saga";
import { auctionSagas } from "@screens/AuctionScreen/saga";
import { singleAuctionDetailSaga } from "@screens/AuctionDetail/saga";
import { liveAuctionSaga } from "@screens/LiveAuction/saga";
import { packageSaga } from "@screens/Packages/saga";
import { HelpAndSupportSaga } from "@screens/HelpAndSupport/saga";

export function* rootSaga() {
  yield all([
    loginSaga(),
    userRegisterSaga(),
    verifyUserSaga(),
    forgotPasswordSaga(),
    resetPasswordSaga(),
    ProfileSaga(),
    SagaServices(),
    logoutSaga(),
    DashboardSaga(),
    transactionHistorySaga(),
    notificationSaga(),
    auctionSagas(),
    singleAuctionDetailSaga(),
    liveAuctionSaga(),
    packageSaga(),
    HelpAndSupportSaga(),
  ]);
}
