import React, {useCallback, useState} from 'react';
import {Pressable, View, ImageBackground, Text, ScrollView} from 'react-native';
import styles from './styles';
import {sizeToDp} from '@utils/';
import CustomTextInput from '@components/TextInput';
import Button from '@components/Button';
import {COLORS} from '@utils/colors';
import Row from '@components/Row';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import BackIcon from '@assets/backIcon.svg';
import {userLoginRequest, userPhoneRequest} from './action';
import {useDispatch, useSelector} from 'react-redux';
import Mail from '@assets/mail.svg';
import PasswordLogo from '@assets/passwordLogo.svg';
import Hide from '@assets/eye-off-sharp.svg';
import Show from '@assets/eye-on-sharp.svg';
import Arrow from '@assets/ArrowNext.svg';
import PhoneLogo from '@assets/phone-portrait.svg';
import {HEIGHT, WIDTH} from '@utils/constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomStatusBar from '@components/CustomStatusBar';
import Header from '@components/Header';
import {getSystemName} from 'react-native-device-info';
import {DateTimeFormatedData, TimeZone} from '@utils/timeFormat';
import ErrorText from '@components/ErrorText';
import * as Yup from 'yup';
import {Formik} from 'formik';
import backgroundImage from '@assets/images/login-img.png';

