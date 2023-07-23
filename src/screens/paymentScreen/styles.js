import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    alignItems: 'center',
    marginTop: HEIGHT.h55,
  },
  hiighlitedText: {
    color: COLORS.IconColor,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    fontSize: FONTS.f18,
    marginBottom: HEIGHT.h10
  },
  headingText: {
    fontSize: FONTS.f23,
    color: COLORS.IconColor,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    marginBottom: HEIGHT.h10
  },
  instruction: {
    fontSize: FONTS.f14,
    color: COLORS.black,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
  },
  input: {
    color: COLORS.black,
    fontSize: FONTS.f62,
    fontFamily: APP_FONTS.PlusJakartaSansExtraBold,
    marginBottom: HEIGHT.h10
  },
  confirmButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: HEIGHT.h20,
  },
  disabledconfirmButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: HEIGHT.h20,
    opacity: 0.3
  },
  warningMessage: {
     color: COLORS.red,
     textAlign: 'center',
     fontSize: FONTS.f16,
     fontFamily: APP_FONTS.PlusJakartaSansBold,
    }
});
