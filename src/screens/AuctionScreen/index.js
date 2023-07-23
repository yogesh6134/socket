import {
  View,
  FlatList,
  TouchableOpacity,
  BackHandler,
  Text,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '@components/Header';
import styles from './styles';
import {COLORS} from '@utils/colors';
import CustomStatusBar from '@components/CustomStatusBar';
import UpcomingAuctionIcon from '@assets/upcomingAuction.svg';
import BlankPage from '@components/BlankPage';
import {useDispatch, useSelector} from 'react-redux';
import {
  cancelledAuctionRequest,
  completedAuctionRequest,
  upcomingAuctionRequest,
  wonAuctionRequest,
} from './action';
import {
  JoinedAuctionRenderItem,
  ProcessingAuction,
} from '@components/JoinedAuctionRenderItem';
import {useFocusEffect} from '@react-navigation/native';
import {
  processingLiveFailed,
  processingLiveRequest,
} from '@screens/LiveAuction/action';
import socketServices from '@utils/socketServices';
import {Loader} from '@components/LoadingView';

export default function AuctionScreen({navigation}) {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState([
    'Upcoming',
    'Won',
    'Participated',
    'Cancelled',
  ]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const user_id = useSelector(
    state => state?.profileReducer?.profileData?.data?.user_details?.user_id,
  );

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      dispatch(processingLiveFailed());
    });
    return focusHandler;
  }, [navigation, dispatch]);

  useEffect(() => {
    if (activeTabIndex === 0) {
      dispatch(processingLiveRequest());
      dispatch(upcomingAuctionRequest());
    }
    if (activeTabIndex === 1) {
      dispatch(wonAuctionRequest());
    }
    if (activeTabIndex === 2) {
      dispatch(completedAuctionRequest());
    }
    if (activeTabIndex === 3) {
      dispatch(cancelledAuctionRequest());
    }
  }, [activeTabIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [loading]);

  useFocusEffect(
    useCallback(() => {
      dispatch(processingLiveRequest());
      dispatch(upcomingAuctionRequest());
      const onBackPress = () => {
        navigation.navigate('Home');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigation, dispatch]),

    useEffect(() => {
      const timer = setTimeout(() => {
        socketServices.on('preAuction', data => {
          const users = data?.joinedUsers;
          const found = users.find(id => id == user_id);
          if (found) {
            navigation.navigate('Live Auction');
          }
        });
        socketServices.on('liveAuctionData', val => {
          const users = val?.joinedUsers;
          const found = users.find(id => id == user_id);
          if (found) {
            navigation.navigate('Live Auction');
          }
        });
      }, 2000);
      return () => clearTimeout(timer);
    }, [user_id, navigation]),
  );

  const processingLive = useSelector(
    state => state?.liveAuctionReducer?.LiveAuction[0],
  );
  const upcomingReq = useSelector(
    state => state?.auctionReducers?.upcomingAuctions,
  );

  const cancelledReq = useSelector(
    state => state?.auctionReducers?.canceledAuctions,
  );
  const completedReq = useSelector(
    state => state?.auctionReducers?.completedAuctions,
  );
  const wonReq = useSelector(state => state?.auctionReducers?.wonAuctions);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(processingLiveRequest());
    dispatch(upcomingAuctionRequest());
    setRefreshing(false);
  }, [dispatch]);

  const onActiveTabHandler = useCallback(
    ({index}) => {
      setLoading(true);
      setActiveTabIndex(index);
    },
    [activeTabIndex],
  );

  const renderTabItem = useCallback(
    ({item, index}) => {
      const backgroundColor =
        index === activeTabIndex ? COLORS.primary : COLORS.white;
      const color = index === activeTabIndex ? 'white' : 'black';
      return (
        <TouchableOpacity
          onPress={() => onActiveTabHandler({index: index})}
          style={[styles.tabsView, {backgroundColor: backgroundColor}]}>
          <Text style={[styles.tabBarText, {color: color}]}>{item}</Text>
        </TouchableOpacity>
      );
    },
    [activeTabIndex],
  );

  const emptyComponent = useCallback(() => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <BlankPage
          icon={<UpcomingAuctionIcon />}
          heading={'No activity yet!'}
          title={'You have no notifications.'}
        />
      );
    }
  }, [upcomingReq, cancelledReq, completedReq, wonReq, loading]);

  const renderKeyExtractor = useCallback(
    (item, index) => {
      index.toString();
    },
    [tabs],
  );
  const renderUpcomingAuction = useCallback(
    item => {
      return (
        <JoinedAuctionRenderItem item={item} length={upcomingReq?.length} />
      );
    },
    [upcomingReq],
  );

  const renderUpcomingKeyExtractor = useCallback(
    (item, index) => {
      index.toString();
    },
    [upcomingReq],
  );

  const renderCompleteAuction = useCallback(
    item => {
      return (
        <JoinedAuctionRenderItem item={item} length={completedReq.length} />
      );
    },
    [completedReq],
  );

  const renderCompleteKeyExtractor = useCallback(
    (item, index) => {
      index.toString();
    },
    [completedReq],
  );

  const renderCanclledAuction = useCallback(
    item => {
      return (
        <JoinedAuctionRenderItem item={item} length={cancelledReq.length} />
      );
    },
    [cancelledReq],
  );

  const renderCancelledKeyExtractor = useCallback(
    (item, index) => {
      index.toString();
    },
    [cancelledReq],
  );

  const renderwonAuction = useCallback(
    item => {
      return <JoinedAuctionRenderItem item={item} length={wonReq.length} />;
    },
    [wonReq],
  );

  const renderWonKeyExtractor = useCallback(
    (item, index) => {
      index.toString();
    },
    [wonReq],
  );

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.IconColor}
        barStyle="light-content"
      />
      <Header
        title={'Auctions'}
        style={{backgroundColor: COLORS.IconColor}}
        headerColor={styles.headerText}
      />
      <View style={styles.tabsBox}>
        <FlatList
          data={tabs}
          renderItem={renderTabItem}
          keyExtractor={renderKeyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        {activeTabIndex === 0 && (
          <>
            {processingLive && <ProcessingAuction item={processingLive} />}
            <FlatList
              data={upcomingReq}
              renderItem={renderUpcomingAuction}
              keyExtractor={renderUpcomingKeyExtractor}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={!processingLive ? emptyComponent : null}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </>
        )}
        {activeTabIndex === 1 && (
          <FlatList
            data={wonReq}
            renderItem={renderwonAuction}
            keyExtractor={renderWonKeyExtractor}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={emptyComponent}
          />
        )}
        {activeTabIndex === 2 && (
          <FlatList
            data={completedReq}
            renderItem={renderCompleteAuction}
            keyExtractor={renderCompleteKeyExtractor}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={emptyComponent}
          />
        )}
        {activeTabIndex === 3 && (
          <FlatList
            data={cancelledReq}
            renderItem={renderCanclledAuction}
            keyExtractor={renderCancelledKeyExtractor}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={emptyComponent}
          />
        )}
      </View>
    </View>
  );
}
