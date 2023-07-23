import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputBox: {
    backgroundColor: COLORS.tranparent,
    marginBottom: SPACING.sh8,
    height: HEIGHT.h60,
    paddingHorizontal: SPACING.sh6,
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customLabelStyles: {
    colorFocused: COLORS.IconColor,
    fontSizeFocused: FONTS.f12,
    fontSizeBlurred: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  labelStyles: {
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  inputStyles: {
    color: COLORS.blackTitle,
    paddingHorizontal: SPACING.sw10,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
});
