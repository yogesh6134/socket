import { View } from "react-native";
import React, { useCallback, useState } from "react";
import WebView from "react-native-webview";
import Header from "@components/Header";
import BackIcon from "@assets/backIcon.svg";
import { sizeToDp } from "@utils/";
import { HEIGHT } from "@utils/constant";
import { COLORS } from "@utils/colors";
import { Loader } from "@components/LoadingView";
import CustomStatusBar from "@components/CustomStatusBar";

const WebViewScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const type = route.params.type;
  const onBackPressHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const hideSpinner = useCallback(() => {
    setLoading(false);
  }, [loading]);

  return (
    <View style={{ flex: 1 }}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title={type}
        onBackIconPress={onBackPressHandler}
      />
      {type === "Privacy Policy" ? (
        <WebView source={{ uri: "https://google.com" }} onLoad={hideSpinner} />
      ) : (
        <WebView onLoad={hideSpinner} source={{ uri: "https://google.com" }} />
      )}
      {loading && <Loader />}
    </View>
  );
};

export default WebViewScreen;
