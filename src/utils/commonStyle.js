import {StyleSheet} from 'react-native';
import {COLORS} from './colors';
import {APP_FONTS} from './fonts';
const {FONTS} = require('./constant');

export const commonStyle = StyleSheet.create({
  commonMediumText: {
    fontSize: FONTS.f18,
    color: COLORS.black,
    // fontFamily: APP_FONTS.CircularStdBook,
    lineHeight: 21,
    textAlign: 'center',
  },
  commonSmallText: {
    fontSize: FONTS.f15,
    color: COLORS.black,
    // fontFamily: APP_FONTS.CircularStdBook,
    lineHeight: 20,
    textAlign: 'center',
  },
  commonDecorationLintText: {
    fontSize: FONTS.f15,
    color: COLORS.black,
    // fontFamily: APP_FONTS.CircularStdBook,
    lineHeight: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  commonLargeHeading: {
    fontSize: FONTS.f29,
    // fontFamily: APP_FONTS.CircularStdMedium,
    color: COLORS.secondaryBlack,
  },
  centerText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  mainView: {
    flex: 0.9,
  },
});
