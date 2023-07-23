import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: HEIGHT.h0,
    flex: 1,
    backgroundColor: COLORS.Secondary_Background,
    paddingTop: HEIGHT.h0 / 4.5,
  },
  icon: {
    height: HEIGHT.h200,
    width: HEIGHT.h200,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HEIGHT.h200 / 2,
  },
  heading: {
    marginTop: SPACING.sh15,
    marginBottom: SPACING.sh6,
    width: WIDTH.w200,
    textAlign: 'center',
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  title: {
    width: WIDTH.w200,
    textAlign: 'center',
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    color: COLORS.black,
  },
  button: {
    width: WIDTH.w200,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center'
  }
});
