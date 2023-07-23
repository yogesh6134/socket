import {COLORS} from '@utils/colors';
import {FONTS, SPACING} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  boxView: {
    paddingHorizontal: SPACING.sw20,
    borderBottomWidth: 1,
    paddingVertical: SPACING.sh15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    marginLeft: SPACING.sw10,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
});
