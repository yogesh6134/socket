import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import Row from '@components/Row';
import styles from './styles';
import OnButton from '@assets/radio-button-on.svg';
import OffButton from '@assets/radio-button-off.svg';
import CheckBox from '@assets/checkbox-outline.svg';
import UnCheckBox from '@assets/unCheckbox.svg';
import Button from '@components/Button';
import Close from '@assets/close.svg';
import {HEIGHT} from '@utils/constant';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesRequest} from '@redux/action/CommonAction';
import {allAuctionRequest, allAuctionSuccess} from '@screens/HomeScreen/action';
import {ScrollView} from 'react-native-gesture-handler';

export default function FilterData({onClose, data}) {
  const categoriesData = useSelector(state => state?.FilterReducer?.categories);
  const dispatch = useDispatch();
  const sort = ['Newest', 'Price Low-High', 'Price High-Low'];
  const [sortItem, setSortItem] = useState('Newest');
  const [categories, setCategories] = useState([]);
  const [response, setResponse] = useState(data);
  const [clearData, setClearData] = useState(false);

  useEffect(() => {
    setCategories(categoriesData);
    setResponse(data);
  }, [categories, categoriesData, dispatch, data]);

  const categoriesValue =
    categories?.length > 0 &&
    categories?.filter(items => {
      if (items.is_show) {
        return items.name;
      }
    });

  const onApplyCategories = useCallback(() => {
    const filterval =
      categoriesValue.length <= 0 ? categoriesData : categoriesValue;
    const res = response.filter(el => {
      return filterval.find(element => {
        return el.category_id === element.id;
      });
    });
    if (clearData) {
      setClearData(false);
      dispatch(allAuctionRequest());
    } else {
      if (sortItem == 'Newest') {
        res.sort((a, b) => new Date(b.global_start_time) - new Date(a.global_start_time));
        dispatch(allAuctionSuccess(res));
      }

      if (sortItem == 'Price Low-High') {
        res.sort((a, b) => parseFloat(a.asset_price) - parseFloat(b.asset_price));
        dispatch(allAuctionSuccess(res));
      }

      if (sortItem == 'Price High-Low') {
        res.sort((a, b) => parseFloat(b.asset_price) - parseFloat(a.asset_price));
        dispatch(allAuctionSuccess(res));
      }
    }
    onClose();
  }, [
    categoriesData,
    categoriesValue,
    clearData,
    dispatch,
    onClose,
    response,
    sortItem,
    categories,
    data,
  ]);

  const onClearAllFilterData = useCallback(() => {
    dispatch(categoriesRequest());
    setCategories(categoriesData);
    setSortItem('Newest');
    dispatch(allAuctionRequest());
    setTimeout(() => {
      onClose();
    }, 500);
  }, [categoriesData, dispatch]);

  const onDataChange = useCallback(
    item => {
      const val = item;
      setSortItem(val);
      setResponse(data);
    },
    [response, data],
  );

  const onDataChangeHandler = () => {
    onDataChange()
  }

  const renderItem = useCallback(
    ({item}) => {
      return (
        <Pressable
          style={styles.sortItemList}
          onPress={() => onDataChangeHandler(item)}>
          {sortItem === item ? (
            <OnButton
              height={HEIGHT.h23}
              width={HEIGHT.h23}
              style={styles.radioButtons}
            />
          ) : (
            <OffButton
              height={HEIGHT.h23}
              width={HEIGHT.h23}
              style={styles.radioButtons}
            />
          )}
          <Text style={styles.titleText}>{item}</Text>
        </Pressable>
      );
    },
    [sortItem],
  );

  const renderKeyExtractor = useCallback((item, index) => {
    index.toString();
  }, []);

  const selectCheckBox = (item, index) => {
    dispatch(allAuctionRequest());
    item.is_show = !item.is_show;
    categories[index] = item;
    setCategories([...categories]);
  };

  return (
    <View>
      <Row space style={styles.header}>
        <Text style={styles.headerText}>Filter</Text>
        <Pressable
          onPress={onClearAllFilterData}
          style={styles.clearAllItemButton}>
          <Row>
            <Close
              height={HEIGHT.h15}
              width={HEIGHT.h15}
              style={styles.crossIcon}
            />
            <Text style={styles.dissabledText}>Clear All</Text>
          </Row>
        </Pressable>
      </Row>
      <View
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.sortItemView}>
            <Text style={styles.sortItemDetail}>Sort By</Text>
            <FlatList
              data={sort}
              keyExtractor={renderKeyExtractor}
              renderItem={renderItem}
            />
          </View>
          <Text style={styles.sortItemDetail}>Category</Text>

          <View style={styles.categoriesView}>
            {categories?.length > 0 && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainerStyle}>
                  {categories?.map((item, index) => {
                    return (
                      <View key={item.id} style={{width: '50%'}}>
                        <Pressable
                          style={styles.sortItemList}
                          onPress={() => selectCheckBox(item, index)}>
                          {item.is_show ? (
                            <CheckBox
                              height={HEIGHT.h23}
                              width={HEIGHT.h23}
                              style={styles.radioButtons}
                            />
                          ) : (
                            <UnCheckBox
                              height={HEIGHT.h23}
                              width={HEIGHT.h23}
                              style={styles.radioButtons}
                            />
                          )}
                          <Text style={styles.categoryText}>{item.name}</Text>
                        </Pressable>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            )}
          </View>
        </View>
        <Row spaces style={styles.border}>
          <Button size={'small'} text={'Apply'} onPress={onApplyCategories} />
          <Button
            size={'small'}
            text={'Cancel'}
            buttonTextStyle={styles.buttonTextStyle}
            style={styles.button}
            onPress={onClose}
          />
        </Row>
      </View>
    </View>
  );
}
