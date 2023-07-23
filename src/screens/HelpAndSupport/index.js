import Header from '@components/Header';
import React, {useCallback, useState} from 'react';
import {View, Text, Image, Pressable, TextInput, FlatList} from 'react-native';
import styles from './styles';
import BackIcon from '@assets/backIcon.svg';
import HelpAndSupportIcon from '@assets/helpAndSupport.svg';
import {sizeToDp} from '@utils/';
import Button from '@components/Button';
import CustomStatusBar from '@components/CustomStatusBar';
import {COLORS} from '@utils/colors';
import {HEIGHT} from '@utils/constant';
import CustomAlert from '@components/AlertBox';
import {IMAGES} from '@assets/index';
import Close from '@assets/close.svg';
import DropDown from '@assets/mediunNextIcon.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {helpAndSupportRequest} from './action';

export default function HelpAndSupport({navigation}) {
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);
  const [visible, setVisible] = useState(false);
  const subjects = [
    'Online Auctions',
    'Registration',
    'Bidding',
    'Payment',
    'Shipping',
    'Other',
  ];
  const [selectSubject, setSelectSubject] = useState(subjects[0]);
  const [message, setMessage] = useState('');

  const userDetail = useSelector(
    state => state?.profileReducer?.profileData?.data,
  );

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const goBackHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onContactUs = useCallback(() => {
    setShowWarning(!showWarning);
  }, [showWarning]);

  const onSubmitHandler = useCallback(() => {
    const userName = `${userDetail?.user_details.first_name} ${userDetail?.user_details.last_name}`;
    const data = {
      name: userName,
      country_code: userDetail?.country_code,
      mobile: userDetail?.user_details.mobile,
      email: userDetail?.user_details.email,
      subject: selectSubject,
      message: message,
    };
    dispatch(helpAndSupportRequest(data));
    setShowWarning(!showWarning);
  }, [showWarning]);

  const onSelectSubjectHandler = item => {
    setVisible(false);
    setSelectSubject(item);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <FlatList
          data={subjects}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <Pressable
                style={styles.dropdownItems}
                onPress={() => onSelectSubjectHandler(item)}>
                <Text style={styles.modalTitle}>{item}</Text>
              </Pressable>
            );
          }}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.IconColor}
        barStyle="light-content"
      />
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.white} />}
        title={'Help & Support'}
        onBackIconPress={goBackHandler}
        style={styles.header}
        headerColor={{color: COLORS.white}}
      />
      <View style={styles.main}>
        <HelpAndSupportIcon />
      </View>

      <View style={styles.bottomBox}>
        <Text style={styles.bottomHeading}>Need help?</Text>
        <Text style={styles.bottomHeadingDetail}>
          Send us a message and we shall try to resolve your query in one
          business day.
        </Text>
        <Button
          size={'large'}
          text={'Contact Us'}
          onPress={onContactUs}
          style={styles.button}
        />
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <CustomAlert
          isVisibleModal={showWarning}
          modalStyle={styles.modalStyle}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeading}>Support Center</Text>
            <Pressable style={styles.closeModal} onPress={onContactUs}>
              <Close height={HEIGHT.h20} width={HEIGHT.h20} />
            </Pressable>
          </View>
          <View style={styles.modalMainView}>
            <Text style={styles.modalTitle}>Subject</Text>
            <Pressable style={styles.modalHeader} onPress={toggleDropdown}>
              <Text style={styles.dropdownHeading}>{selectSubject}</Text>
              <DropDown
                height={HEIGHT.h15}
                width={HEIGHT.h15}
                fill={'#000'}
                style={
                  visible ? styles.dropUpIconStyle : styles.dropdownIconStyle
                }
              />
            </Pressable>
            {renderDropdown()}

            <TextInput
              placeholder="Message"
              style={styles.messageBox}
              multiline
              value={message}
              onChangeText={setMessage}
              returnKeyType="done"
            />
            <Button
              size={'large'}
              text={'Submit'}
              onPress={onSubmitHandler}
              style={styles.button}
            />
          </View>
        </CustomAlert>
      </KeyboardAwareScrollView>
    </View>
  );
}
