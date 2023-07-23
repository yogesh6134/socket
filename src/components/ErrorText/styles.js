import {COLORS} from '@utils/colors';
import {FONTS, SPACING} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  errorText: {
    fontSize: FONTS.f15,
    color: COLORS.red,
    textAlign: 'right',
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    marginTop: -SPACING.sh4,
  },
  errorView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
