import {
  View,
  FlatList,
  RefreshControl,
  BackHandler,
  Alert,
  Keyboard,
  Text,
  Pressable,
} from 'react-native';
import React, {useRef, useMemo, useEffect, useState, useCallback} from 'react';
import Bottomsheet from '@components/BottomSheet';
import styles from './styles';
import Header from '@components/Header';
import FilterIcon from '@assets/options.svg';
import MenuIcon from '@assets/MenuIcon.svg';
import Winners from '@assets/winners.svg';
import Warning from '@assets/warning.svg';
import Close from '@assets/close.svg';
import AppLogo from '@assets/appLogo.svg';
import DropDown from '@assets/mediunNextIcon.svg';
import SearchIcon from '@assets/SearchIcon.svg';
import {HEIGHT} from '@utils/constant';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import FilterData from '@components/FilterData';
import {sizeToDp} from '@utils/';
import CustomStatusBar from '@components/CustomStatusBar';
import {COLORS} from '@utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesRequest, FilterAction} from '@redux/action/CommonAction';
import {allAuctionRequest, joinAuctionSuccess} from './action';
import {useFocusEffect} from '@react-navigation/native';
import AuctionsRenderItem from '@components/AuctionsRenderItem';
import {Loader} from '@components/LoadingView';
import {userProfileRequest} from '@screens/ProfileScreen/action';
import {processingLiveRequest} from '@screens/LiveAuction/action';
import {ProcessingAuction} from '@components/JoinedAuctionRenderItem';
import {wonAuctionRequest} from '@screens/AuctionScreen/action';
import Row from '@components/Row';
import {SetDateFormate} from '@utils/timeFormat';
import CustomAlert from '@components/AlertBox';
import Button from '@components/Button';
import {store} from '@redux/configureStore';
import FastImage from 'react-native-fast-image';

