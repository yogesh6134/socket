import React, {useEffect, useState} from 'react';
import {PushAction} from '@redux/action/CommonAction';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import RaffelWinner from '@components/RaffelWinner';

PushNotification.configure({
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

const PushController = () => {
  const dispatch = useDispatch();
  const {pushToken} = useSelector(state => state?.FilterReducer, shallowEqual);
  const [visible, setVisible] = useState(false);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      if (!pushToken) {
        const token = await messaging().getToken();
        dispatch(PushAction(token));
      }
    }
  };

  useEffect(() => {
    requestUserPermission();
    const unsubscribe = firebase.messaging().onMessage(response => {
      if (Platform.OS !== 'ios') {
        showNotification(response.notification);
        if (response.notification.title === 'Lucky Draw Winner') {
          setVisible(true);
        }
        return;
      }
      PushNotificationIOS.requestPermissions().then(() => {
        showNotification(response.notification)
        if (response.notification.title === 'Lucky Draw Winner') {
          setVisible(true);
        }
      });
    });

    return () => unsubscribe
  }, [dispatch]);

  const showNotification = notification => {
    PushNotification.localNotification({
      title: notification.title,
      message: notification.body,
      channelId: 1,
      playSound: true,
      soundName: 'notification',
      sound: 'notification.wav',
    });
  };
  return <>{visible && <RaffelWinner stateChanger={setVisible} />}</>;
};
export default PushController;
