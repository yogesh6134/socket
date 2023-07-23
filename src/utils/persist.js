import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLoginReducerPersistConfig = {
  key: 'LoginReducer',
  storage: AsyncStorage,
};

export const userSignUpReducerPersistConfig = {
  key: 'signupReducer',
  storage: AsyncStorage,
};

export const userVerifyedReducerPersistConfig = {
  key: 'verifyReducer',
  storage: AsyncStorage,
};

export const userProfileReducerPersistConfig = {
  key: 'profileReducer',
  storage: AsyncStorage,
};

export const homeReducerPersistConfig = {
  key: 'homeReducer',
  storage: AsyncStorage,
};

export const filterReducerPersistConfig = {
  key: 'filterReducer',
  storage: AsyncStorage,
};
export const notificationReducerPersistConfig = {
  key: 'notificationReducer',
  storage: AsyncStorage,
}
export const liveAuctionReducerPersistConfig = {
  key: 'liveAuctionReducer',
  storage: AsyncStorage,
};

export const auctionReducerPersistConfig = {
  key: 'auctionReducer',
  storage: AsyncStorage,
};

export const transactionReducerPersistConfig = {
  key: 'transactionReducer',
  storage: AsyncStorage,
}