const HomeScreen = ({navigation}) => {
  const [showWarning, setShowWarning] = useState(false);
  const [showWinningData, setShowWinningData] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['60%']);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [checkloadingData, setCheckloadingData] = useState(true);
  const getStore = store.getState();

  const dispatch = useDispatch();
  useEffect(() => {
    const loadData = async () => {
      if (
        getStore?.loginReducer?.userData?.data?.token ||
        getStore.otpReducer.userData?.data?.token
      ) {
        setLoading(false);
      }
    };
    loadData();
  }, [loading]);

  useEffect(() => {
    dispatch(categoriesRequest());
    checkWarning();
    const timer = setTimeout(() => {
      setCheckloadingData(false);
      dispatch(userProfileRequest());
      dispatch(processingLiveRequest());
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const processingLive = useSelector(
    state => state?.liveAuctionReducer?.LiveAuction[0],
  );
  const wonReq = useSelector(state => state?.auctionReducers?.wonAuctions);
  const data = useSelector(state => state?.profileReducer?.profileData?.data);
  const due_payment = data?.due_payment;

  const checkWarning = useCallback(() => {
    const timer = setTimeout(() => {
      if (due_payment) {
        setShowWarning(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [checkWarning]);

  useFocusEffect(
    useCallback(() => {
      dispatch(joinAuctionSuccess(false));
      const timer = setTimeout(() => {
        dispatch(allAuctionRequest());
        dispatch(processingLiveRequest());
        dispatch(wonAuctionRequest());
      }, 2000);
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => {
        backHandler.remove(), clearTimeout(timer);
      };
    }, [dispatch]),
  );

  const auctionData = useSelector(state =>
    state?.homeReducer?.allData?.data
      ? state?.homeReducer?.allData?.data
      : state?.homeReducer?.allData,
  );

  useEffect(() => {
    if (!loading) {
      const focusHandler = navigation.addListener('focus', () => {
        onRefresh();
      });
      return focusHandler;
    }
  }, [onRefresh, loading]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(allAuctionRequest());
    // dispatch(userProfileRequest());
    dispatch(processingLiveRequest());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [dispatch]);

  const onOpenDrawerScreen = useCallback(() => {
    navigation.navigate(NAVIGATION_SCREENS.DRAWERSCREEN);
  }, [navigation]);

  const onExpand = useCallback(() => {
    Keyboard.dismiss();
    dispatch(FilterAction(true));
    bottomSheetRef?.current?.expand();
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(FilterAction(false));
    bottomSheetRef.current?.close();
  }, [dispatch]);

  const handleSheetChanges = useCallback(() => {
    return auctionData;
  }, [auctionData]);

  const onSearch = useCallback(
    text => {
      onClose();
      setSearch(text);
    },
    [onClose],
  );

  const onCloseWarningHandler = useCallback(() => {
    setShowWarning(false);
  }, [showWarning]);

  const onCheckoutHandler = useCallback(() => {
    setShowWarning(false);
    navigation.navigate(NAVIGATION_SCREENS.ADD_FUND, {
      amount: due_payment[0].winning_price,
      auction_id: due_payment[0].auction_id,
      currency_name: due_payment[0].currency_name,
      Payment_currency: due_payment[0].custom_currency_symbol,
    });
  }, []);

  const onJoinedAuctionHandler = useCallback(item => {
    navigation.navigate(NAVIGATION_SCREENS.AUCTION_DETAIL, {
      itemId: item.slug,
      joined: true,
      payment_status: item.payment_status,
      type: true,
    });
  }, []);

  const allAluctonData = useMemo(() => {
    if (!search) {
      return auctionData;
    }

    return auctionData.filter(item => {
      return (
        item.asset_name.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.asset_price.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search, auctionData]);

  const renderEmptyData = useCallback(() => {
    if (checkloadingData) {
      return <Loader />;
    } else {
      return <Text style={styles.priceView}>No data available.</Text>;
    }
  }, [checkloadingData]);

  const renderItem = useCallback(
    item => {
      return <AuctionsRenderItem item={item} length={allAluctonData.length} />;
    },
    [allAluctonData],
  );

  const renderKeyExtractor = useCallback(
    (item, index) => {
      item.id.toString();
    },
    [allAluctonData],
  );

  const dropDownHandler = useCallback(() => {
    setShowWinningData(!showWinningData);
  }, [showWinningData]);
  return (
    <>
      {loading && !auctionData ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <CustomStatusBar
            backgroundColor={COLORS.IconColor}
            barStyle="light-content"
          />
          <Header
            title={'Dashboard'}
            type={'dashboard'}
            icon={
              <FilterIcon
                height={HEIGHT.h36}
                width={HEIGHT.h36}
                fill={COLORS.yellow}
              />
            }
            menubar={
              <MenuIcon
                height={HEIGHT.h24}
                width={HEIGHT.h24}
                fill={COLORS.yellow}
              />
            }
            appIcon={
              <AppLogo
                height={sizeToDp(HEIGHT.h36)}
                width={sizeToDp(HEIGHT.h36)}
              />
            }
            onChanheText={onSearch}
            value={search}
            searchIcon={
              <SearchIcon
                height={sizeToDp(HEIGHT.h20)}
                width={sizeToDp(HEIGHT.h20)}
                fill={'#6C757D'}
              />
            }
            onFilterPress={onExpand}
            onMenuPress={onOpenDrawerScreen}
            style={styles.header}
          />
          {processingLive && <ProcessingAuction item={processingLive} />}
          {wonReq?.length !== 0 && (
            <>
              <Row>
                <Text style={styles.headingText}>Your Winnings!</Text>
                <Winners
                  height={sizeToDp(HEIGHT.h24)}
                  width={sizeToDp(HEIGHT.h24)}
                />
                <Pressable
                  style={styles.dropdownIcon}
                  onPress={dropDownHandler}>
                  <DropDown
                    height={sizeToDp(HEIGHT.h22)}
                    width={sizeToDp(HEIGHT.h22)}
                    fill={COLORS.IconColor}
                    style={
                      showWinningData
                        ? styles.dropUpIconStyle
                        : styles.dropdownIconStyle
                    }
                  />
                </Pressable>
              </Row>
              {showWinningData && (
                <View style={styles.wonAuctionBox}>
                  {wonReq?.slice(0, 2).map((item, index) => {
                    const {
                      global_start_time,
                      AuctionImages,
                      asset_name,
                      name,
                      view_currency,
                      asset_price,
                      payment_status,
                    } = item;
                    const AuctionDate = SetDateFormate(global_start_time);
                    return (
                      <>
                        <Pressable
                          onPress={() => onJoinedAuctionHandler(item)}
                          style={styles.wonAuctionInsideBox}>
                          <Row style={styles.detailBoxView}>
                            <View style={styles.logo}>
                              <FastImage
                                source={{
                                  uri:
                                    AuctionImages[0]?.image_url +
                                    AuctionImages[0]?.image[0],
                                  priority: FastImage.priority.fast,
                                }}
                                style={styles.auctionIcon}
                                resizeMode={FastImage.resizeMode.cover}
                              />
                            </View>
                            <View style={styles.mainItemView}>
                              <Text style={styles.dateText}>{AuctionDate}</Text>
                              <View style={styles.auctionDateAndPrice}>
                                <Text
                                  numberOfLines={2}
                                  style={styles.auctionName}>
                                  {name}
                                </Text>
                                {payment_status === '0' && (
                                  <Text style={styles.pendingAmount}>
                                    {'Pending'}
                                  </Text>
                                )}
                              </View>
                              <Row spaces>
                                <Text style={styles.assetsName}>
                                  {asset_name}
                                </Text>
                                <Text
                                  numberOfLines={1}
                                  style={styles.priceView}>
                                  {view_currency} {asset_price}
                                </Text>
                              </Row>
                            </View>
                          </Row>
                        </Pressable>
                        <View style={index === 0 && styles.borderView} />
                      </>
                    );
                  })}
                </View>
              )}
              <Text style={styles.headingText}>Explore More</Text>
            </>
          )}
          <FlatList
            data={allAluctonData}
            renderItem={renderItem}
            keyExtractor={renderKeyExtractor}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            ListEmptyComponent={renderEmptyData}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          <Bottomsheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}>
            <FilterData onClose={onClose} data={auctionData} />
          </Bottomsheet>
          {due_payment?.length > 0 && (
            <CustomAlert isVisibleModal={showWarning} backdropOpacity={0.9}>
              <Pressable
                style={styles.closeIcon}
                onPress={onCloseWarningHandler}>
                <Close height={HEIGHT.h23} width={HEIGHT.h23} />
              </Pressable>
              <View style={styles.alertBox}>
                <Warning />
                <Text style={styles.congTextStyle}>Reminder!</Text>
                <Text style={styles.warningText}>
                  Payment of (
                  <Text style={styles.wonAuctionAmount}>
                    {data.view_currency}{' '}
                    {parseFloat(due_payment[0]?.winning_price).toFixed(2)}
                  </Text>
                  ) pending for the Auction{' '}
                  <Text style={styles.wonAuctionName}>
                    {due_payment[0]?.name}
                  </Text>
                </Text>
                <Text style={styles.warningText}>
                  Payment of the outstanding balance is required to join the
                  upcoming auction. Kindly proceed to checkout and settle the
                  dues.
                </Text>
                <Button
                  size={'large'}
                  text={'Checkout'}
                  onPress={onCheckoutHandler}
                  style={styles.confirmButton}
                />
              </View>
            </CustomAlert>
          )}
        </View>
      )}
    </>
  );
};
export default HomeScreen;
