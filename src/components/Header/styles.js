import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEIGHT.h70,
    paddingHorizontal: SPACING.sw15,
    backgroundColor: COLORS.IconColor,
  },
  simpleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEIGHT.h45,
    paddingHorizontal: SPACING.sw15,
    backgroundColor: COLORS.secondary,
    borderBottomWidth: SPACING.sh1 - SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
  },
  leftSideView: {
    width: '12%',
    paddingVertical: SPACING.sh6,
  },
  centerView: {
    width: '75%',
    textAlign: 'center',
    color: COLORS.blackTitle,
    fontSize: FONTS.f23,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  rightSideView: {
    width: '12%',
    alignItems: 'flex-end',
  },
  searchBox: {
    width: '75%',
    textAlign: 'center',
    backgroundColor: COLORS.white,
    // borderWidth: 1,
    borderRadius: SPACING.sh6,
    overflow: 'hidden',
    paddingHorizontal: SPACING.sh10,
    paddingVertical: SPACING.sh2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '85%',
    marginLeft: SPACING.sw10,
    flexDirection: 'row',
    alignItems: 'center',
    height: HEIGHT.h40,
  },
  searchIcon: {
    position: 'absolute',
    right: SPACING.sh4,
    paddingVertical: SPACING.sh6,
    paddingHorizontal: SPACING.sh10,
  },
  textInputStyle: {
    color: COLORS.primaryBlack,
    fontSize: FONTS.f15,
    alignSelf: 'center',
    width: '95%',
    paddingVertical: SPACING.sh6,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
  },
});
