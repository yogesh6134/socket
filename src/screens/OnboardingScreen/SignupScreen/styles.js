import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: SPACING.sw15,
    paddingBottom: SPACING.sh150,
    paddingTop: SPACING.sh20,
  },
  mailIcon: {
    marginTop: SPACING.sh2,
  },
  checkBox: {
    marginRight: SPACING.sh6,
  },
  passwordLogo: {
    paddingVertical: SPACING.sh6,
    paddingHorizontal: SPACING.sh10,
  },
  termsView: {
    width: WIDTH.w250,
    marginBottom: SPACING.sh15,
    alignSelf: 'center',
    alignItems: 'center',
  },
  instructionTitle: {
    fontSize: FONTS.f15,
    color: COLORS.black,
  },
  signInInstruction: {
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  activeFont: {
    color: COLORS.primary,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  bottomView: {
    alignSelf: 'center',
    marginTop: HEIGHT.h80,
    flexDirection: 'row',
  },
  bottomButtonView: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: SPACING.sh10,
    marginTop: SPACING.sh6,
  },
});
