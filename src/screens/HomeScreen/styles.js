import {sizeToDp} from '@utils/';
import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.darkText,
  },
  headingText: {
    fontSize: FONTS.f23,
    color: COLORS.black,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    marginLeft: SPACING.sh10,
    marginRight: SPACING.sh4,
    marginVertical: SPACING.sh6,
  },
  dropdownIcon: {
    paddingVertical: SPACING.sh6,
    paddingHorizontal: SPACING.sh15
  },
  dropdownIconStyle:{ 
    transform: [{rotate: '90deg'}],
  },
  dropUpIconStyle: { 
    transform: [{rotate: '270deg'}],
  },
  wonAuctionBox: {
    marginTop: SPACING.sh4,
    marginHorizontal: SPACING.sh10,
    backgroundColor: COLORS.white,
    elevation: 4,
    borderRadius: SPACING.sh6,
    shadowOffset: {width: 1, height: 4},
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  wonAuctionInsideBox: {
    backgroundColor: COLORS.tranparent,
    marginBottom: SPACING.sh4,
    paddingVertical: SPACING.sh10,
    paddingHorizontal: SPACING.sh10
  },
  borderView: {
    height: SPACING.sh05,
    backgroundColor: COLORS.black,
    opacity: 0.2
  },
  detailBoxView: {
    alignItems: 'flex-start',
  },
  logo: {
    width: '20%',
  },
  mainItemView: {
    width: '80%',
  },
  dateText: {
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  pendingAmount: {
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.red,
  },
 
  assetsName: {
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  auctionIcon: {
    height: sizeToDp(HEIGHT.h60),
    width: sizeToDp(HEIGHT.h60),
    borderRadius: HEIGHT.h60 / 2,
    marginRight: SPACING.sh10,
  },
  auctionDateAndPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceView: {
    fontFamily: APP_FONTS.PlusJakartaSansExtraBold,
    fontSize: FONTS.f16,
    color: COLORS.black,
    textAlign: 'center',
  },
  auctionName: {
    width: WIDTH.w155,
    color: COLORS.IconColor,
    fontFamily: APP_FONTS.PlusJakartaSansExtraBold,
    fontSize: FONTS.f18,
    flexDirection: 'row',
  },
  alertBox: {
    alignItems: 'center',
    paddingHorizontal: SPACING.sw25
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginRight: SPACING.sw10
  },
  congTextStyle: {
    color: COLORS.IconColor,
    fontSize: FONTS.f36,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  warningText: {
    fontSize: FONTS.f16,
    color: COLORS.black_10,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    textAlign: 'center',
    marginVertical: SPACING.sh6
  },
  wonAuctionAmount: {
    color: COLORS.IconColor,
    fontFamily: APP_FONTS.PlusJakartaSansBold
  },
  wonAuctionName: {
    color: COLORS.red,
    fontFamily: APP_FONTS.PlusJakartaSansBold
  },
  confirmButton: {
    width: WIDTH.w200,
  },
});
