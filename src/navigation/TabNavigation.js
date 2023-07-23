import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import AuctionScreen from '@screens/AuctionScreen';
import LiveAuction from '@screens/LiveAuction';
import {COLORS} from '@utils/colors';
import LiveAuctionIcon from '@assets/LiveAuction.svg';
import Auctions from '@assets/Auctions.svg';
import Home from '@assets/HomeScreenIcon.svg';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {useSelector} from 'react-redux';
import {APP_FONTS} from '@utils/fonts';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const liveAuctionReq = useSelector(
    state => state?.auctionReducers?.upcomingAuctions[0],
  );
  const tabView = useSelector(state => state?.FilterReducer?.TabData);

  const getTabBarVisibility = route => {
    if (tabView === true) {
      return 'none';
    }
    return 'flex';
  };

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      backBehavior="none"
      shifting={true}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          paddingBottom: 0,
          display: getTabBarVisibility(),
          height: HEIGHT.h70
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 0,
        },
      }}>
      <Tab.Screen
        component={HomeScreen}
        name={'Home'}
        options={({route}) => ({
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.activeTab}>
                <Home
                  fill={COLORS.primary}
                  height={HEIGHT.h23}
                  width={HEIGHT.h23}
                  style={styles.iconStyle}
                />
                <Text style={styles.activelabel}>Home</Text>
              </View>
            ) : (
              <View style={styles.inActiveTab}>
                <Home
                  fill={COLORS.black}
                  height={HEIGHT.h23}
                  width={HEIGHT.h23}
                  style={styles.iconStyle}
                />
                <Text style={styles.inActivelabel}>Home</Text>
              </View>
            ),
        })}
      />
      <Tab.Screen
        name="My Auctions"
        component={AuctionScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.activeTab}>
                <Auctions
                  fill={COLORS.primary}
                  height={HEIGHT.h23}
                  width={HEIGHT.h23}
                  style={styles.iconStyle}
                />
                <Text style={styles.activelabel}>My Auctions</Text>
              </View>
            ) : (
              <View style={styles.inActiveTab}>
                <Auctions
                  fill={COLORS.black}
                  height={HEIGHT.h23}
                  width={HEIGHT.h23}
                  style={styles.iconStyle}
                />
                <Text style={styles.inActivelabel}>My Auctions</Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Live Auction"
        component={LiveAuction}
        initialParams={liveAuctionReq}
        options={({route}) => ({
          tabBarLabel: () => {
            return null;
          },
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.activeTab}>
                <LiveAuctionIcon
                  fill={COLORS.primary}
                  height={HEIGHT.h23}
                  width={HEIGHT.h23}
                  style={styles.iconStyle}
                />
                <Text style={styles.activelabel}>Live Auction</Text>
              </View>
            ) : (
              <View style={styles.inActiveTab}>
                <LiveAuctionIcon
                  fill={COLORS.black}
                  height={HEIGHT.h23}
                  width={HEIGHT.h23}
                  style={styles.iconStyle}
                />
                <Text style={styles.inActivelabel}>Live Auction</Text>
              </View>
            ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    borderTopWidth: SPACING.sh2,
    alignItems: 'center',
    borderTopColor: COLORS.primary,
    width: WIDTH.w0 / 3,
    position: 'absolute',
    top: 0,
    
  },
  iconStyle: {
  marginTop: SPACING.sh6
  },
  inActiveTab: {
    alignItems: 'center',
    width: WIDTH.w0 / 3,
    position: 'absolute',
    top: 0,
  },
  activelabel: {
    color: COLORS.primary,
    marginVertical: SPACING.sh05,
    fontSize: FONTS.f15,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  inActivelabel: {
    marginVertical: SPACING.sh05,
    fontSize: FONTS.f15,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
});
export default TabNavigation;
