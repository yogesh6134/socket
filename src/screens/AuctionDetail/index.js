import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import styles from './styles';
import Button from '@components/Button';
import Carousel from '@components/Carousel';
import Row from '@components/Row';
import {COLORS} from '@utils/colors';
import {HEIGHT} from '@utils/constant';
import {DateTimeFormatedData, SetDateFormate} from '@utils/timeFormat';
import {useDispatch, useSelector} from 'react-redux';
import {joinAuctionRequest} from '@screens/HomeScreen/action';
import {singleAuctionFailed, singleAuctionRequest} from './action';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import CustomAlert from '@components/AlertBox';
import {useIsFocused} from '@react-navigation/native';

export default function AuctionDetail({navigation, route}) {
  const {itemId, type, joined} = route.params;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [isConfirmJoinAuction, setIsConfirmJoinAuction] = useState(false);

  useEffect(() => {
    dispatch(singleAuctionRequest(itemId));
    return () => dispatch(singleAuctionFailed());
  }, [dispatch, itemId, isFocused]);

  const title = useSelector(
    state => state?.singleAuctionDetailReducer?.singleAuctionData[0],
  );

  const onBackIconHandler = useCallback(() => {
    if (type) {
      navigation.goBack();
    } else {
      navigation.navigate(NAVIGATION_SCREENS.TABNAVIGATOR);
    }
  }, [navigation, type]);

  const onAuctionJoinReq = useCallback(() => {
    setIsConfirmJoinAuction(false);
    const data = {
      auction_id: title?.id,
      date_time: DateTimeFormatedData(new Date()),
    };
    dispatch(joinAuctionRequest({data}));
  }, [dispatch, title]);

  const onConfirmJoinHandler = useCallback(() => {
    setIsConfirmJoinAuction(!isConfirmJoinAuction);
  }, [isConfirmJoinAuction]);

  const onCompletePaymentHandler = useCallback(() => {
    navigation.navigate(NAVIGATION_SCREENS.ADD_FUND, {
      amount: title.winning_price,
      auction_id: title.id,
      currency_name: title.currency_name,
      Payment_currency: title.view_currency,
    });
  }, [title, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title={title?.name}
        onBackIconPress={onBackIconHandler}
      />
      <ScrollView style={styles.topDetail}>
        <View style={styles.main}>
          {title ? (
            <Carousel
              images={title?.AuctionImages[0]?.image}
              url={title?.AuctionImages[0]?.image_url}
            />
          ) : (
            <View style={styles.blankImageView}>
              <Text style={styles.title}>Loading...</Text>
            </View>
          )}
          <View style={styles.topView}>
            <Text style={styles.auctionName}>{title?.asset_name}</Text>
            <Text style={styles.auctionTotalPrice}>
              {title?.view_currency} {title?.asset_price}
            </Text>
            <Row spaces style={styles.auctionDetail}>
              <Text style={styles.auctionTitle}>Start Date/Time :</Text>
              <Text style={styles.auctionDetailText}>
                {title && SetDateFormate(title?.global_start_time)}
              </Text>
            </Row>
            <Row spaces style={styles.auctionDetail}>
              <Text style={styles.auctionTitle}>End Date/Time :</Text>
              <Text style={styles.auctionDetailText}>
                {title && SetDateFormate(title?.global_end_time)}
              </Text>
            </Row>

            {title?.show_participants === '1' && (
              <Row spaces style={styles.auctionDetail}>
                <Text style={styles.auctionTitle}>No. of Participants :</Text>
                <Text style={styles.auctionDetailText}>
                  {title?.no_of_participants}
                </Text>
              </Row>
            )}
            <Row spaces style={styles.auctionDetail}>
              <Text style={styles.auctionTitle}>Participation Fee:</Text>
              <Text style={styles.auctionDetailText}>
                {title?.view_currency} {title?.participation_fees}
              </Text>
            </Row>
            {title?.fee_charged > 0 && (
              <Row spaces style={styles.auctionDetail}>
                <Text style={styles.auctionTitle}>Fee Charged :</Text>
                <Text style={styles.auctionFeeChargedText}>
                  {title?.view_currency} {title?.fee_charged}
                </Text>
              </Row>
            )}
            {title?.duration && (
              <Row spaces style={styles.auctionDetail}>
                <Text style={styles.auctionTitle}>Auction Duration :</Text>
                <Text style={styles.auctionDetailText}>{title?.duration}</Text>
              </Row>
            )}
            {title?.participation_time && (
              <Row spaces style={styles.auctionDetail}>
                <Text style={styles.auctionTitle}>
                  Participation Duration :
                </Text>
                <Text style={styles.auctionDetailText}>
                  {title?.participation_time}
                </Text>
              </Row>
            )}
            {title?.winning_price > 0 && (
              <Row spaces style={styles.auctionDetail}>
                <Text style={styles.auctionTitle}>Winning Price :</Text>
                <Text style={styles.auctionWinnerText}>
                  {title?.view_currency} {title?.winning_price}
                </Text>
              </Row>
            )}
            <Row spaces style={styles.auctionLastDetail}>
              <Text style={styles.auctionTitle}>No. of Items :</Text>
              <Text style={styles.auctionDetailText}>{title?.items}</Text>
            </Row>
          </View>
        </View>
        <View style={styles.informationView}>
          <Text style={styles.auctionDetailHeading}>Information</Text>
          <Text style={styles.infoText}>{title?.text}</Text>
        </View>
      </ScrollView>
      {!joined && (
        <View style={styles.bottomButton}>
          <Button
            size={'large'}
            text={'JOIN NOW'}
            onPress={onConfirmJoinHandler}
            style={styles.button}
          />
        </View>
      )}
      {title?.payment_status === '0' && (
        <View style={styles.bottomButton}>
          <Button
            size={'large'}
            text={`Checkout (${title.view_currency} ${title.winning_price})`}
            onPress={onCompletePaymentHandler}
            style={styles.button}
          />
        </View>
      )}
      <CustomAlert isVisibleModal={isConfirmJoinAuction}>
        <View style={styles.alertBox}>
          <Text style={styles.alertBoxText}>
            Are you sure you want to join Auction
            <Text style={styles.joinedAuctionName}> {title?.name}</Text>
          </Text>
          <Row spaces>
            <Button
              size={'small'}
              text={'No'}
              onPress={onConfirmJoinHandler}
              buttonTextStyle={styles.cancelButtonTextStyle}
              style={styles.cancelbutton}
            />
            <Button
              size={'small'}
              text={'Yes'}
              onPress={onAuctionJoinReq}
              style={styles.activeButton}
            />
          </Row>
        </View>
      </CustomAlert>
    </SafeAreaView>
  );
}
