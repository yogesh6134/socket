import {FlatList, Pressable, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {packageRequest} from './action';
import Header from '@components/Header';
import CustomStatusBar from '@components/CustomStatusBar';
import {COLORS} from '@utils/colors';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/index';
import {HEIGHT} from '@utils/constant';
import NextIcon from '@assets/mediunNextIcon.svg';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import {Loader} from '@components/LoadingView';
import Row from '@components/Row';

const Packages = ({navigation, route}) => {
  const dispatch = useDispatch();
  const packageVal = useSelector(state => state?.packageReducer?.packageData);
  const [data, setData] = useState([]);
  const amount = route?.params?.amount;
  const auctionId = route?.params?.auctionId;

  useEffect(() => {
    dispatch(packageRequest());
  }, [dispatch]);

  useEffect(() => {
    setData(packageVal);
    if (amount) {
      const val = packageVal.filter(items => {
        if (JSON.parse(items.max_tokens) > JSON.parse(amount)) {
          return items;
        }
      });
      setData(val);
    }
  }, [packageVal, amount]);

  const onBackHandler = useCallback(() => {
    navigation.goBack();
  }, []);
  const renderKeyExtractor = useCallback((item, index) => {
    index.toString();
  }, []);

  const onPressViewHandler = useCallback(item => {
    navigation.navigate(NAVIGATION_SCREENS.ADD_FUND, {
      type: 'wallets',
      amount,
      auctionId,
      item,
    });
  }, []);

  const renderItem = useCallback(({item, index}) => {
    const {
      name,
      global_currency,
      min_tokens,
      max_tokens,
      custom_currency_name,
      singular_currency_name,
    } = item;
    const rec = amount <= max_tokens && amount >= min_tokens;
    const color = [
      '#EC7B7B',
      '#FCCE71',
      '#17C2A9',
      '#6ECEFE',
    ];
    const buttonColor = [
      '#FCCE71',
      '#17C2A9',
      '#6ECEFE',
      '#EC7B7B',
    ];
    return (
      <Pressable onPress={() => onPressViewHandler(item)}
          style={[
            styles.outerBox,
            {backgroundColor: color[index % color.length]},
          ]}>
          <Row spaces>
            <Text style={styles.nameView}>{name}</Text>
            {rec && <Text style={styles.recomendedText}>{'Recomended'}</Text>}
          </Row>
          <View style={styles.innerBox}>
            <View style={styles.tokenView}>
              <Text style={styles.valueLeft}>{min_tokens}</Text>
              <Text style={styles.superScript}> + </Text>
            </View>
            <View style={styles.innerView}>
              <Text style={styles.value}>
                {min_tokens} {custom_currency_name}
              </Text>
              <View style={styles.divider} />
              <Text style={styles.valuePerY}>
                {global_currency} {item.amount} PER {singular_currency_name}
              </Text>
            </View>
          </View>
          <View style={[styles.imageView, 
                {backgroundColor: buttonColor[index % buttonColor.length]}
          ]}>
            <NextIcon
              height={sizeToDp(HEIGHT.h22)}
              width={sizeToDp(HEIGHT.h22)}
              fill={COLORS.white}
            />
          </View>
      </Pressable>
    );
  });

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title="Packages"
        onBackIconPress={onBackHandler}
      />
      {data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={renderKeyExtractor}
        />
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default Packages;
