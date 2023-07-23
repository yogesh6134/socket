import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './styles';
import Header from '@components/Header';
import Button from '@components/Button';
import OtpIcon from '@assets/forgot-password.svg';
import {HEIGHT, WIDTH} from '@utils/constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomStatusBar from '@components/CustomStatusBar';
import {COLORS} from '@utils/colors';
import OtpInputs from 'react-native-otp-inputs';
import {useDispatch, useSelector} from 'react-redux';
import {clearError, userResendOtp, userVerifyRequest} from './action';
import ErrorText from '@components/ErrorText';
import {DateTimeFormatedData} from '@utils/timeFormat';
import {sizeToDp} from '@utils/index';
import BackIcon from '@assets/backIcon.svg';

const OtpScreen = ({navigation, route}) => {
  const {userData} = useSelector(state => state?.signupReducer);
  const forgetdata = route.params;
  const {phone, email, location_path, type } = route.params;
  const {error} = useSelector(state => state?.otpReducer);
  const dispatch = useDispatch();
  const otpRef = useRef();
  const [otp, setOtp] = useState('');
  const [otpErr, setOtpErr] = useState('');

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChange = useCallback((code) => {
    setOtp(code);
    setOtpErr('');
    dispatch(clearError());
  }, []);

  const onBackToLogin = useCallback(() => {
    navigation.goBack();
  }, []);

  const onButtonPress = useCallback(() => {
    if (otp.length != 4) {
      setOtpErr('Please fill otp first');
    } else {
      let data;
      if (phone) {
        data = {
          otp: otp,
          token: userData?.token || null,
          date_time: DateTimeFormatedData(new Date()),
          id: userData?.id || null,
          phone: phone,
        };
      } else {
        data = {
          otp: otp,
          token: userData?.token || null,
          date_time: DateTimeFormatedData(new Date()),
          id: userData?.id || null,
          email: userData.email || email,
        };
      }
      const detail = {location_path: location_path, type: type}
      dispatch(userVerifyRequest({data, detail, navigation}));
    }
  }, [dispatch, otp]);

  const resendOtp = useCallback(() => {
    let data;
    if (phone) {
      data = {
        phone: phone,
        date_time: DateTimeFormatedData(new Date()),
        type: 'phone',
      };
    } else {
      data = {
        email: userData?.email || email,
        date_time: DateTimeFormatedData(new Date()),
        type: 'email',
      };
    }
    dispatch(userResendOtp({data}));
  }, []);

  const last = email
    ? String(email).slice(-12) 
    : phone
    ? String(phone).slice(-3)
    : String(userData.email).slice(-12);

  const first = email
    ? String(email).slice(0, 2)
    : phone
    ? String(phone).slice(0, 2)
    : String(userData.email).slice(0, 2);

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />
      <Header
        title={'Verify Otp'}
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        onBackIconPress={onBackToLogin}
      />
      <KeyboardAwareScrollView style={styles.main}>
        <View style={styles.topHeading}>
          <OtpIcon height={HEIGHT.h220} width={WIDTH.w250} />
          <Text style={styles.instruction}>
            Enter 4 digit verification code sent to your{' '}
            {type === 'email' ? 'email' : 'number'}
            <Text style={styles.userContact}>
              `{first}****{last}`
            </Text>
          </Text>
        </View>
        <OtpInputs
          clearTextOnFocus
          handleChange={handleChange}
          keyboardType="phone-pad"
          numberOfInputs={4}
          ref={otpRef}
          defaultValue={otp}
          autofillFromClipboard={true}
          style={styles.input}
          placeholderTextColor={COLORS.lightBlue}
          inputStyles={styles.inputStyles}
          autoFocusOnLoad
          placeholderCharacter="1234"
          inputContainerStyles={styles.inputContainerStyles}
        />
        {error ? <ErrorText value={error} /> : null}
        {otpErr ? <ErrorText value={otpErr} /> : null}
        <Pressable onPress={resendOtp}>
          <Text style={styles.resendOtp}>Resend OTP</Text>
        </Pressable>
        <Button size={'large'} text={'Verify'} onPress={onButtonPress} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default OtpScreen;
