import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.tranparent,
    marginTop: SPACING.sh6,
    marginBottom: SPACING.sh20,
    width: WIDTH.w50,
    paddingVertical: SPACING.sh8
  },
  profileView: {
    paddingBottom: HEIGHT.h36,
    paddingHorizontal: SPACING.sw15,
    backgroundColor: COLORS.IconColor,
  },
  icon: {
    height: HEIGHT.h100,
    width: HEIGHT.h100,
    borderRadius: HEIGHT.h100 / 2,
    marginRight: SPACING.sw15,
  },
  userDetail: {
    width: '60%',
  },
  userNameText: {
    color: COLORS.white,
    fontSize: FONTS.f23,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  emailText: {
    color: COLORS.white,
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  totalBalence: {
    color: COLORS.secondary_yellow,
    fontSize: FONTS.f29,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  phoneLogo: {
    marginRight: SPACING.sh6,
  },
  titleView: {
    paddingHorizontal: SPACING.sw15,
    backgroundColor: COLORS.white,
  },
  titleDetailBox: {
    paddingVertical: SPACING.sh12,
    borderBottomWidth: SPACING.sh05,
    paddingRight: SPACING.sh12,
    borderBottomColor: COLORS.borderSolid,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleLogoutBox: {
    paddingVertical: SPACING.sh12,
    paddingRight: SPACING.sh12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
     width: HEIGHT.h55,
     alignItems: 'center',
  },
  instruction: {
    lineHeight: FONTS.f20,
    marginLeft: SPACING.sh4,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  bottomView: {
    paddingHorizontal: SPACING.sw15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: SPACING.sh10,
  },
  termsAndConditionView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sh6,
  },
  termsAndCondition: {
    color: COLORS.black_10,
    marginRight: SPACING.sw15,
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  dotIcon: {
    marginRight: SPACING.sh2,
    marginTop: SPACING.sh2,
  },
  alertBox: {
    padding: SPACING.sh15,
  },
  alertBoxText: {
    color: COLORS.black_10,
    fontSize: FONTS.f23,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    textAlign: 'center',
    marginBottom: SPACING.sh15,
  },
  button: {
    marginTop: SPACING.sh20,
    width: WIDTH.w120,
    backgroundColor: COLORS.lightBlue,
  },
  cancelButtonTextStyle: {
    color: COLORS.blackTitle,
  },
  activeButton: {
    marginTop: SPACING.sh20,
    width: WIDTH.w120,
  },
});
