import {Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {COLORS} from '@utils/colors';
import Header from '@components/Header';
import styles from './styles';
import BlankPage from '@components/BlankPage';
import LiveAuctionIcon from '@assets/liveAuctionIcon.svg';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/index';
import {HEIGHT, WIDTH} from '@utils/constant';
import {useNavigation} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import CustomStatusBar from '@components/CustomStatusBar';
import { NAVIGATION_SCREENS } from '@utils/navigationScreen';

export const BlankScreen = ({data}) => {
  const navigation = useNavigation();
  const backButton = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const payPendingAmountHandler = useCallback(() => {
    navigation.navigate(NAVIGATION_SCREENS.ADD_FUND, {
      amount: data[0].winning_price,
      auction_id: data[0].auction_id,
      currency_name: data[0].currency_name,
      Payment_currency: data[0].custom_currency_symbol
    });
  }, [data, navigation]);

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.IconColor}
        barStyle="light-content"
      />
      <Header
        style={styles.headerStyle}
        headerColor={styles.headerText}
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.white} />}
        onBackIconPress={backButton}
        title={"Live Auction"}
      />
      <BlankPage
        icon={<LiveAuctionIcon />}
        heading={data?.length > 0 ? 'PAYMENT PENDING!' : 'No activity yet!'}
        title={
          data?.length > 0  ? (
            <>
              Payment of{' '}
              <Text style={styles.pendingAuctionPrice}>
                {' '}
                £ {data[0]?.winning_price}
              </Text>{' '}
              pending for the Auction{' '}
              <Text style={styles.pendingAuctionName}>{data[0]?.name}</Text>{' '}
              {'\n'} {'\n'}
              Payment of the outstanding balance is required to join the upcoming auction. Kindly proceed to checkout and settle the dues.
            </>
          ) : (
            "Right now, you don't have any live Auction, please join first and then participate in the live Auction."
          )
        }
        buttonText={data?.length > 0 ? 'Checkout' : null}
        onButtonPressHandler={payPendingAmountHandler}
      />
    </View>
  );
};

export const YoutubeVideo = ({id}) => {
  const navigation = useNavigation();

  const backButton = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={styles.lightContainer}>
      <CustomStatusBar
        backgroundColor={COLORS.IconColor}
        barStyle="light-content"
      />
      <Header
        style={styles.headerStyle}
        headerColor={styles.headerText}
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.white} />}
        onBackIconPress={backButton}
      />
      <Text style={styles.videoHeading}>Get Ready!</Text>
      <Text style={styles.auctionTitle}>
        Auction is about to start in a minute or two. Please stay and enjoy the
        video in the meantime.
      </Text>

      <View style={styles.countdownModal}>
        <YoutubePlayer
          height={350}
          play={true}
          width={WIDTH.w320}
          videoId={id}
        />
      </View>
    </View>
  );
};
