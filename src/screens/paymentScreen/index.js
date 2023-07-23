import React, { useCallback, useEffect, useState } from "react";
import { Keyboard, SafeAreaView, Text, TextInput, View } from "react-native";
import BackIcon from "@assets/backIcon.svg";
import CustomStatusBar from "@components/CustomStatusBar";
import { COLORS } from "@utils/colors";
import Header from "@components/Header";
import { sizeToDp } from "@utils/index";
import { HEIGHT } from "@utils/constant";
import styles from "./styles";
import Button from "@components/Button";
import Row from "@components/Row";
import { useDispatch, useSelector } from "react-redux";
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { hideLoader, showLoader, showToast } from "@utils/loaderAndToastMethod";
import { Request } from "@services";
import Config from "@utils/apiConstant";
import { joinAuctionRequest } from "@screens/HomeScreen/action";
import { StackActions } from "@react-navigation/native";
import { userProfileRequest } from "@screens/ProfileScreen/action";

export default function AddFoundScreen({ navigation, route }) {
  const [price, setPrice] = useState();
  const [currentprice, setCurrentPrice] = useState("$0");
  const [totalPayAmount, setTotalPayAmount] = useState();
  const [errorText, setErrorText] = useState("");

  const dispatch = useDispatch();
  const stripe = useStripe();
  const [press, setPress] = useState(false);
  const [client_secret, setClient_secret] = useState("");
  const {
    auctionId,
    type,
    amount,
    auction_id,
    currency_name,
    Payment_currency,
    item,
  } = route.params;

  const publishable =
    "pk_test_2333dvdvdvfvvdfvdfvhjdfv1N16uBYnhL0cmb1lGSlFrCCiShWb";

  const onFocusHandler = () => {
    const focusHandler = navigation.addListener("focus", () => {
      setPress();
    });
    return focusHandler;
  };

  useEffect(() => {
    onFocusHandler();
    setCurrentPrice(balance);
  }, [navigation]);

  const onBackScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const { view_currency, balance, currency } = useSelector(
    (state) => state?.profileReducer?.profileData?.data
  );

  useEffect(() => {
    if (!item) {
      setPrice(amount);
    } else if (item?.min_tokens < amount) {
      setPrice(amount);
    } else {
      setPrice(item?.min_tokens.toString());
    }
  }, [dispatch, amount, item]);

  useEffect(() => {
    if (item?.amount) {
      const totalVal = item?.amount * price;
      setTotalPayAmount(totalVal.toFixed(2).toString());
    }
  });

  useEffect(() => {
    const minamount = item?.min_tokens
      ? JSON.parse(item.min_tokens)
      : undefined;
    const maxamount = item?.max_tokens
      ? JSON.parse(item.max_tokens)
      : undefined;
    const checkAmount = amount ? JSON.parse(amount) : undefined;
    if (price < minamount || price < checkAmount) {
      setErrorText("Price is too short.");
      setPress(true);
    } else if (price > maxamount) {
      setErrorText("Please choose higher package.");
      setPress(true);
    } else {
      setErrorText();
      setPress(false);
    }
  }, [price]);

  const onPriceChange = useCallback(
    (text) => {
      setPrice(text);
      setTotalPayAmount(totalVal.toString());
    },
    [price]
  );
  // type 1 for auction win and type o for wallet payment
  const onStripePayment = useCallback(async () => {
    Keyboard.dismiss();
    setPress(true);
    showLoader();
    try {
      const data = {
        amount: item ? totalPayAmount : price,
        payment_type: type ? 0 : 1,
        currency: item ? item.global_currency_name : currency_name,
        package_id: item ? item.id : null,
        auction_id: auction_id ? auction_id : null,
        amount_in_custom_currency: item ? price : null,
      };

      // Fetch the intent client secret from the backend
      const response = !client_secret
        ? await Request.post(Config.signup, data)
        : { client_secret: client_secret };

      if (!response) {
        onFocusHandler();
        showToast("payment response failed", "danger");
      }
      const clientSecret = response.client_secret;
      setClient_secret(clientSecret);

      const clientSecretValue = client_secret || clientSecret;

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecretValue,
        merchantDisplayName: "Milton",
        testEnv: true,
      });

      hideLoader();
      if (initSheet.error) {
        setPress(false);
        return showToast(initSheet.error.message, "danger");
      }
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecretValue,
      });

      if (presentSheet.error) {
        setPress(false);
        navigation.goBack();
        return showToast(presentSheet.error.message, "danger");
      }
      showToast("Payment completed, Thank you.", "success");
      dispatch(userProfileRequest());

      navigation.dispatch(StackActions.pop(0));
      const date_time = new Date().toUTCString();
      const val = {
        auction_id: auctionId,
        date_time,
      };
      auctionId ? dispatch(joinAuctionRequest({ data: val })) : onBackScreen();
      setClient_secret("");
      setPress(false);
    } catch (err) {
      setPress(false);
      hideLoader();
    }
  }, [
    onBackScreen,
    client_secret,
    price,
    stripe,
    type,
    auction_id,
    auctionId,
    dispatch,
  ]);

  return (
    <SafeAreaView>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />

      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title={type ? "Add Funds" : "Claim your win"}
        onBackIconPress={onBackScreen}
      />

      <View style={styles.main}>
        <Text style={styles.headingText}>
          {type ? item?.name : "To claim your win, Please pay."}
        </Text>
        {type === "wallets" ? (
          <Row>
            <Text style={styles.input}>
              {Payment_currency ? Payment_currency : item.view_currency} {""}
            </Text>
            <TextInput
              value={price}
              onChangeText={onPriceChange}
              style={styles.input}
              autoFocus
              keyboardType="number-pad"
              maxLength={10}
            />
          </Row>
        ) : (
          <Row>
            <Text style={styles.input}>{Payment_currency}</Text>
            <Text style={styles.input}> {price}</Text>
          </Row>
        )}
        {item && (
          <Text style={styles.instruction}>
            Min {item.view_currency} {item.min_tokens} - Max{" "}
            {item.view_currency} {item.max_tokens}
          </Text>
        )}
        {totalPayAmount && (
          <Text style={styles.hiighlitedText}>
            {`You only pay : ${item.global_currency} ${totalPayAmount}`}
          </Text>
        )}
        {type && (
          <Text style={styles.hiighlitedText}>
            {`Current Balance: ${view_currency} ${currentprice}`}
          </Text>
        )}
      </View>
      <Text style={styles.warningMessage}>{errorText}</Text>
      <StripeProvider publishableKey={publishable}>
        <Button
          size={"large"}
          text={"Proceed"}
          disabled={press}
          onPress={onStripePayment}
          style={press ? styles.disabledconfirmButton : styles.confirmButton}
        />
      </StripeProvider>
    </SafeAreaView>
  );
}
