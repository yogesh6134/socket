import {FlatList, Image, Pressable, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import Row from '@components/Row';
import {COLORS} from '@utils/colors';
import Button from '@components/Button';
import Plus from '@assets/plus.svg';
import Dott from '@assets/dott.svg';
import {sizeToDp} from '@utils/';
import {HEIGHT} from '@utils/constant';
import Profile from '@assets/profile.svg';
import History from '@assets/history.svg';
import Help from '@assets/help.svg';
import Packages from '@assets/packages.svg'
import Setting from '@assets/setting.svg';
import BackIcon from '@assets/backIcon.svg';
import Share from '@assets/share.svg';
import Logout from '@assets/logout.svg';
import Next from '@assets/nextIcon.svg';
import Notifications from '@assets/notificationIcon.svg';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import CustomAlert from '@components/AlertBox';
import CustomStatusBar from '@components/CustomStatusBar';
import {logoutRequest} from './action';
import {useDispatch, useSelector} from 'react-redux';
import { userProfileRequest} from '@screens/ProfileScreen/action';
import {useIsFocused} from '@react-navigation/native';
import {Loader} from '@components/LoadingView';
import FastImage from 'react-native-fast-image';

const CustomDrawer = ({navigation}) => {
  const dispatch = useDispatch();

  const isFocused = useIsFocused();
  const [isLogout, setIsLogout] = useState(false);
  const data = useSelector(state => state?.profileReducer?.profileData?.data);

  const menuItems = [
    {
      name: 'Transaction History',
      icon: <History />,
      type: 'history',
    },
    {
      name: 'Settings',
      icon: <Setting />,
      type: 'setting',
    },
    {
      name: 'Profile',
      icon: <Profile />,
      type: 'profile',
    },
    {
      name: 'Notifications',
      icon: <Notifications />,
      type: 'notification',
    },
    {
      name: 'Referral & Earn',
      icon: <Share />,
      type: 'onShare',
    },
    {
      name: 'Help & Support',
      icon: <Help />,
      type: 'helpAndSupport',
    },
    {
      name: 'Packages',
      icon: <Packages  />,
      type: 'packages',
    },
    {
      name: 'Logout',
      icon: <Logout />,
      type: 'logout',
    },
  ];
  useEffect(() => {
    dispatch(userProfileRequest());
  }, [isFocused, dispatch]);

  const onPressHandler = useCallback(
    ({type}) => {
      switch (type) {
        case 'add Found':
          navigation.navigate(NAVIGATION_SCREENS.PACKAGES); 
          break;
        case 'history':
          navigation.navigate(NAVIGATION_SCREENS.TRANSACTIONHOSTORY);
          break;
        case 'setting':
          navigation.navigate(NAVIGATION_SCREENS.SETTING);
          break;
        case 'profile':
          navigation.navigate(NAVIGATION_SCREENS.PROFILE, {data});
          break;
        case 'notification':
          navigation.navigate(NAVIGATION_SCREENS.NOTIFICATION);
          break;
        case 'onShare':
          navigation.navigate(NAVIGATION_SCREENS.REFERALANDEARN);
          break;
        case 'helpAndSupport':
          navigation.navigate(NAVIGATION_SCREENS.HELPANDSUPPORT);
          break;
        case 'logout':
          onLogout();
          break;
        case 'Privacy Policy':
          navigation.navigate(NAVIGATION_SCREENS.WEB_VIEW, {type: type});
          break;
        case 'Terms & Conditions':
          navigation.navigate(NAVIGATION_SCREENS.WEB_VIEW, {type: type});
          break;
          case 'packages':
            navigation.navigate(NAVIGATION_SCREENS.PACKAGES);
            break;
        default:
          navigation.goBack();
          break;
      }
    },
    [navigation, data, onLogout],
  );

  const onLogout = useCallback(() => {
    setIsLogout(!isLogout);
  }, [isLogout]);

  const onLogoutSuccess = () => {
    setIsLogout(!isLogout);
    dispatch(logoutRequest());
  };

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View style={styles.titleView}>
          <Pressable
            style={
              menuItems.length - 1 === index
                ? styles.titleLogoutBox
                : styles.titleDetailBox
            }
            onPress={() => onPressHandler({type: item.type})}>
            <Row>
              <View style={styles.menuIcon}>
              {item.icon}
              </View>
              <Text style={styles.instruction}>{item.name}</Text>
            </Row>
            <Next />
          </Pressable>
        </View>
      );
    },
    [navigation, menuItems],
  );
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <CustomStatusBar
            backgroundColor={'#043173'}
            barStyle="light-content"
          />
          <View style={styles.profileView}>
            <Pressable style={styles.header} onPress={onPressHandler}>
              <BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.white} />
            </Pressable>
            <Row>
              <FastImage
                source={{uri: data?.image,
                  priority: FastImage.priority.fast,
                }}
                style={styles.icon}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={styles.userDetail}>
                <Text style={styles.userNameText}>
                  {data?.user_details?.first_name +
                    ' ' +
                    data?.user_details?.last_name}
                </Text>
                <Text style={styles.emailText}>
                  {data?.user_details?.email}
                </Text>
                <Text style={styles.totalBalence}> {data.view_currency} {data?.balance}</Text>
                <Button
                  size={'small'}
                  text={'Add Funds'}
                  onPress={() => onPressHandler({type: 'add Found'})}
                  style={styles.loginWithPhoneView}
                  buttonTextStyle={styles.buttonTextStyle}
                  icon={
                    <Plus
                      height={sizeToDp(HEIGHT.h15)}
                      width={sizeToDp(HEIGHT.h15)}
                      fill={COLORS.tranparent}
                      style={styles.phoneLogo}
                    />
                  }
                />
              </View>
            </Row>
          </View>

          <FlatList
            data={menuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
          <View style={styles.bottomView}>
            <Pressable
              onPress={() => onPressHandler({type: 'Privacy Policy'})}
              style={styles.termsAndConditionView}>
              <Dott style={styles.dotIcon} />
              <Text style={styles.termsAndCondition}>Privacy Policy</Text>
            </Pressable>
            <Pressable
              onPress={() => onPressHandler({type: 'Terms & Conditions'})}
              style={styles.termsAndConditionView}>
              <Dott style={styles.dotIcon} />
              <Text style={styles.termsAndCondition}>Terms & Conditions</Text>
            </Pressable>
          </View>
          <CustomAlert isVisibleModal={isLogout}>
            <View style={styles.alertBox}>
              <Text style={styles.alertBoxText}>
                Do you really want to logout?
              </Text>
              <Row spaces>
                <Button
                  size={'small'}
                  text={'Cancel'}
                  onPress={onLogout}
                  buttonTextStyle={styles.cancelButtonTextStyle}
                  style={styles.button}
                />
                <Button
                  size={'small'}
                  text={'Logout'}
                  onPress={onLogoutSuccess}
                  style={styles.activeButton}
                />
              </Row>
            </View>
          </CustomAlert>
        </View>
      )}
    </>
  );
};
export default CustomDrawer;
