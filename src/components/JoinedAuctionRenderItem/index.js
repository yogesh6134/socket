import Row from '@components/Row';
import TimeFormat from '@components/TimeFormat';
import {SetDateFormate} from '@utils/timeFormat';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import React, {useCallback, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import UseInterval from '@utils/customHooks';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export const JoinedAuctionRenderItem = ({item, length}) => {
  const navigation = useNavigation();
  const countDownDate = new Date(item.item.global_start_time).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );
  UseInterval(() => {
    setCountDown(countDownDate - new Date().getTime());
  }, 1000);
  const {
    participation_time,
    fee_charged,
    global_start_time,
    slug,
    AuctionImages,
    asset_name,
    name,
    view_currency,
    asset_price,
    payment_status,
  } = item.item;

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const AuctionDate = SetDateFormate(global_start_time);

  const onJoinedAuctionHandler = useCallback(() => {
    navigation.navigate(NAVIGATION_SCREENS.AUCTION_DETAIL, {
      itemId: slug,
      joined: true,
      payment_status,
    });
  }, [item, navigation]);

  return (
    <Pressable onPress={onJoinedAuctionHandler}>
      <Row
        space
        style={
          length - 1 !== item.index || length === 1
            ? styles.auctionDetailView
            : styles.auctionLastDetailView
        }>
        <Row style={styles.detailBoxView}>
          <View style={styles.logo}>
            <FastImage
              style={styles.auctionIcon}
              source={{
                uri: AuctionImages[0]?.image_url + AuctionImages[0]?.image[0],
                priority: FastImage.priority.fast,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={styles.mainItemView}>
            <Text style={styles.dateText}>{AuctionDate}</Text>
            <View style={styles.auctionDateAndPrice}>
              <Text numberOfLines={2} style={styles.auctionName}>
                {name}
              </Text>
              <View>
                {payment_status === '0' && (
                  <Text style={styles.pendingAmount}>{'Pending'}</Text>
                )}
                {days === 0 && (
                  <View style={styles.timeView}>
                    <TimeFormat hours={hours} min={minutes} sec={seconds} />
                  </View>
                )}
              </View>
            </View>
            <Row spaces>
              <Text style={styles.assetsName}>{asset_name} </Text>
              <Text numberOfLines={1} style={styles.priceView}>
                {view_currency} {asset_price}
              </Text>
            </Row>
            {participation_time && (
              <Row>
                <View style={styles.auctionTimeHistory}>
                  <Text style={styles.auctionHistoryText}>
                    Participation Time:
                    <Text style={styles.auctionHistoryValue}>
                      {participation_time}
                    </Text>
                  </Text>
                </View>
                {fee_charged && (
                  <View style={styles.auctionHistory}>
                    <Text style={styles.auctionHistoryText}>
                      Fee Charged:
                      <Text style={styles.auctionHistoryValue}>
                        {view_currency} {fee_charged}
                      </Text>
                    </Text>
                  </View>
                )}
              </Row>
            )}
          </View>
        </Row>
      </Row>
    </Pressable>
  );
};

export const ProcessingAuction = ({item}) => {
  const navigation = useNavigation();
  const countDownDate = new Date(item.global_start_time).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );
  UseInterval(() => {
    setCountDown(countDownDate - new Date().getTime());
  }, 1000);

  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  const onProcessingHandler = useCallback(() => {
    navigation.navigate('Live Auction');
  }, [navigation]);

  return (
    <Pressable onPress={onProcessingHandler}>
      <Row space style={styles.processingAuctionDetailView}>
        <Row style={styles.detailBoxView}>
          <Image
            source={{
              uri:
                item?.AuctionImages[0]?.image_url +
                item?.AuctionImages[0]?.image[0],
            }}
            style={styles.auctionIcon}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.liveSoonText}>Live Soon</Text>
            <Text numberOfLines={2} style={styles.auctionName}>
              {item?.name}
            </Text>
            <Text style={styles.assetsName}>{item?.asset_name} </Text>
          </View>
        </Row>
        <View style={styles.priceBoxView}>
          <Text numberOfLines={1} style={styles.priceView}>
            {item?.view_currency} {item.asset_price}
          </Text>

          <View style={styles.timeView}>
            <TimeFormat hours={hours} min={minutes} sec={seconds} />
          </View>
        </View>
      </Row>
    </Pressable>
  );
};
