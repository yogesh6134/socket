import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  loginWithPhoneBoxView: {
    alignSelf: 'center',
    width: '100%',
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    marginBottom: HEIGHT.h15,
    height: HEIGHT.h60,
    backgroundColor: COLORS.tranparent,
  },
  textinputStyle: {
    color: COLORS.black_10,
    fontSize: FONTS.f23,
    height: HEIGHT.h60,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  textContainerStyle: {
    backgroundColor: COLORS.tranparent,
  },
  codeText: {
    color: COLORS.black_10,
    fontSize: FONTS.f23,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
});
