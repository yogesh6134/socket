import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  contentContainer: {
    flexGrow: 0.9,
    paddingHorizontal: SPACING.sw15,
    paddingVertical: SPACING.sh30,
  },
  heading: {
    width: WIDTH.w200,
    alignSelf: 'center',
    marginVertical: SPACING.sh10,
  },
  instructions: {
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    fontSize: FONTS.f16,
    color: COLORS.black,
    textAlign: 'center',
  },
  BottomBackContent: {
    justifyContent: 'center',
  },
  loginWithPhoneBoxView: {
    alignSelf: 'center',
    width: '98%',
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    marginBottom: HEIGHT.h20,
  },
  mailIcon: {
    marginTop: SPACING.sh2,
  },
  optionalView: {
    justifyContent: 'space-between',
    width: '99%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  borderBox: {
    height: SPACING.sh1,
    backgroundColor: COLORS.borderSolid,
    width: '43%',
    marginTop: SPACING.sh6,
  },
  optionaText: {
    width: '14%',
    textAlign: 'center',
    fontSize: FONTS.f15,
    color: COLORS.black,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  backButtonText: {
    color: COLORS.primary,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  loginWithPhoneView: {
    backgroundColor: COLORS.lightBlue,
  },
  buttonTextStyle: {
    fontSize: FONTS.f18,
    color: COLORS.secondaryBlack,
    lineHeight: FONTS.f18,
    marginLeft: SPACING.sh4,
  },
  arrow: {
    marginRight: SPACING.sw10,
    transform: [{rotate: '180deg'}],
  },
});
