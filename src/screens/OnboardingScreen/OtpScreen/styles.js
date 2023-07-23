import {StyleSheet} from 'react-native';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {COLORS} from '@utils/colors';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  main: {
    paddingHorizontal: SPACING.sw15,
  },
  topHeading: {
    width: WIDTH.w250,
    alignSelf: 'center',
    alignItems: 'center',
  },
  instruction: {
    fontSize: FONTS.f15,
    color: COLORS.black_10,
    textAlign: 'center',
    fontFamily: APP_FONTS.PlusJakartaSansSemiBold,
  },
  userContact: {fontFamily: APP_FONTS.PlusJakartaSansExtraBold},
  inputStyles: {
    height: HEIGHT.h60,
    width: WIDTH.w50,
    textAlign: 'center',
    borderBottomWidth: SPACING.sh2 - SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    fontSize: FONTS.f29,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.IconColor,
  },
  input: {
    marginTop: SPACING.sh6,
    marginBottom: SPACING.sh30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputContainerStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tranparent,
  },

  optText: {
    color: COLORS.black,
    fontSize: FONTS.f18,
  },

  defaultPin: {
    width: 0,
    height: 0,
  },
  button: {
    marginHorizontal: SPACING.sw15,
  },
  resendOtp: {
    color: COLORS.primary,
    alignSelf: 'center',
    padding: SPACING.sh2,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: COLORS.primary,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
});
