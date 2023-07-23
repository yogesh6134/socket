import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {
  userLoginReducerPersistConfig,
  userVerifyedReducerPersistConfig,
  userProfileReducerPersistConfig,
  homeReducerPersistConfig,
  filterReducerPersistConfig,
  liveAuctionReducerPersistConfig,
  auctionReducerPersistConfig,
  notificationReducerPersistConfig,
  transactionReducerPersistConfig,
} from '@utils/persist';
import LoadingReducer from '@components/LoadingView/reducer';
import modalReducer from '@components/CustomModal/reducer';
import loginReducer from '@screens/LoginScreen/reducer';
import signupReducer from '@screens/OnboardingScreen/SignupScreen/reducer';
import otpReducer from '@screens/OnboardingScreen/OtpScreen/reducer';
import forgotReducer from '@screens/OnboardingScreen/ForgotPassword/reducer';
import resetPasswordReducer from '@screens/OnboardingScreen/CreatePassword/reducer';
import FilterReducer from './reducer/FilterDataReducer';
import profileReducer from '@screens/ProfileScreen/reducer';
import logutReducer from '@screens/CustomDrawer/reducer';
import homeReducer from '@screens/HomeScreen/reducer';
import transactionHistoryReducer from '@screens/TransactionsHistory/reducer';
import notificationReducer from '@screens/NotificationScreen/reducer';
import auctionReducers from '@screens/AuctionScreen/reducer';
import singleAuctionDetailReducer from '@screens/AuctionDetail/reducer';
import liveAuctionReducer from '@screens/LiveAuction/reducer';
import packageReducer from '@screens/Packages/reducer';
import {LOGOUT_REQUEST, LOGOUT_SUCCESS} from '@screens/CustomDrawer/type';

const appReducer = combineReducers({
  LoadingReducer,
  modalReducer,
  loginReducer: persistReducer(userLoginReducerPersistConfig, loginReducer),
  signupReducer,
  otpReducer: persistReducer(userVerifyedReducerPersistConfig, otpReducer),
  forgotReducer,
  resetPasswordReducer,
  FilterReducer: persistReducer(filterReducerPersistConfig, FilterReducer),
  transactionHistoryReducer: persistReducer(
    transactionReducerPersistConfig,
    transactionHistoryReducer,
  ),
  notificationReducer: persistReducer(
    notificationReducerPersistConfig,
    notificationReducer,
  ),
  packageReducer,
  profileReducer: persistReducer(
    userProfileReducerPersistConfig,
    profileReducer,
  ),
  logutReducer,
  homeReducer: persistReducer(homeReducerPersistConfig, homeReducer),
  auctionReducers: persistReducer(auctionReducerPersistConfig, auctionReducers),
  singleAuctionDetailReducer,
  liveAuctionReducer: persistReducer(
    liveAuctionReducerPersistConfig,
    liveAuctionReducer,
  ),
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
