import AxiosInstance from "./interCepter";
import config from "@utils/apiUrl";
import NetInfo from "@react-native-community/netinfo";
import { showInternetError } from "@utils/index";
import { CommonActions } from "@react-navigation/native";
import * as RootNavigation from "@utils/navigateTo";
import { NAVIGATION_SCREENS } from "@utils/navigationScreen";
import { showToast } from "@utils/loaderAndToastMethod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistor } from "@redux/configureStore";

//Post Request
export async function post(api, data) {
  return AxiosInstance.post(`${config.API_URL}${api}`, data)
    .then((res) => {
      NetInfo.fetch().then(({ isConnected }) => {
        if (!isConnected) {
          showInternetError();
        }
      });
      if (res.status === "success" || (res.code === 200 && !res.data.status)) {
        return {
          ...res.data,
        };
      }
      if (res.status === 401) {
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [{ name: NAVIGATION_SCREENS.LOGIN }],
        });
        AsyncStorage.clear();
        persistor.purge();
        showToast("Your Account is Logged into another device.", "danger");
        RootNavigation.navigationRef.dispatch(resetAction);
      }

      return res.data;
    })
    .catch((err) => (err && err.response ? err.response : err));
}

//Get Request
export async function get(api, data) {
  return AxiosInstance.get(`${config.API_URL}${api}`, data)
    .then((res) => {
      NetInfo.fetch().then(({ isConnected }) => {
        if (!isConnected) {
          showInternetError();
        }
      });
      if (res.status === "success" || res.code === 200) {
        return {
          ...res.data,
          // status:'success'
        };
      }
      if (res.status === 401) {
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [{ name: NAVIGATION_SCREENS.LOGIN }],
        });
        AsyncStorage.clear();
        persistor.purge();
        showToast("Your Account is Logged into another device.", "danger");
        RootNavigation.navigationRef.dispatch(resetAction);
      }

      return res.data;
    })
    .catch((err) => console.log(err));
}
