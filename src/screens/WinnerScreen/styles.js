import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: 1,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    marginTop: HEIGHT.h55
  },
  imgStyle: {
    marginBottom: SPACING.sh15,
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
    marginHorizontal: SPACING.sh20,
    textAlign: 'center',
  },
  detailStyle: {
    color: COLORS.black,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    marginHorizontal: SPACING.sh20,
    marginTop: HEIGHT.h36, 
  },
  boldText: {
    fontFamily: APP_FONTS.PlusJakartaSansBold
  },
  activeText: {
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.IconColor
  }
});
