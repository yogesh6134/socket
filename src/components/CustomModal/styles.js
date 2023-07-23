import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  alertBox: {
    paddingVertical: HEIGHT.h20,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.sw15,
    zIndex: 9,
    marginLeft: SPACING.sw15,
    marginRight: SPACING.sw15,
    overflow: 'hidden',
    alignItems: 'center',
  },
  alertTitle: {
    textAlign: 'center',
    color: COLORS.black,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    marginLeft: SPACING.sw5,
    marginRight: SPACING.sw5,
  },
  auctionName: {
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  freeAuctionTitle : {
    textAlign: 'center',
    color: COLORS.green,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    marginHorizontal: SPACING.sh15
  },
  congTextStyle: {
    color: COLORS.green,
    fontSize: FONTS.f36,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  discountPriceTextText: {
    color: COLORS.black,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  totalDiscount: {
    backgroundColor: COLORS.lightGreen,
    width: WIDTH.w200,
    alignItems: 'center',
    paddingVertical: SPACING.sh2,
    borderWidth: SPACING.sh1,
    borderStyle: 'dashed',
    borderColor: COLORS.green,
    borderRadius: SPACING.sh2,
    marginBottom: SPACING.sh12,
  },
  payInstructionText: {
    color: COLORS.green,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  paymentText: {
    color: COLORS.green,
    fontSize: FONTS.f52,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  savedAmountText: {
    color: COLORS.black,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  priceText: {
    color: COLORS.black,
    fontSize: FONTS.f36,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  confirmButton: {
    width: WIDTH.w200,
  },
  crossIcon: {
    position: 'absolute',
    right: SPACING.sh05,
    top: SPACING.sh6,
    padding: SPACING.sh15,
  },
});
