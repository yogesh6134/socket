import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  outerBox: {
    paddingVertical: SPACING.sh6,
    backgroundColor: '#EC7B7B',
    justifyContent: 'center',
    marginHorizontal: HEIGHT.h15,
    marginVertical:SPACING.sh8,
    borderRadius:  HEIGHT.h15,
  },
  innerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEIGHT.h100,
    backgroundColor: COLORS.lightYellow,
    marginLeft: WIDTH.w30,
    marginRight: WIDTH.w30,
    marginBottom: WIDTH.w30,
    borderRadius: HEIGHT.h10,
  },
  nameView: {
    fontFamily: APP_FONTS.PlusJakartaSansExtraBold,
    fontSize: FONTS.f23,
    color: COLORS.white,
    marginLeft: WIDTH.w30,
  },
  recomendedText: {
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    fontSize: FONTS.f18,
    color: COLORS.yellow,
    marginRight: WIDTH.w30,
  },
  tokenView: {
    width: '30%',
    height: HEIGHT.h60,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  valueLeft: {
    fontSize: FONTS.f40,
    fontFamily: APP_FONTS.PlusJakartaSansSemiBold,
    color: COLORS.black,
  },
  superScript: {
    fontSize: FONTS.f29,
    fontFamily: APP_FONTS.PlusJakartaSansSemiBold,
    color: COLORS.black,
    lineHeight: FONTS.f29,
  },
  value: {
    fontSize: FONTS.f29,
    fontFamily: APP_FONTS.PlusJakartaSansSemiBold,
    color: COLORS.black,
    height: HEIGHT.h40,
  },
  valuePerY: {
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
    height: HEIGHT.h40,
  },
  innerView: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: HEIGHT.h100,
    borderTopEndRadius: WIDTH.w20,
    borderBottomEndRadius: WIDTH.w20,
  },
  divider: {
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    width: '75%',
    marginVertical: SPACING.sh2,
  },
  imageView: {
    position: 'absolute',
    right: SPACING.sh10,
    backgroundColor: COLORS.green,
    height: HEIGHT.h40,
    width: HEIGHT.h40,
    borderRadius: HEIGHT.h40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSub: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
