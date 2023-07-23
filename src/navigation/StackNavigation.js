import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/LoginScreen";
import SignUpScreen from "@screens/OnboardingScreen/SignupScreen";
import ForgotPassword from "@screens/OnboardingScreen/ForgotPassword";
import OtpScreen from "@screens/OnboardingScreen/OtpScreen";
import CreatePassword from "@screens/OnboardingScreen/CreatePassword";
import { NAVIGATION_SCREENS } from "@utils/navigationScreen";
import NotificationScreen from "@screens/NotificationScreen";
import TabNavigation from "./TabNavigation";
import AuctionDetail from "@screens/AuctionDetail";
import AddFoundScreen from "@screens/paymentScreen";
import RegisterProfile from "@screens/ProfileScreen";
import SettingScreen from "@screens/SettingScreen";
import HelpAndSupport from "@screens/HelpAndSupport";
import ReferalAndEarn from "@screens/ReferalAndEarn";
import TransactionsHistorye from "@screens/TransactionsHistory";
import CustomDrawer from "@screens/CustomDrawer";
import WebViewScreen from "@screens/WebView";
import messaging from "@react-native-firebase/messaging";
import { navigationRef } from "@utils/navigateTo";
import { store } from "@redux/configureStore";
import packages from "@screens/Packages";
import RaffelWinner from "@components/RaffelWinner";
import WinnerScreen from "@screens/WinnerScreen";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const getStore = store.getState();
  const { loginReducer, signupReducer, otpReducer } = getStore;
  const [initialRoute, setInitialRoute] = useState();
  const [itemId, setItemId] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (function () {
      switch (true) {
        case loginReducer.userData.status === "1":
          return setInitialRoute(NAVIGATION_SCREENS.TABNAVIGATOR);
        case otpReducer.userData.status === "1":
          return setInitialRoute(NAVIGATION_SCREENS.TABNAVIGATOR);
        case itemId:
          return setInitialRoute(NAVIGATION_SCREENS.AUCTION_DETAIL);
        default:
          return setInitialRoute(NAVIGATION_SCREENS.LOGIN);
      }
    })();

    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage.notification.title === "Lucky Draw Winner") {
        setVisible(true);
      }
      if (
        loginReducer.userData.status === "1" ||
        otpReducer.userData.status === "1"
      ) {
        setInitialRoute(NAVIGATION_SCREENS.TABNAVIGATOR);
      } else {
        setInitialRoute(NAVIGATION_SCREENS.LOGIN);
      }
    });

    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          if (remoteMessage.data.auction_id) {
            setInitialRoute(NAVIGATION_SCREENS.AUCTION_DETAIL);
            setItemId(remoteMessage.data.slug);
          }
          if (remoteMessage.notification.title === "Lucky Draw Winner") {
            setVisible(true);
          }
        }
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    loginReducer.userData.status,
    otpReducer.userData.status,
    signupReducer.status,
  ]);

  if (loading) {
    return null;
  }

  if (visible) {
    return <RaffelWinner stateChanger={setVisible} />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={NAVIGATION_SCREENS.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={NAVIGATION_SCREENS.SIGNUP}
          component={SignUpScreen}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.OTP_SCREEN}
          component={OtpScreen}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.CREATE_PASSWORD}
          component={CreatePassword}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.TABNAVIGATOR}
          component={TabNavigation}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.AUCTION_DETAIL}
          component={AuctionDetail}
          initialParams={{ itemId: itemId }}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.DRAWERSCREEN}
          component={CustomDrawer}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.TRANSACTIONHOSTORY}
          component={TransactionsHistorye}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.SETTING}
          component={SettingScreen}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.NOTIFICATION}
          component={NotificationScreen}
        />

        <Stack.Screen
          name={NAVIGATION_SCREENS.PROFILE}
          component={RegisterProfile}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.REFERALANDEARN}
          component={ReferalAndEarn}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.HELPANDSUPPORT}
          component={HelpAndSupport}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.ADD_FUND}
          component={AddFoundScreen}
        />

        <Stack.Screen
          name={NAVIGATION_SCREENS.WEB_VIEW}
          component={WebViewScreen}
        />
        <Stack.Screen name={NAVIGATION_SCREENS.PACKAGES} component={packages} />

        <Stack.Screen
          name={NAVIGATION_SCREENS.WINNERSCREEN}
          component={WinnerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
