import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {APP_FONTS} from '@utils/fonts';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  imageView: {
    position: 'absolute',
    alignSelf: 'center',
    top: HEIGHT.h55,
    zIndex: 999,
  },
  editProfileButton: {
    alignSelf: 'center',
    borderWidth: SPACING.sh05,
    paddingHorizontal: SPACING.sh8,
    borderRadius: SPACING.sh15,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    borderColor: COLORS.primary,
    marginTop: SPACING.sh6,
    paddingTop: SPACING.sh4,
    paddingBottom: SPACING.sh2,
  },
  topView: {
    flex: 0.2,
    backgroundColor: COLORS.IconColor,
  },
  userDetailBox: {
    flex: 0.8,
    justifyContent: 'center',
    paddingHorizontal: SPACING.sw15,
  },
  editButtonText: {
    color: COLORS.primary,
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    lineHeight: FONTS.f18
  },
  editButtonTextWarning: {
    color: COLORS.red,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    lineHeight: FONTS.f18,
    paddingTop: SPACING.sh6,
  },
  infoHeading: {
    color: COLORS.textInputHeading,
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
  },
  inBidderHeading: {
    color: COLORS.blackTitle,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  detailHeading: {
    color: COLORS.blackTitle,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  borderBottom: {
    height: SPACING.sh05,
    backgroundColor: COLORS.borderSolid,
    marginVertical: SPACING.sh8,
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SPACING.sw15,
    paddingTop: SPACING.sh6,
  },
  userLogo: {
    height: HEIGHT.h144,
    width: HEIGHT.h144,
    borderRadius: HEIGHT.h144 / 2,
  },
  userLogoFull: {
    height: HEIGHT.h300,
    width: HEIGHT.h300,
    alignSelf: 'center',
    marginTop: HEIGHT.h20,
  },
  crossIcon: {
    position: 'absolute',
    right: SPACING.sh05,
    height: 180,
    width: 40,

    top: SPACING.sh8,
    backgroundColor: COLORS.tranparent,
    alignItems: 'center',
  },
  modalHeading: {
    textAlign: 'center',
    marginTop: SPACING.sh6,
    marginBottom: SPACING.sh8,
    fontSize: FONTS.f29,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  modelText: {
    marginVertical: SPACING.sh4,
    paddingVertical: SPACING.sh8,
    alignItems: 'center',
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.lightBlue,
    marginHorizontal: WIDTH.w50,
  },
  cancelModelText: {
    marginVertical: SPACING.sh4,
    paddingVertical: SPACING.sh8,
    alignItems: 'center',
    marginHorizontal: WIDTH.w50,
  },
  warningText: {
    color: COLORS.warning,
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
});
