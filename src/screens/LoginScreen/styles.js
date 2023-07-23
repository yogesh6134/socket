import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: WIDTH.w0,
    height: HEIGHT.h0,
    justifyContent: 'space-between',
  },
  topView: {
    backgroundColor: COLORS.tranparent,
    flex: 0.4,
  },
  mainView: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.sw15,
    flex: 0.6,
    paddingTop: SPACING.sh10,
    borderTopLeftRadius: SPACING.sw20,
    borderTopRightRadius: SPACING.sw20,
  },
  loginText: {
    textAlign: 'center',
    fontSize: FONTS.f29,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.IconColor,
    marginBottom: SPACING.sh8,
    lineHeight: FONTS.f29
  },
  mailIcon: {
    marginTop: SPACING.sh2,
  },
  passwordLogo: {
    paddingVertical: SPACING.sh6,
    paddingHorizontal: SPACING.sh10,
  },
  loginWithPhone: {
    backgroundColor: COLORS.white,
    height: HEIGHT.h0,
  },
  forgetPasswordTextView: {
    alignSelf: 'flex-end',
    marginBottom: HEIGHT.h10,
  },
  forgetPasswordText: {
    fontSize: FONTS.f16,
    color: COLORS.black,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  buttonTextStyle: {
    fontSize: FONTS.f18,
    color: COLORS.secondaryBlack,
    lineHeight: FONTS.f18,
  },
  termsView: {
    width: WIDTH.w250,
    marginBottom: SPACING.sh15,
  },
  optionalView: {justifyContent: 'center'},
  borderBox: {
    height: SPACING.sh1,
    backgroundColor: COLORS.borderSolid,
    width: WIDTH.w50,
    marginHorizontal: SPACING.sh10,
  },
  loginWithPhoneView: {
    backgroundColor: COLORS.lightBlue,
    marginBottom: HEIGHT.h20,
  },
  bottomView: {
    marginVertical: SPACING.sh15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.sh8,
    backgroundColor: COLORS.lightBlue,
    borderRadius: SPACING.sh10
    
  },
  signUpText: {
    color: COLORS.primary,
    marginRight: SPACING.sh6,
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    lineHeight: FONTS.f18
  },
  phoneLogo: {
    marginRight: SPACING.sh6,
  },
  countryCodeView: {
    width: '42%',
    backgroundColor: COLORS.tranparent,
    marginVertical: SPACING.sh6,
    height: HEIGHT.h55,
    paddingHorizontal: SPACING.sh6,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSolid,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  phonNumberTextInput: {
    width: '55%',
  },
  otpButton: {
    marginBottom: SPACING.sh05,
  },
  dropDownArrow: {
    marginLeft: SPACING.sh10,
    marginTop: SPACING.sh2,
  },
  phoneBottomView: {
    paddingBottom: HEIGHT.h36,
    justifyContent: 'flex-end',
  },
  titleInstruction: {
    color: COLORS.black,
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    lineHeight: FONTS.f18
  },
  or: {
    color: COLORS.black,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    lineHeight: FONTS.f16
  },
  haveAccount: {
    color: COLORS.black,
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    lineHeight: FONTS.f18,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sh15,
  }
});
