import {View, FlatList, Image, Pressable, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import NotificationIcon from '@assets/notifications.svg';
import Row from '@components/Row';
import {COLORS} from '@utils/colors';
import CustomStatusBar from '@components/CustomStatusBar';
import {HEIGHT} from '@utils/constant';
import BlankPage from '@components/BlankPage';
import {userNotificationRequest, userNotificationRequestRead} from './action';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {DateTimeFormatedData} from '@utils/timeFormat';
import {joinAuctionRequest} from '@screens/HomeScreen/action';
import CustomAlert from '@components/AlertBox';
import Button from '@components/Button';
import FastImage from 'react-native-fast-image';
import RaffelWinner from '@components/RaffelWinner';
import {Loader} from '@components/LoadingView';

const NotificationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [isConfirmJoinAuction, setIsConfirmJoinAuction] = useState(false);
  const [joinedItem, setJoinedItem] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(userNotificationRequest());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const notificationVal = useSelector(
    state => state?.notificationReducer?.NotificationData,
  );

  const onBackHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onConfirmJoinHandler = useCallback(
    item => {
      setJoinedItem(item);
      setIsConfirmJoinAuction(!isConfirmJoinAuction);
    },
    [isConfirmJoinAuction],
  );

  const onJoinAuctionHandler = useCallback(
    ({item}) => {
      const data = {
        auction_id: item.auction_id,
        date_time: DateTimeFormatedData(new Date()),
      };
      setIsConfirmJoinAuction(!isConfirmJoinAuction);
      dispatch(joinAuctionRequest({data}));
    },
    [isConfirmJoinAuction, joinedItem],
  );
  // Notification Status
  const onPressViewHandler = useCallback(item => {
    const data = {
      id: item.id,
      date_time: DateTimeFormatedData(new Date()),
      view_status: '2',
    };
    dispatch(userNotificationRequestRead({data, item}));
  }, []);

  const emptyComponent = useCallback(() => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <BlankPage
          icon={<NotificationIcon />}
          heading={'No activity yet!'}
          title={'You have no notifications.'}
        />
      );
    }
  }, [loading]);

  const renderItem = useCallback(
    ({item, index}) => {
      const AuctionDate = item.auction_time;
      const timeAgo = moment(item.updated_at).fromNow();
      return (
        <>
          <Pressable onPress={() => onPressViewHandler(item)}>
            <Row
              style={
                item.view_status === 'read'
                  ? styles.notificationView
                  : styles.readNotificationView
              }>
              <View style={styles.iconView}>
                <FastImage
                  source={{
                    uri: item.image,
                    priority: FastImage.priority.fast,
                  }}
                  style={styles.eventIcon}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.main}>
                <Row>
                  <Text style={styles.auctionDate}>Auction : </Text>
                  <Text style={styles.auctionDate}>{` ${AuctionDate}`}</Text>
                </Row>
                <Text style={styles.discriptionText}>{item.description}</Text>
                {item.price && (
                  <Text style={styles.discriptionText}>
                    {item.currency} {item.price}
                  </Text>
                )}
                {item.notification_type === '5' && item.is_joined === 0 && (
                  <Pressable
                    style={styles.acceptAuctionByttonView}
                    onPress={() => onConfirmJoinHandler(item)}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Accept</Text>
                    </View>
                  </Pressable>
                )}
              </View>
              <View style={styles.timeView}>
                <Text style={styles.timeDetail}>{timeAgo}</Text>
              </View>
            </Row>
          </Pressable>
          {visible && <RaffelWinner stateChanger={setVisible} />}
          <CustomAlert isVisibleModal={isConfirmJoinAuction}>
            <View style={styles.alertBox}>
              <Text style={styles.alertBoxText}>
                Are you sure you want to join Auction
                <Text style={styles.joinedAuctionName}>
                  {' '}
                  {joinedItem?.name}
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
                  onPress={() => onJoinAuctionHandler({item: joinedItem})}
                  style={styles.activeButton}
                />
              </Row>
            </View>
          </CustomAlert>
        </>
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [isConfirmJoinAuction],
  );

  const renderKeyExtractor = useCallback((item, index) => {
    index.toString();
  }, []);

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title="Notifications"
        onBackIconPress={onBackHandler}
      />
      <FlatList
        data={notificationVal}
        renderItem={renderItem}
        keyExtractor={renderKeyExtractor}
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
};
export default NotificationScreen;
