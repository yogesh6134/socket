import {Image, View, Pressable, Platform, Text} from 'react-native';
import React, {useState, useMemo, useRef, useEffect, useCallback} from 'react';
import styles from './styles';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import Verified from '@assets/joinedAuctionIcon.svg';
import {sizeToDp} from '@utils/';
import UserImage from '@components/UserImage';
import EditIcon from '@assets/editIcon.svg';
import CustomTextInput from '@components/TextInput';
import Button from '@components/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UserLogo from '@assets/userLogo.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {HEIGHT} from '@utils/constant';
import {COLORS} from '@utils/colors';
import CustomStatusBar from '@components/CustomStatusBar';
import Bottomsheet from '@components/BottomSheet';
import {useDispatch, useSelector} from 'react-redux';
import {
  editProfilePicRequest,
  editUserProfileRequest,
  userProfileRequest,
  verifyRequest,
} from './action';
import mime from 'mime';
import {DateTimeFormatedData} from '@utils/timeFormat';
import CustomAlert from '@components/AlertBox';
import Close from '@assets/close.svg';
import ErrorText from '@components/ErrorText';
import CountryPicker from '@components/CountryPicker';
import * as Yup from 'yup';
import {Formik} from 'formik';
import { useIsFocused } from '@react-navigation/native';
import { navigate } from '@utils/navigateTo';

