import {COLORS} from '@utils/colors';
import {FONTS, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  main: {
    paddingHorizontal: SPACING.sw20,
  },
  refIconStyle: {
    alignSelf: 'center',
    marginBottom: SPACING.sh10,
  },
  instructions: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: SPACING.sh15,
  },
  instructionText: {
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    color: COLORS.black,
    alignItems: 'center',
  },
  refLinkTitle: {
    marginTop: SPACING.sh10,
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  ClipBoardView: {
    borderWidth: SPACING.sh05,
    paddingHorizontal: SPACING.sh10,
    paddingVertical: SPACING.sh8,
    borderRadius: SPACING.sh10,
    marginTop: SPACING.sh6,
  },

  copyText: {
    color: COLORS.white,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  button: {
    marginBottom: SPACING.sh2,
  },
  termAndConditionText: {
    color: COLORS.black,
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    textAlign: 'center',
  },
});
