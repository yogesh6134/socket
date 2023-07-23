import {sizeToDp} from '@utils/';
import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  text: {
    color: COLORS.darkText,
  },
  auctionDetail: {
    marginTop: SPACING.sh4,
    marginHorizontal: SPACING.sh10,
    paddingHorizontal: SPACING.sh10,
    paddingVertical: SPACING.sh10,
    backgroundColor: COLORS.white,
    elevation: 4,
    borderRadius: SPACING.sh6,
    shadowOffset: {width: 1, height: 4},
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  auctionDetailLastIndex: {
    marginTop: SPACING.sh4,
    marginBottom: HEIGHT.h20,
    marginHorizontal: SPACING.sh10,
    paddingHorizontal: SPACING.sh10,
    paddingVertical: SPACING.sh10,
    backgroundColor: COLORS.white,
    elevation: 4,
    borderRadius: SPACING.sh6,
    shadowOffset: {width: 1, height: 4},
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  inSideBoxStyle: {
    alignItems: 'flex-start',
  },
  auctionLogoDesign: {
    width: '22%',
  },
  AuctionLogo: {
    height: sizeToDp(HEIGHT.h60),
    width: sizeToDp(HEIGHT.h60),
    borderRadius: HEIGHT.h60 / 2,
  },
  auctionTitle: {
    width: '78%',
  },
  timeView: {
    height: HEIGHT.h24,
  },
  dateView: {
    height: HEIGHT.h24,
    justifyContent: 'center',
  },
  auctionPrice: {
    width: '40%',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
  },
  button: {
    marginTop: SPACING.sh8,
  },

  auctionName: {
    color: COLORS.IconColor,
    alignItems: 'flex-start',
    lineHeight: FONTS.f20,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  productName: {
    marginRight: SPACING.sh6,
    color: COLORS.darkGray,
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  crossIcon: {
    position: 'absolute',
    right: SPACING.sh15,
    top: -SPACING.sh6,
    padding: SPACING.sh6,
  },
  alertTitle: {
    textAlign: 'center',
    color: COLORS.black,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    marginBottom: SPACING.sh10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: HEIGHT.h90,
  },
  timeFormatStyle: {
    alignSelf: 'flex-start',
  },
  digitStyle: {
    width: HEIGHT.h23,
    alignItems: 'flex-start',
  },
  priceText: {
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  auctionStartTime: {
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
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
  timeOutText: {
    color: COLORS.red,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    fontSize: FONTS.f20,
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
