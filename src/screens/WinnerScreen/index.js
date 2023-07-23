import React from "react";
import { View, Text } from "react-native";
import OrderPlaced from "@assets/orderPlaced.svg";
import styles from "./styles";
import Header from "@components/Header";
import BackIcon from "@assets/backIcon.svg";
import { sizeToDp } from "@utils/index";
import { HEIGHT } from "@utils/constant";
import { COLORS } from "@utils/colors";
import { useCallback } from "react";
import FreeIcon from "@assets/free.svg";

const WinnerScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const onBackHandler = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title={item?.title}
        onBackIconPress={onBackHandler}
      />
      <View style={styles.mainView}>
        <View style={styles.imgStyle}>
          <OrderPlaced />
        </View>
        <Text style={styles.congTextStyle}> Congratulations </Text>
        <Text style={styles.titleStyle}>
          {
            "You're the lucky winner of our thrilling Raffle! As a reward, your next auction entry is  "
          }{" "}
        </Text>
        <FreeIcon />

        <Text style={styles.detailStyle}>
          <Text style={styles.boldText}>Detail : </Text>
          <Text>
            You have participated in Auction ({" "}
            <Text style={styles.activeText}>{item.name}</Text>) on{" "}
            <Text style={styles.activeText}>{item.auction_time}. </Text>
            Although you didn't win the auction, we're delighted to inform you
            that you have been selected as a lucky winner of our Raffle. Enjoy
            your complimentary entry for the next auction!
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default WinnerScreen;
