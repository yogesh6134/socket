import Row from '@components/Row';
import TimeFormat from '@components/TimeFormat';
import {SetDateFormate} from '@utils/timeFormat';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import React, {useCallback, useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import Button from '@components/Button';
import UseInterval from '@utils/customHooks';
import {useNavigation} from '@react-navigation/native';
import CustomAlert from '@components/AlertBox';
import {joinAuctionRequest} from '@screens/HomeScreen/action';
import {useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';

const AuctionsRenderItem = ({item, length}) => {
  const navigation = useNavigation();
  const {slug, id, AuctionImages, name, asset_name, global_start_time, view_currency, asset_price } = item?.item

  const countDownDate = new Date(global_start_time).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  const [isConfirmJoinAuction, setIsConfirmJoinAuction] = useState(false);

  const dispatch = useDispatch();

  UseInterval(() => {
    setCountDown(countDownDate - new Date().getTime());
  }, 1000);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  const onAuctionDetailHandler = useCallback(() => {
    navigation.navigate(NAVIGATION_SCREENS.AUCTION_DETAIL, {
      itemId: slug,
      joined: false,
      type: true
    });
  }, [item, navigation]);

  const onConfirmJoinHandler = useCallback(() => {
    setIsConfirmJoinAuction(!isConfirmJoinAuction);
  }, [isConfirmJoinAuction]);

  const onAuctionJoinReq = useCallback(() => {
    setIsConfirmJoinAuction(false);
    const date_time = new Date().toUTCString();
    const data = {
      auction_id: id,
      date_time: date_time,
    };
    dispatch(joinAuctionRequest({data}));
  }, [isConfirmJoinAuction, item]);

  return (
    <Pressable onPress={onAuctionDetailHandler} key={id}>
      <Row
        style={
          length - 1 !== item.index
            ? styles.auctionDetail
            : styles.auctionDetailLastIndex
        }>
        <Row style={styles.inSideBoxStyle}>
          <View style={styles.auctionLogoDesign}>
            {AuctionImages.length > 0 && (
              <FastImage
                source={{
                  uri:
                    AuctionImages[0].image_url + AuctionImages[0]?.image[0],
                    priority: FastImage.priority.fast,
                }}
                style={styles.AuctionLogo}
                resizeMode={FastImage.resizeMode.cover}
              />
            )}
          </View>
          <View style={styles.auctionTitle}>
            <Text style={styles.auctionName} numberOfLines={2}>
              {name}
            </Text>
            <Text style={styles.productName}>{asset_name}</Text>
            <Row spaces>
              {days === 0 ? (
                <View style={styles.timeView}>
                  {(hours != 0 || minutes > 15) ?
                    <TimeFormat hours={hours} min={minutes} sec={seconds} />
                    :
                    <Text style={styles.timeOutText}>Time over</Text>
                  }
                </View>
              ) : (
                <View style={styles.dateView}>
                  {days >= 0 ? (
                    <Text style={styles.auctionStartTime}>
                      {SetDateFormate(global_start_time)}
                    </Text>
                  ) : (
                    <Text style={styles.timeOutText}>Time over</Text>
                  )}
                </View>
              )}

              <View style={styles.auctionPrice}>
                <Text style={styles.priceText} numberOfLines={1}>
                  {view_currency} {asset_price}
                </Text>
              </View>
            </Row>

            {(days > 0 || hours > 0 || minutes > 14) && (
              <Button
                size={'medium'}
                text={'Join Auction'}
                style={styles.button}
                onPress={onConfirmJoinHandler}
              />
            )}
          </View>
        </Row>
      </Row>
      <CustomAlert isVisibleModal={isConfirmJoinAuction}>
        <View style={styles.alertBox}>
          <Text style={styles.alertBoxText}>
            Are you sure you want to join Auction
            <Text style={styles.joinedAuctionName}>
              {' '}
              {name}
            </Text>
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
    </Pressable>
  );
};
export default AuctionsRenderItem;
