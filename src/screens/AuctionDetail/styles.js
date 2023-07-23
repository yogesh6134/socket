import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {WIDTH, SPACING, FONTS, HEIGHT} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topDetail: {
    flex: 0.87,
  },
  main: {
    marginHorizontal: SPACING.sw10,
  },
  blankImageView: {
    height: HEIGHT.h250,
    width: WIDTH.w0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  auctionIcons: {
    marginBottom: 30,
    alignItems: 'center',
  },
  icons: {
    height: WIDTH.w220,
    width: WIDTH.w220,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  title: {
    marginVertical: SPACING.sh8,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  topView: {
    borderWidth: SPACING.sh05,
    paddingTop: SPACING.sh15,
    paddingHorizontal: SPACING.sh30,
    borderColor: COLORS.borderSolid,
    borderRadius: SPACING.sh8,
    marginVertical: SPACING.sh10,
  },
  auctionName: {
    fontSize: FONTS.f23,
    color: COLORS.IconColor,
    textAlign: 'center',
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  timeDetail: {
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: SPACING.sh2,
    borderWidth: 1,
    width: 220,
    backgroundColor: 'red',
    padding: SPACING.sh6,
    borderRadius: SPACING.sh10,
  },
  auctionDetail: {
    borderBottomWidth: SPACING.sh05,
    paddingVertical: SPACING.sh12,
    borderBottomColor: COLORS.borderSolid,
  },
  auctionLastDetail: {
    paddingVertical: SPACING.sh12,
  },
  auctionDetailHeading: {
    color: COLORS.IconColor,
    width: '65%',
    fontSize: FONTS.f23,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },

  auctionTotalPrice: {
    color: COLORS.green,
    textAlign: 'center',
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansExtraBold,
   
  },
  auctionPrice: {
    color: COLORS.IconColor,
    textAlign: 'center',
  },
  auctionTitle: {
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
    fontSize: FONTS.f16,
  },
  auctionDetailText: {
    width: WIDTH.w100,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    color: COLORS.black,
    fontSize: FONTS.f16,
  },
  auctionFeeChargedText: {
    width: WIDTH.w100,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    color: COLORS.red,
    fontSize: FONTS.f16,
  },
  auctionWinnerText: {
    width: WIDTH.w100,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.green,
    fontSize: FONTS.f16,
  },
  informationView: {
    marginVertical: SPACING.sh20,
    // paddingBottom: HEIGHT.h80,
    paddingHorizontal: SPACING.sh30,
  },
  infoText: {
    backgroundColor: 'transparent',
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    color: COLORS.black,
  },

  bottomButton: {
    flex: 0.13,
    justifyContent: 'center',
    paddingHorizontal: SPACING.sw10,
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
