import {View, ScrollView} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import CustomTextInput from '@components/TextInput';
import Button from '@components/Button';
import {COLORS} from '@utils/colors';
import PasswordLogo from '@assets/passwordLogo.svg';
import Hide from '@assets/eye-off-sharp.svg';
import Show from '@assets/eye-on-sharp.svg';
import CustomStatusBar from '@components/CustomStatusBar';
import {HEIGHT} from '@utils/constant';
import {useDispatch, useSelector} from 'react-redux';
import {userChangePasswordRequest, userResetPasswordRequest} from './action';
import ErrorText from '@components/ErrorText';
import {DateTimeFormatedData} from '@utils/timeFormat';
import * as Yup from 'yup';
import {Formik} from 'formik';

const CreatePassword = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {userDetail} = useSelector(state => state?.otpReducer);

  const onBackIconPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password should be minimum 6 chars!')
      .max(15, 'Password should not excced 15 chars!')
      .required('Password is required!')
      .matches(/[a-z]/, 'Must add one lowercase letter')
      .matches(/[A-Z]/, 'Must add one UPPERCASE letter')
      .matches(/\W/g, 'Must add one special symbol: @$! % * ? &!')
      .matches(/[0-9]/g, 'Must add one number!'),
    confirm_password: Yup.string()
      .required('Passwords must match')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const onSubmittedData = useCallback(props => {
    if (route.params.data === 'Change Password') {
      const data = {
        date_time: DateTimeFormatedData(new Date()),
        current_password: props.current_password,
        new_password: props.password,
        confirm_password: props.confirm_password,
      };
      dispatch(userChangePasswordRequest({data, navigation}));
    } else {
      if (route.params.detail === 'email') {
        const data = {
          email: route.params.forgetEmail,
          date_time: DateTimeFormatedData(new Date()),
          type: 'email',
          password: props.password,
          confirm_password: props.confirm_password,
        };
        dispatch(userResetPasswordRequest({data, navigation}));
      } else {
        const data = {
          phone: route.params.phone,
          date_time: DateTimeFormatedData(new Date()),
          type: 'phone',
          password: props.password,
          confirm_password: props.confirm_password,
        };
        dispatch(userResetPasswordRequest({data, navigation}));
      }
    }
  }, []);
  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />

      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title={!route.params.data ? 'Enter New Password' : 'Change Password'}
        onBackIconPress={onBackIconPress}
      />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            current_password: '',
            password: '',
            confirm_password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmittedData}>
          {({
            values,
            handleChange,
            errors,
            touched,
            handleSubmit,
            handleBlur,
          }) => (
            <View style={styles.contentContainer}>
              <View style={styles.mainView}>
                {route.params.data && (
                  <CustomTextInput
                    label={'Current Password'}
                    leftIcon={
                      <PasswordLogo
                        height={sizeToDp(22)}
                        width={sizeToDp(22)}
                        fill={COLORS.IconColor}
                      />
                    }
                    onChangeText={handleChange('current_password')}
                    onBlur={handleBlur('current_password')}
                    value={values.current_password}
                    isPassword
                  />
                )}
                {touched.current_password && errors.current_password && (
                  <ErrorText value={errors.current_password} />
                )}
                <CustomTextInput
                  label={'New Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  leftIcon={
                    <PasswordLogo
                      height={sizeToDp(22)}
                      width={sizeToDp(22)}
                      fill={COLORS.IconColor}
                    />
                  }
                  isPassword
                  showPassword={
                    <View style={styles.passwordLogo}>
                      <Show height={sizeToDp(22)} width={sizeToDp(22)} />
                    </View>
                  }
                  hidePassword={
                    <View style={styles.passwordLogo}>
                      <Hide height={sizeToDp(22)} width={sizeToDp(22)} />
                    </View>
                  }
                />
                {touched.password && errors.password && (
                  <ErrorText value={errors.password} />
                )}
                <CustomTextInput
                  label={'Confirm Password'}
                  onChangeText={handleChange('confirm_password')}
                  onBlur={handleBlur('confirm_password')}
                  value={values.confirm_password}
                  leftIcon={
                    <PasswordLogo
                      height={sizeToDp(22)}
                      width={sizeToDp(22)}
                      fill={COLORS.IconColor}
                    />
                  }
                  isPassword
                  showPassword={
                    <View style={styles.passwordLogo}>
                      <Show height={sizeToDp(22)} width={sizeToDp(22)} />
                    </View>
                  }
                  hidePassword={
                    <View style={styles.passwordLogo}>
                      <Hide height={sizeToDp(22)} width={sizeToDp(22)} />
                    </View>
                  }
                />
                {touched.confirm_password && errors.confirm_password && (
                  <ErrorText value={errors.confirm_password} />
                )}
              </View>
              <Button size={'large'} text={'Submit'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default CreatePassword;
