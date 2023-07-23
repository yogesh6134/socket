import crashlytics from '@react-native-firebase/crashlytics';

export const recordError = error => {
  crashlytics().recordError(error);
};

export const logCrashlyticsEvent = eventName => {
  crashlytics().log(eventName);
};

export const testingCrash = () => {
  crashlytics().crash();
};
