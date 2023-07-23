import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING} from '@utils/constant';
import { APP_FONTS } from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SPACING.sw15,
  },
  crossIcon: {
    position: 'absolute',
    right: SPACING.sh05,
    top: SPACING.sh1,
    padding: SPACING.sh15,
  },
  boomIcon: {
    marginTop:HEIGHT.h24
  },
  congTextStyle: {
    color: COLORS.green,
    fontSize: FONTS.f36,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  titleStyle: {
    color: COLORS.black,
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    marginHorizontal: SPACING.sh15,
  },
});