const LoginScreen = ({navigation}) => {
  const pushToken = useSelector(state => state?.FilterReducer?.pushToken);
  const dispatch = useDispatch();
  const [loginWIthPhone, setLoginWithPhone] = useState(false);
  const d = getSystemName();
  const device_type = d === 'Android' ? 1 : 2;
  const onExpand = () => {
    setLoginWithPhone(!loginWIthPhone);
  };
  const onSignupHandler = () => {
    navigation.navigate(NAVIGATION_SCREENS.SIGNUP);
  };



  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email('Invalid email!')
      .required('Email address is required.')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter valid email address.',
      ),
    password: Yup.string()
      .min(6, 'Password should be minimum 6 chars.')
      .max(15, 'Password should not excced 15 chars.')
      .required('Password is required.')
      .matches(/[a-z]/, 'Must add one lowercase letter.')
      .matches(/[A-Z]/, 'Must add one UPPERCASE letter.')
      .matches(/\W/g, 'Must add one special symbol: @$! % * ? &.')
      .matches(/[0-9]/g, 'Must add one number.'),
  });

  const validationPhoneSchema = Yup.object().shape({
    mobile: Yup.string()
      .required('Phone number is required.')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Please enter a valid phone number.',
      ),
    phonePassword: Yup.string()
      .min(6, 'Password should be minimum 6 chars.')
      .max(15, 'Password should not excced 15 chars.')
      .required('Password is required.')
      .matches(/[a-z]/, 'Must add one lowercase letter.')
      .matches(/[A-Z]/, 'Must add one UPPERCASE letter.')
      .matches(/\W/g, 'Must add one special symbol: @$! % * ? &.')
      .matches(/[0-9]/g, 'Must add one number.'),
  });

  const onLoginWithEmailHandler = useCallback(props => {
    const data = {
      email: props.email,
      password: props.password,
      date_time: DateTimeFormatedData(new Date()),
      time_zone: TimeZone(new Date()),
      device_token: pushToken,
      device_type,
    };
    dispatch(userLoginRequest({data}));
  }, [pushToken, loginWIthPhone]);

  const onLoginWithMobileHandler = useCallback(props => {
    const data = {
      mobile: props.mobile,
      password: props.phonePassword,
      date_time: DateTimeFormatedData(new Date()),
      time_zone: TimeZone(new Date()),
      device_token: pushToken,
      device_type,
    };
    dispatch(userPhoneRequest({data, mobile: props.mobile}));
  }, [pushToken, loginWIthPhone]);

  const onForgetPasswordHandler = () => {
    navigation.navigate(NAVIGATION_SCREENS.FORGOT_PASSWORD);
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={loginWIthPhone ? COLORS.white : COLORS.IconColor}
        barStyle={loginWIthPhone ? 'dark-content' : 'light-content'}
      />

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.bgImage}>
          <View style={styles.topView} />
          {loginWIthPhone === false ? (
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onLoginWithEmailHandler}>
              {({
                values,
                handleChange,
                errors,
                touched,
                handleSubmit,
                handleBlur,
              }) => (
                <View style={styles.mainView}>
                  <ScrollView>
                  <Pressable
                    onPress={onSignupHandler}
                    style={styles.bottomView}>
                    <Text style={styles.titleInstruction}>
                      Don’t have an account ?{' '}
                    </Text>
                    <Row>
                    <Arrow width={sizeToDp(WIDTH.w30)} height={HEIGHT.h18} />
                      <Text style={styles.signUpText}> SIGN UP Here</Text>
                    </Row>
                  </Pressable>
                  <Text style={styles.haveAccount}>
                      Already have an account, Login below
                    </Text>
                  <Text style={styles.loginText}>Login</Text>
                  <CustomTextInput
                    label={'Email Address '}
                    leftIcon={
                      <Mail
                        fill={COLORS.IconColor}
                        height={sizeToDp(HEIGHT.h22)}
                        width={sizeToDp(HEIGHT.h22)}
                        style={styles.mailIcon}
                      />
                    }
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <ErrorText value={errors.email} />
                  )}
                  <CustomTextInput
                    label={'Password '}
                    leftIcon={
                      <PasswordLogo
                        height={sizeToDp(HEIGHT.h22)}
                        width={sizeToDp(HEIGHT.h22)}
                        fill={COLORS.IconColor}
                      />
                    }
                     onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    isPassword
                    showPassword={
                      <View style={styles.passwordLogo}>
                        <Show
                          height={sizeToDp(HEIGHT.h22)}
                          width={sizeToDp(HEIGHT.h22)}
                        />
                      </View>
                    }
                    hidePassword={
                      <View style={styles.passwordLogo}>
                        <Hide
                          height={sizeToDp(HEIGHT.h22)}
                          width={sizeToDp(HEIGHT.h22)}
                        />
                      </View>
                    }
                  />
                  {touched.password && errors.password && (
                    <ErrorText value={errors.password} />
                  )}
                  <Button
                    size={'large'}
                    text={'Login'}
                    onPress={handleSubmit}
                  />
                  <Pressable
                    onPress={onForgetPasswordHandler}
                    style={styles.forgetPasswordTextView}>
                    <Text style={styles.forgetPasswordText}>
                      Forgot Password ?
                    </Text>
                  </Pressable>
                  <Row style={styles.optionalView}>
                    <View style={styles.borderBox} />
                    <Text style={styles.or}>or</Text>
                    <View style={styles.borderBox} />
                  </Row>

                  <Button
                    size={'large'}
                    text={'Login via Phone'}
                    textColor={'black'}
                    style={styles.loginWithPhoneView}
                    buttonTextStyle={styles.buttonTextStyle}
                    onPress={onExpand}
                    icon={
                      <PhoneLogo
                        height={sizeToDp(HEIGHT.h20)}
                        width={sizeToDp(HEIGHT.h20)}
                        fill={COLORS.tranparent}
                        style={styles.phoneLogo}
                      />
                    }
                  />
                </ScrollView>
                </View>
              )}
            </Formik>
          ) : (
            <View style={styles.loginWithPhone}>
              <Header
                icon={
                  <BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />
                }
                title="Login"
                onBackIconPress={onExpand}
              />
              <Formik
                initialValues={{
                  mobile: '',
                  phonePassword: '',
                }}
                validationSchema={validationPhoneSchema}
                onSubmit={onLoginWithMobileHandler}>
                {({
                  values,
                  handleChange,
                  errors,
                  touched,
                  handleSubmit,
                  handleBlur,
                }) => (
                  <View style={styles.mainView}>
                    <CustomTextInput
                      label={'Mobile'}
                      leftIcon={
                        <PhoneLogo 
                          fill={COLORS.IconColor}
                          height={sizeToDp(HEIGHT.h22)}
                          width={sizeToDp(HEIGHT.h22)}
                          style={styles.mailIcon}
                        />
                      }
                      keyboardType="number-pad"
                      maxLength={15}
                      onChangeText={handleChange('mobile')}
                      onBlur={handleBlur('mobile')}
                      value={values.mobile}
                    />
                    {touched.mobile && errors.mobile && (
                      <ErrorText value={errors.mobile} />
                    )}

                    <CustomTextInput
                      label={'Password '}
                      leftIcon={
                        <PasswordLogo
                          height={sizeToDp(HEIGHT.h22)}
                          width={sizeToDp(HEIGHT.h22)}
                          fill={COLORS.IconColor}
                        />
                      }
                      isPassword
                      showPassword={
                        <View style={styles.passwordLogo}>
                          <Show
                            height={sizeToDp(HEIGHT.h22)}
                            width={sizeToDp(HEIGHT.h22)}
                          />
                        </View>
                      }
                      hidePassword={
                        <View style={styles.passwordLogo}>
                          <Hide
                            height={sizeToDp(HEIGHT.h22)}
                            width={sizeToDp(HEIGHT.h22)}
                          />
                        </View>
                      }
                      onChangeText={handleChange('phonePassword')}
                      onBlur={handleBlur('phonePassword')}
                      value={values.phonePassword}
                    />
                    {touched.phonePassword && errors.phonePassword && (
                      <ErrorText value={errors.phonePassword} />
                    )}
                    <Button
                      size={'large'}
                      text={'Login'}
                      onPress={handleSubmit}
                    />
                    <Pressable
                      onPress={onForgetPasswordHandler}
                      style={styles.forgetPasswordTextView}>
                      <Text style={styles.forgetPasswordText}>
                        Forgot Password ?
                      </Text>
                    </Pressable>
                  </View>
                )}
              </Formik>
              <View style={styles.phoneBottomView}>
                <Pressable onPress={onSignupHandler} style={styles.bottomView}>
                  <Text style={styles.titleInstruction}>
                    Don’t have an account ?{' '}
                  </Text>
                  <Row>
                    <Text style={styles.signUpText}> Sign up</Text>
                    <Arrow
                      width={sizeToDp(WIDTH.w30)}
                      height={HEIGHT.h18}
                      style={styles.arrow}
                    />
                  </Row>
                </Pressable>
              </View>
            </View>
          )}
        </ImageBackground>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;