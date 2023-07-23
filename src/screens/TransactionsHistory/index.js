import Header from '@components/Header';
import React, {useCallback, useEffect, useState,useRef} from 'react';
import {Pressable, Text, View, FlatList} from 'react-native';
import styles from './styles';
import BackIcon from '@assets/backIcon.svg';
import BlankHistory from '@assets/blankHistory.svg';
import {sizeToDp} from '@utils/';
import CustomStatusBar from '@components/CustomStatusBar';
import {COLORS} from '@utils/colors';
import {HEIGHT} from '@utils/constant';
import BlankPage from '@components/BlankPage';
import {useDispatch, useSelector} from 'react-redux';
import {
  userPurchasesItemRequest,
  userRewardsRequest,
  userTransactionChargesRequest,
  userTransactionRequest,
} from './action';
import {Loader} from '@components/LoadingView';
import Row from '@components/Row';

const TransactionsHistorye = ({navigation, route}) => {
  const type = route?.params?.type
  const dispatch = useDispatch();
  const historyType = [
    {name: 'Deposits', id: 0},
    {name: 'Auction Charges', id: 1},
    {name: 'Purchases', id: 2},
    {name: 'Earnings', id: 3},
  ];
  const [activeHistory, setActiveHistory] = useState(0);
  const [loading, setLoading] = useState(true);
  const flatListRef = useRef(null);

  useEffect(()=> {
    if (type) {
      scrollToPosition();
      setActiveHistory(3)
    }
  }, [])

  useEffect(() => {
    if (activeHistory === 0) {
      dispatch(userTransactionRequest());
    }
    if (activeHistory === 1) {
      dispatch(userTransactionChargesRequest());
    }
    if (activeHistory === 2) {
      dispatch(userPurchasesItemRequest());
    }
    if (activeHistory === 3) {
      dispatch(userRewardsRequest());
    }
  }, [activeHistory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeHistory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPosition = () => {
    const positionToScroll = 200;
    flatListRef.current.scrollToOffset({ offset: positionToScroll });
  };
  const onCheckHistory = useCallback(
    props => () => {
      setLoading(true);
      setActiveHistory(props);
    },
    [],
  );

  const onBackButton = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const stripeDataVal = useSelector(
    state => state?.transactionHistoryReducer.stripeData,
  );

  const PaymentCharges = useSelector(
    state => state?.transactionHistoryReducer.stripeDataCharges,
  );
  const purchasesItems = useSelector(
    state => state?.transactionHistoryReducer.purchasesItem,
  );

  const rewardedItems = useSelector(
    state => state?.transactionHistoryReducer?.referralData,
  );

  const renderItem = useCallback(
    ({item, index}) => {
      const backgroundColor =
        index === activeHistory ? COLORS.primary : COLORS.white;
      const color = index === activeHistory ? 'white' : 'black';
      return (
        <Pressable
          style={[styles.tabsView, {backgroundColor: backgroundColor}]}
          onPress={onCheckHistory(index)}>
          <Text style={[styles.tabNavigatorText, {color: color}]}>
            {item.name}
          </Text>
        </Pressable>
      );
    },
    [activeHistory, onCheckHistory],
  );

  const emptyComponent = useCallback(() => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <BlankPage
          icon={<BlankHistory />}
          heading={'No activity yet!'}
          title={'You have no history so far.'}
        />
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const renderListItem = useCallback(({item}) => {
    const status = () => {
      switch (item.payment_status) {
        case 'succeeded': {
          return <Text style={styles.transactionStatusSuccess}>Success</Text>;
        }
        case 'Pending': {
          return (
            <Text style={styles.transactionStatusProcessing}>Pending</Text>
          );
        }
        case 'Processing': {
          return (
            <Text style={styles.transactionStatusProcessing}>Processing</Text>
          );
        }
        default: {
          return <Text style={styles.transactionStatusCancel}>Cancel</Text>;
        }
      }
    };
    return (
      <View style={styles.historyDetail}>
        <View style={styles.historyDetailsView}>
          <Text style={styles.transactionDate}>{item.auction_name}</Text>
          <Text style={[styles.transactionName, {color: COLORS.black}]}>
            {item.name}
          </Text>

          <Text style={styles.transactionFeeText}>
            Transaction Id :{' '}
            <Text style={[styles.feeChargesText, {color: COLORS.black}]}>
              {item.transaction_id}
            </Text>
          </Text>

          <Text style={[styles.feeChargesText, {color: COLORS.black}]}>
            {item.updated_at}
          </Text>
        </View>
        <View style={styles.historybuttonView}>
          {status()}
          <Text style={styles.transactionPrice}>
            {item.currency} {item.total}{' '}
          </Text>
        </View>
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPaymentChargesItem = useCallback(({item}) => {
    return (
      <View style={styles.historyDetail}>
        <View style={styles.historyDetailsView}>
          <Text style={styles.transactionName}>{item.auction_name}</Text>
          <Text style={styles.transactionFeeText}>
            Participation Fee :{' '}
            <Text style={[styles.feeChargesText, {color: COLORS.red}]}>
              {item.view_currency} {item.participation_fees}
            </Text>
          </Text>
          <Text style={styles.transactionFeeText}>
            Fee Charged :{' '}
            <Text style={[styles.feeChargesText, {color: COLORS.green}]}>
              {item.view_currency} {item.auction_fees}
            </Text>
          </Text>
        </View>
        <View style={styles.historybuttonView}>
          <Text style={styles.transactionDate}>{item.date_time}</Text>
        </View>
      </View>
    );
  }, []);
  const renderEarningItem = useCallback(({item}) => {
    return (
      <View style={styles.paymentHistoryDetail}>
        <Text style={styles.earningText}>{item?.updated_at}</Text>
        <Text style={styles.transactionName}>{item?.name}</Text>
        <Row spaces>
          <Text style={styles.earningText}>Referred To:{item?.first_name}</Text>
          <Text style={[styles.earningText, {color: COLORS.red}]}>
            Participation Fee
          </Text>
        </Row>
        <Row spaces>
          <Text style={styles.earningText}>
            Amount: {item?.currency_symbol} {item?.amount} (
            {item?.user_refer_percentage}) %
          </Text>
          <Text style={styles.transactionName}>
            {item?.currency_symbol}
            {item?.participation_fees}
          </Text>
        </Row>
      </View>
    );
  }, []);

  const renderStripeListItem = useCallback(({item}) => {
    const stripeStatus = () => {
      switch (item.payment_status) {
        case 'succeeded': {
          return <Text style={styles.transactionStatusSuccess}>Success</Text>;
        }
        case 'Pending': {
          return (
            <Text style={styles.transactionStatusProcessing}>Pending</Text>
          );
        }
        case 'Processing': {
          return (
            <Text style={styles.transactionStatusProcessing}>Processing</Text>
          );
        }
        default: {
          return <Text style={styles.transactionStatusCancel}>Cancel</Text>;
        }
      }
    };
    return (
      <View style={styles.paymentHistoryDetail}>
        <Row spaces>
          <Text style={styles.inActiveTabNavigatorText}>
            {item?.package_name}
          </Text>
          <Text style={styles.transactionDate}>{item?.date_time}</Text>
        </Row>
        <View style={styles.paymentHistoryData}>
          <View style={styles.historyDetailsView}>
            <Text style={styles.transactionDate}>
              Discount: {item?.discount}
            </Text>
            <Text style={styles.transactionDate}>
              Amount Paid: {item.currency} {item?.total}
            </Text>

            <Text style={styles.transactionName}>
              {`Transaction Id: ${item.transaction_id}`}
            </Text>
          </View>
          <View style={styles.historybuttonView}>
            {stripeStatus()}
            <Text style={styles.transactionPrice}>{item?.amount}</Text>
          </View>
        </View>
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        title={'Transaction History'}
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        onBackIconPress={onBackButton}
      />
      <View>
        <View style={styles.tabsBox}>
          <FlatList
            ref={flatListRef}
            data={historyType}
            renderItem={renderItem}
            keyExtractor={renderKeyExtractor}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {activeHistory === 0 && (
          <FlatList
            data={stripeDataVal}
            keyExtractor={renderKeyExtractor}
            renderItem={renderStripeListItem}
            ListEmptyComponent={emptyComponent}
            contentContainerStyle={styles.contentBottomContainer}
          />
        )}
        {activeHistory === 1 && (
          <FlatList
            data={PaymentCharges}
            renderItem={renderPaymentChargesItem}
            ListEmptyComponent={emptyComponent}
            keyExtractor={renderKeyExtractor}
            contentContainerStyle={styles.contentBottomContainer}
          />
        )}
        {activeHistory === 2 && (
          <FlatList
            data={purchasesItems}
            renderItem={renderListItem}
            ListEmptyComponent={emptyComponent}
            keyExtractor={renderKeyExtractor}
            contentContainerStyle={styles.contentBottomContainer}
          />
        )}

        {activeHistory === 3 && (
          <FlatList
            data={rewardedItems}
            renderItem={renderEarningItem}
            ListEmptyComponent={emptyComponent}
            keyExtractor={renderKeyExtractor}
            contentContainerStyle={styles.contentBottomContainer}
          />
        )}
      </View>
    </View>
  );
};

export default TransactionsHistorye;
