import {View, ScrollView, Pressable, Text} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import Verification from '@assets/verification.svg';
import Button from '@components/Button';
import {commonStyle} from '@utils/commonStyle';
import Mail from '@assets/mail.svg';
import PhoneLogo from '@assets/phone-portrait.svg';
import {HEIGHT, WIDTH} from '@utils/constant';
import CustomStatusBar from '@components/CustomStatusBar';
import {COLORS} from '@utils/colors';
import Arrow from '@assets/ArrowNext.svg';
import Row from '@components/Row';
import {useDispatch} from 'react-redux';
import {forgotPasswordRequest} from './action';
import CustomTextInput from '@components/TextInput';
import {DateTimeFormatedData} from '@utils/timeFormat';
import DeviceCountry from 'react-native-device-country';
import CountryPicker from '@components/CountryPicker';
import ErrorText from '@components/ErrorText';

const ForgotPassword = ({navigation}) => {
  const [isSelect, setIsSelect] = useState('email');
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState(null);
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState();
  const [countryMobCode, setCountryMobCode] = useState();
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    DeviceCountry.getCountryCode()
      .then(result => {
        const code = result.code.toUpperCase();
        setCountryCode(code);
      })
      .catch(e => {
        return null
      });
  }, []);

  const countryCodeLength = formattedValue.length - mobile.length;

  useEffect(() => {
    const code = formattedValue.substr(0, countryCodeLength);
    setCountryMobCode(code);
  }, [mobile, countryCode, countryCodeLength, formattedValue]);

  const onChangeField = useCallback(() => {
    if (isSelect === 'phone') {
      setIsSelect('email');
    }
    if (isSelect === 'email') {
      setIsSelect('phone');
    }
  }, [isSelect]);

  const onButtonPress = useCallback(() => {
    const date_time = DateTimeFormatedData(new Date());
    if (isSelect === 'phone') {
      if (mobile.length < 6) {
        setMobileError('Phone number must be 6 to 15 digits');
      } else {
        const data = {
          phone: mobile,
          date_time: date_time,
          type: isSelect,
        };
        setMobileError(null);
        dispatch(forgotPasswordRequest({data}));
      }
    } else {
      const data = {
        email: email,
        date_time: date_time,
        type: isSelect,
      };
      dispatch(forgotPasswordRequest({data}));
    }
  }, [countryMobCode, dispatch, email, isSelect, mobile]);

  const onBackScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onChangeFormatPhoneNumber = useCallback(text => {
    setFormattedValue(text);
  }, []);

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title="Forgot Password"
        onBackIconPress={onBackScreen}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={commonStyle.centerText}>
          <Verification
            height={sizeToDp(HEIGHT.h220)}
            width={sizeToDp(HEIGHT.h250)}
          />
        </View>
        <View style={styles.heading}>
          <Text style={styles.instructions}>
            Select which contact details should we use to reset your password
          </Text>
        </View>

        {isSelect === 'email' && (
          <CustomTextInput
            label={'Email Address  '}
            onChangeText={setEmail}
            leftIcon={
              <Mail
                height={sizeToDp(HEIGHT.h22)}
                width={sizeToDp(HEIGHT.h22)}
                fill={COLORS.IconColor}
                style={styles.mailIcon}
              />
            }
            value={email}
            maxLength={64}
          />
        )}
        {isSelect === 'phone' && (
          <CustomTextInput
            label={'Phone Number  '}
            onChangeText={setMobile}
            leftIcon={
              <PhoneLogo
                height={sizeToDp(HEIGHT.h22)}
                width={sizeToDp(HEIGHT.h22)}
                fill={COLORS.tranparent}
                style={styles.phoneLogo}
              />
            }
            value={mobile}
            maxLength={64}
          />
        )}
        {mobileError && <ErrorText value={mobileError} />}

        <Button size={'large'} text={'Continue'} onPress={onButtonPress} />

        <Row style={styles.optionalView}>
          <View style={styles.borderBox} />
          <Text style={styles.optionaText}>or</Text>
          <View style={styles.borderBox} />
        </Row>
        <Button
          size={'large'}
          text={isSelect === 'email' ? 'Via Phone' : 'Via email'}
          textColor={'black'}
          style={styles.loginWithPhoneView}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={onChangeField}
          icon={
            <PhoneLogo
              height={sizeToDp(HEIGHT.h20)}
              width={sizeToDp(HEIGHT.h20)}
              fill={COLORS.tranparent}
              style={styles.phoneLogo}
            />
          }
        />
        <Pressable onPress={onBackScreen}>
          <Row style={styles.BottomBackContent}>
            <Arrow
              style={styles.arrow}
              width={sizeToDp(WIDTH.w30)}
              height={HEIGHT.h18}
            />
            <Text style={styles.backButtonText}>Back to Sign in</Text>
          </Row>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
