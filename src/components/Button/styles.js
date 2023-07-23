import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {WIDTH, HEIGHT, SPACING, FONTS} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  small: {
    width: WIDTH.w150,
    height: HEIGHT.h40,
    borderRadius: SPACING.sh4,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.sh6,
  },
  medium: {
    width: WIDTH.w155,
    height: HEIGHT.h36,
    borderRadius: SPACING.sh4,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  large: {
    height: HEIGHT.h45,
    borderRadius: SPACING.sh4,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    marginVertical: SPACING.sh15,
    justifyContent: 'center',
    width: '100%',
  },
  smallText: {
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.white,
    lineHeight: FONTS.f18,
  },
  mediumText: {
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.white,
    lineHeight: FONTS.f18,
  },
  largeText: {
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.white,
    lineHeight: FONTS.f20,
  },
});