const options = {
  saveToPhotos: true,
  includeBase64: true,
  maxWidth: 300,
  maxHeight: 300,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const RegisterProfile = ({navigation, route}) => {
  const detail = useSelector(state => state?.profileReducer?.profileData?.data);
  const isFocus = useIsFocused()
  const dispatch = useDispatch();
  const [profileEdit, setProfileEdit] = useState(false);
  const [imageResponse, setImageResponse] = useState();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['28%'], []);
  const [countryCode, setCountryCode] = useState();
  const [callingCode, setCallingCode] = useState();
  const [showProfilePic, setShowProfilePic] = useState(false);

  const phoneInput = useRef(null);

  useEffect(() => {
    checkUserCountry();
    return () => setCountryCode()
  }, [checkUserCountry, isFocus]);

  useEffect(()=> {
    dispatch(userProfileRequest());
  }, [isFocus])

  const {user_details, country_code, image, country_code_symbol  } = detail
  const {status, bidding_id, first_name, last_name, email, mobile, phone_verified_at } = user_details

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
    mobile: Yup.string()
      .required('Phone number is required!')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Please enter a valid phone number!',
      ),
  });

  const checkUserCountry = useCallback(() => {
       setCountryCode(country_code_symbol);
  }, [country_code]);


  const onExpand = () => {
    bottomSheetRef?.current?.expand();
  };

  const onClose = () => {
    bottomSheetRef.current?.close();
  };

  const onImageView = () => {
    setShowProfilePic(!showProfilePic);
  };
  const onPressCamera = ({type}) => {
    if (type === 'capture') {
      launchCamera(options, response => {
        onClose();
        if (response.didCancel) {
          return;
        } else {
          const formData = new FormData();
          const newImageUri =
            Platform.OS === 'android'
              ? response.assets[0].uri
              : response.assets[0].uri.replace('file://', '');
          const val = {
            uri: newImageUri,
            type: mime.getType(newImageUri),
            name: newImageUri.split('/').pop(),
          };
          formData.append('image_path', val);
          setImageResponse(response);
          dispatch(editProfilePicRequest(formData));
        }
      });
    } else {
      launchImageLibrary(options, response => {
        onClose();
        if (response.didCancel) {
          return;
        } else {
          const formData = new FormData();
          const newImageUri = `${response.assets[0].uri}`;
          const val = {
            name: newImageUri.split('/').pop(),
            type: mime.getType(newImageUri),
            uri: newImageUri,
          };
          formData.append('image_path', val);
          setImageResponse(response);
          dispatch(editProfilePicRequest(formData));
        }
      });
    }
  };

  const onVerifyPress = useCallback((props) => {
    const data = {
      mobile: props,
      date_time: DateTimeFormatedData(new Date()),
    };
    dispatch(verifyRequest({data}));
  }, []);

  const onEditProfileHandler = (props)=> {
    const countryCodeVal = callingCode ? '+'+callingCode : '+'+props.country_code ;
    const data = {
      first_name: props.first_name,
      last_name: props.last_name,
      country_code: countryCodeVal,
      country_code_symbol: countryCode,
      mobile: props.mobile,
      date_time: DateTimeFormatedData(new Date()),
    }
   dispatch(editUserProfileRequest({data}));
};

  const onBackPress = () => {
    if (profileEdit) {
      setProfileEdit(false);
    } else {
      navigation.goBack();
    }
  };

  const onEditProfile = () => {
    setProfileEdit(!profileEdit);
  };

  const onChangeNumberHandler = useCallback ((text)=> {
    setCountryCode(phoneInput.current?.getCountryCode())
    setCallingCode(phoneInput.current?.getCallingCode())
}, [phoneInput])

  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title={profileEdit ? 'Update Profile' : 'Profile'}
        onBackIconPress={onBackPress}
      />

      {!profileEdit ? (
        <View style={styles.container}>
          <View style={styles.topView} />
          <View style={styles.imageView}>
            <UserImage
              icon={
                !imageResponse?.assets && image ? (
                  <Image
                    source={{uri: image}}
                    style={styles.userLogo}
                    resizeMode="contain"
                  />
                ) : (
                  imageResponse?.assets.map(({uri}) => (
                    <Image
                      source={{uri: uri}}
                      style={styles.userLogo}
                      resizeMode="contain"
                    />
                  ))
                )
              }
              onPressImage={onImageView}
              editIcon={
                <EditIcon
                  height={sizeToDp(HEIGHT.h20)}
                  width={sizeToDp(HEIGHT.h20)}
                />
              }
              onEditImage={onExpand}
            />
            <Pressable onPress={onEditProfile} style={styles.editProfileButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </Pressable>
            {status === '2' &&  
            <Text style={styles.editButtonTextWarning}>Your Account has been Deactivated!</Text> }
          </View>
          <View style={styles.userDetailBox}>
            <Text style={styles.infoHeading}>Bidder Id</Text>
            <Text style={styles.inBidderHeading}>
              {bidding_id}
            </Text>
            <View style={styles.borderBottom} />
            <Text style={styles.infoHeading}>First Name</Text>
            <Text style={styles.detailHeading}>
              {first_name}
            </Text>
            <View style={styles.borderBottom} />
            <Text style={styles.infoHeading}>Last Name</Text>
            <Text style={styles.detailHeading}>
              {last_name}
            </Text>
            <View style={styles.borderBottom} />
            <Text style={styles.infoHeading}>Email Address</Text>
            <Text style={styles.detailHeading}>
              {email}
            </Text>
            <View style={styles.borderBottom} />
            <Text style={styles.infoHeading}>Phone</Text>

            <Text style={styles.detailHeading}>
              {mobile}
            </Text>

            <View style={styles.borderBottom} />
          </View>
        </View>
      ) : (
        <View style={styles.main}>
          <Formik
            initialValues={{
              first_name: first_name,
              last_name: last_name,
              country_code: country_code,
              mobile: mobile.toString(),
            }}
            validationSchema={validationSchema}
            onSubmit={onEditProfileHandler}>
            {({
              values,
              handleChange,
              errors,
              touched,
              handleSubmit,
              handleBlur,
            }) => (
              <KeyboardAwareScrollView style={styles.contentContainer}>
                <CustomTextInput
                  label={'First Name '}
                  onChangeText={handleChange('first_name')}
                  onBlur={handleBlur('first_name')}
                  value={values.first_name}
                  leftIcon={
                    <UserLogo
                      height={sizeToDp(HEIGHT.h22)}
                      width={sizeToDp(HEIGHT.h22)}
                      fill={COLORS.IconColor}
                    />
                  }
                />
                 {touched.first_name && errors.first_name &&  <ErrorText value={errors.first_name} /> }
                <CustomTextInput
                  label={'Last Name '}
                  onChangeText={handleChange('last_name')}
                  onBlur={handleBlur('last_name')}
                  value={values.last_name}
                  leftIcon={
                    <UserLogo
                      height={sizeToDp(HEIGHT.h22)}
                      width={sizeToDp(HEIGHT.h22)}
                      fill={COLORS.IconColor}
                    />
                  }
                />
                 {touched.last_name && errors.last_name &&  <ErrorText value={errors.last_name} /> }
                {phone_verified_at ? (
                  <ErrorText
                    icon={
                      <Verified
                        height={sizeToDp(HEIGHT.h36)}
                        width={sizeToDp(HEIGHT.h36)}
                      />
                    }
                    value={'Verified'}
                    warningText={[styles.warningText, {color: COLORS.green}]}
                  />
                ) : (
                  <ErrorText
                    value={'Please Verify Your Number!'}
                    warningText={styles.warningText}
                    onPressMsg={() => onVerifyPress(values.mobile)}
                  />
                )}
                <CountryPicker
                  ref={phoneInput}
                  defaultValue={values.mobile}
                  defaultCode={countryCode}
                  onChangeText={handleChange('mobile')}
                  onChangeFormattedText={onChangeNumberHandler}
                />
                  {touched.mobile && errors.mobile &&  <ErrorText value={errors.mobile} /> }
                <Button
                  size={'large'}
                  text={'Save Changes'}
                  // onPress={onEditProfileHandler}
                  onPress={handleSubmit}
                />
              </KeyboardAwareScrollView>
            )}
          </Formik>
        </View>
      )}

      <Bottomsheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}>
        <Text style={styles.modalHeading}>Select Image</Text>
        <View style={styles.modalTitle}>
          <Pressable
            onPress={() => onPressCamera({type: 'capture'})}
            style={styles.modelText}>
            <Text style={styles.detailHeading}>TakePhoto</Text>
          </Pressable>
          <Pressable
            onPress={() => onPressCamera({type: 'album'})}
            style={styles.modelText}>
            <Text style={styles.detailHeading}>Choose from library</Text>
          </Pressable>
          <Pressable onPress={onClose} style={styles.cancelModelText}>
            <Text style={styles.detailHeading}>Cancel</Text>
          </Pressable>
        </View>
      </Bottomsheet>

      <CustomAlert isVisibleModal={showProfilePic} backdropOpacity={0.9}>
        <Pressable onPress={onImageView} style={styles.crossIcon}>
          <Close />
        </Pressable>
        <Pressable onPress={onImageView}>
          <Image
            source={{uri: detail.image}}
            style={styles.userLogoFull}
            resizeMode="contain"
          />
        </Pressable>
      </CustomAlert>
    </View>
  );
};

export default RegisterProfile;
