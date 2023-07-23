import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import StackNavigation from '@navigation/';
import SplashScreen from 'react-native-splash-screen';
import LoadingView from '@components/LoadingView/index';
import PushController from '@services/PushController';
import {Provider} from 'react-redux';
import {store, persistor} from '@redux/configureStore';
import FlashMessage from 'react-native-flash-message';
import {PersistGate} from 'redux-persist/integration/react';
import CustomModal from '@components/CustomModal';
import ReferalCode from '@services/ReferalCode';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
        <PushController />
        <ReferalCode />
        <LoadingView />
        <CustomModal />
      </PersistGate>
      <FlashMessage position="top" />
    </Provider>
  );
}
