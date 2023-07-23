import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import styles from './styles';
import Header from '@components/Header';
import {sizeToDp} from '@utils/';
import CustomTextInput from '@components/TextInput';
import Button from '@components/Button';
import {COLORS} from '@utils/colors';
import Row from '@components/Row';
import Mail from '@assets/mail.svg';
import BackIcon from '@assets/backIcon.svg';
import PasswordLogo from '@assets/passwordLogo.svg';
import Eye from '@assets/eye-off-sharp.svg';
import EyeShow from '@assets/eye-on-sharp.svg';
import UserLogo from '@assets/userLogo.svg';
import Arrow from '@assets/ArrowNext.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {HEIGHT, WIDTH} from '@utils/constant';
import CustomStatusBar from '@components/CustomStatusBar';
import {useDispatch, useSelector} from 'react-redux';
import {userRegisterRequest} from './action';
import {getSystemName} from 'react-native-device-info';
import {DateTimeFormatedData, TimeZone} from '@utils/timeFormat';
import DeviceCountry from 'react-native-device-country';
import CountryPicker from '@components/CountryPicker';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import ErrorText from '@components/ErrorText';
import * as Yup from 'yup';
import {Formik} from 'formik';

const SignUpScreen = ({navigation}) => {
  const {pushToken, refer_code} = useSelector(state => state?.FilterReducer);
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [custonCountryCode, setCustomCountryCode] = useState();
  const [callingCode, setCallingCode] = useState();

  const phoneInput = useRef(null);

  useEffect(() => {
    DeviceCountry.getCountryCode()
      .then(result => {
        const code = result.code.toUpperCase();
        setCountryCode(code);
      })
      .catch(e => {
        return null;
      });
  }, []);

  const device = getSystemName();

  const onBackToLogin = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPrivacyPolicy = useCallback(() => {
    navigation.navigate(NAVIGATION_SCREENS.HELPANDSUPPORT);
  }, [navigation]);

  const onSubmitData = useCallback(
    props => {
      const data = {
        first_name: props.first_name,
        last_name: props.last_name,
        email: props.email,
        country_code: "+" + callingCode,
        country_code_symbol: custonCountryCode
          ? custonCountryCode
          : countryCode,
        mobile: props.mobile,
        password: props.password,
        confirm_password: props.confirm_password,
        device_token: pushToken,
        date_time: DateTimeFormatedData(new Date()),
        time_zone: TimeZone(new Date()),
        device_type: device === 'Android' ? 1 : 2,
        referral_code: refer_code,
      };
      dispatch(userRegisterRequest({data}));
    },
    [validationSchema, custonCountryCode, countryCode, phoneInput],
  );

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .trim()
      .min(3, 'Please enter valid name!')
      .required('First Name is required!')
      .matches(/^[a-zA-Z ]{2,40}$/, 'Invalid name!'),
    last_name: Yup.string()
      .trim()
      .min(3, 'Please enter valid name!')
      .required('Last Name is required!')
      .matches(/^[a-zA-Z ]{2,40}$/, 'Invalid name!'),
    email: Yup.string()
      .email('Invalid email!')
      .required('Email address is required!')
      .trim()
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter valid email address!',
      ),
    mobile: Yup.string()
      .required('Phone number is required!')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Please enter a valid phone number!',
      ),
    password: Yup.string()
      .min(6, 'Password should be minimum 6 chars!')
      .max(15, 'Password should not excced 15 chars!')
      .required('Password is required!')
      .matches(/[a-z]/, 'Must add one lowercase letter!')
      .matches(/[A-Z]/, 'Must add one UPPERCASE letter!')
      .matches(/\W/g, 'Must add one special symbol: @$! % * ? &!')
      .matches(/[0-9]/g, 'Must add one number!'),
    confirm_password: Yup.string()
      .required('Passwords must match!')
      .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
  });

  const onChangeNumberHandler = useCallback(
    text => {
      setPhoneNumber(text);
      setCustomCountryCode(phoneInput.current?.getCountryCode());
      setCallingCode(phoneInput.current?.getCallingCode());
    },
    [phoneInput],
  );


  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />

      <Header
        title="Signup"
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        onBackIconPress={onBackToLogin}
      />
      <KeyboardAwareScrollView style={styles.contentContainer}>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            mobile: '',
            password: '',
            confirm_password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmitData}>
          {({
            values,
            handleChange,
            errors,
            touched,
            handleSubmit,
            handleBlur,
          }) => (
            <View>
              <CustomTextInput
                label={'First Name '}
                leftIcon={
                  <UserLogo
                    height={sizeToDp(HEIGHT.h22)}
                    width={sizeToDp(HEIGHT.h22)}
                    fill={COLORS.IconColor}
                  />
                }
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                value={values.first_name}
                maxLength={15}
              />
              {touched.first_name && errors.first_name && (
                <ErrorText value={errors.first_name} />
              )}
              <CustomTextInput
                label={'Last Name '}
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                leftIcon={
                  <UserLogo
                    height={sizeToDp(HEIGHT.h22)}
                    width={sizeToDp(HEIGHT.h22)}
                    fill={COLORS.IconColor}
                  />
                }
                value={values.last_name}
                maxLength={15}
              />
              {touched.last_name && errors.last_name && (
                <ErrorText value={errors.last_name} />
              )}
              <CustomTextInput
                label={'Email Address  '}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                leftIcon={
                  <Mail
                    height={sizeToDp(HEIGHT.h22)}
                    width={sizeToDp(HEIGHT.h22)}
                    fill={COLORS.IconColor}
                    style={styles.mailIcon}
                  />
                }
                value={values.email}
                maxLength={64}
              />
              {touched.email && errors.email && (
                <ErrorText value={errors.email} />
              )}

              <CountryPicker
                ref={phoneInput}
                defaultValue={values.mobile}
                defaultCode={countryCode}
                onChangeText={handleChange('mobile')}
                onChangeFormattedText={onChangeNumberHandler}
              />
              {touched.mobile && errors.mobile && (
                <ErrorText value={errors.mobile} />
              )}
              <CustomTextInput
                label={'Password  '}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                leftIcon={
                  <PasswordLogo
                    height={sizeToDp(HEIGHT.h22)}
                    width={sizeToDp(HEIGHT.h22)}
                    fill={COLORS.IconColor}
                  />
                }
                isPassword
                maxLength={15}
                showPassword={
                  <View style={styles.passwordLogo}>
                    <EyeShow
                      height={sizeToDp(HEIGHT.h22)}
                      width={sizeToDp(HEIGHT.h22)}
                    />
                  </View>
                }
                hidePassword={
                  <View style={styles.passwordLogo}>
                    <Eye
                      height={sizeToDp(HEIGHT.h22)}
                      width={sizeToDp(HEIGHT.h22)}
                    />
                  </View>
                }
              />
              {touched.password && errors.password && (
                <ErrorText value={errors.password} />
              )}
              <CustomTextInput
                label={'Confirm Password  '}
                onChangeText={handleChange('confirm_password')}
                onBlur={handleBlur('confirm_password')}
                value={values.confirm_password}
                leftIcon={
                  <PasswordLogo
                    height={sizeToDp(HEIGHT.h22)}
                    width={sizeToDp(HEIGHT.h22)}
                    fill={COLORS.IconColor}
                  />
                }
                isPassword
                maxLength={15}
                showPassword={
                  <View style={styles.passwordLogo}>
                    <EyeShow
                      height={sizeToDp(HEIGHT.h22)}
                      width={sizeToDp(HEIGHT.h22)}
                    />
                  </View>
                }
                hidePassword={
                  <View style={styles.passwordLogo}>
                    <Eye
                      height={sizeToDp(HEIGHT.h22)}
                      width={sizeToDp(HEIGHT.h22)}
                    />
                  </View>
                }
              />
              {touched.confirm_password && errors.confirm_password && (
                <ErrorText value={errors.confirm_password} />
              )}
              <Button size={'large'} text={'Signup'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>
        <View style={styles.termsView}>
          <Text style={styles.instructionTitle}>
            By clicking “Signup” you agree to Yolop’s
          </Text>
          <Row>
            <Pressable onPress={onPrivacyPolicy}>
              <Text style={styles.activeFont}>Terms of use </Text>
            </Pressable>
            <Text style={styles.instructionTitle}> or </Text>
            <Pressable onPress={onPrivacyPolicy}>
              <Text style={styles.activeFont}> Privacy Policy</Text>
            </Pressable>
          </Row>
        </View>
        <Row style={styles.bottomView}>
          <Text style={styles.signInInstruction}>
            Already have an account ?{' '}
          </Text>
          <Pressable onPress={onBackToLogin}>
            <Row style={styles.bottomButtonView}>
              <Text style={styles.activeFont}>{' Sign in'} </Text>
              <Arrow
                width={sizeToDp(WIDTH.w30)}
                height={HEIGHT.h18}
                style={styles.arrow}
              />
            </Row>
          </Pressable>
        </Row>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default SignUpScreen;
