import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  notificationView: {
    backgroundColor: COLORS.tranparent,
    marginVertical: SPACING.sh6,
    paddingVertical: SPACING.sh10,
    paddingHorizontal: SPACING.sw15,
    borderBottomWidth: 0.8,
    borderTopColor: COLORS.borderSolid,
    alignItems: 'flex-start',
  },
  readNotificationView: {
    backgroundColor: COLORS.extraLightBlue,
    marginVertical: SPACING.sh6,
    paddingVertical: SPACING.sh10,
    paddingHorizontal: SPACING.sw15,
    borderBottomWidth: 0.8,
    borderTopColor: COLORS.borderSolid,
    alignItems: 'flex-start',
  },
  iconView: {
    width: '23%',
  },
  main: {
    width: '55%',
  },
  timeView: {
    width: '22%',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  timeDetail: {
    color: COLORS.black,
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  auctionDate: {
    color: COLORS.black_10,
    marginRight: SPACING.sh4,
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  discriptionText: {
    color: COLORS.black,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  eventIcon: {
    height: HEIGHT.h70,
    width: HEIGHT.h70,
    borderRadius: HEIGHT.h70 / 2,
    marginRight: SPACING.sw15,
  },
  acceptedButton: {
    marginVertical: SPACING.sh4,
    backgroundColor: COLORS.green,
    width: '60%',
    paddingHorizontal: SPACING.sh15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: SPACING.sh1,
    paddingBottom: SPACING.sh4,
    borderRadius: SPACING.sh20,
  },
  acceptAuctionByttonView: {
    paddingVertical: SPACING.sh6
  },
  button: {
    backgroundColor: COLORS.primary,
    width: '50%',
    paddingHorizontal: SPACING.sh20,
    justifyContent: 'center',
    alignItems: 'center',
   paddingVertical: SPACING.sh4,
    borderRadius: SPACING.sh20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    lineHeight: FONTS.f16
  },
  alertBox: {
    padding: SPACING.sh15,
  },
  alertBoxText: {
    color: COLORS.black_10,
    fontSize: FONTS.f23,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    textAlign: 'center',
    marginBottom: SPACING.sh15,
  },
  joinedAuctionName: {
    color: COLORS.green,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  cancelbutton: {
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