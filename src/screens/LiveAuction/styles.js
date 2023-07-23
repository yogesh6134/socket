import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  lightContainer: {
    flex: 1,
    backgroundColor: COLORS.Secondary_Background,
  },
  headerStyle: {
    backgroundColor: COLORS.IconColor,
    borderBottomColor: COLORS.tranparent,
  },
  headerText: {
    color: COLORS.white,
    marginBottom: SPACING.sh6,
  },
  countdownModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    flex: 1,
    backgroundColor: COLORS.tranparent,
  },
  modalTextHeading: {
    color: COLORS.white,
    fontSize: FONTS.f36,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  modalTextDetail: {
    color: COLORS.white,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },

  modalTextColor: {
    color: COLORS.white,
    fontSize: FONTS.f52,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  countdownView: {
    marginTop: HEIGHT.h20,
  },
  TopView: {
    flex: 0.35,
    marginHorizontal: SPACING.sw10,
  },
  main: {
    flex: 0.65,
    backgroundColor: COLORS.white,
  },
  detailView: {
    paddingHorizontal: SPACING.sw15,
  },
  auctionPrice: {
    width: '40%',
    alignItems: 'flex-end',
  },
  activeAuction: {
    backgroundColor: COLORS.green,
    paddingHorizontal: SPACING.sh8,
    paddingVertical: SPACING.sh1,
    borderRadius: SPACING.sh4,
  },
  auctionDetail: {
    width: '50%',
  },
  auctionNameText: {
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  totalItemsView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  moreInfoText: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.primary,
  },
  auctionDetailHeading: {
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  activeAuctionInstruction: {
    borderTopWidth: SPACING.sh05,
    borderBottomWidth: SPACING.sh05,
    borderColor: COLORS.borderSolid,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.sh10,
    marginTop: SPACING.sh6,
    marginBottom: HEIGHT.h36,
    elevation: 2,
    shadowOffset: {width: 2, height: 2},
    shadowColor: COLORS.borderSolid,
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  priceView: {
    width: '31%',
    marginTop: SPACING.sh10,
    alignItems: 'center',
  },
  TimeView: {
    paddingTop: SPACING.sh8,
    paddingHorizontal: SPACING.sh10,
    borderRightWidth: SPACING.sh05,
    borderLeftWidth: SPACING.sh05,
    borderRightColor: COLORS.borderSolid,
    borderLeftColor: COLORS.borderSolid,
    width: '38%',
    alignItems: 'center',
  },
  timeTextStyle: {
    color: COLORS.black,
    fontSize: FONTS.f36,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  percentageView: {
    width: '31%',
    alignItems: 'center',
  },
  discountbox: {
    height: HEIGHT.h85,
    width: HEIGHT.h85,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  discountText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  View: {
    color: COLORS.black,
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  decreaseItemGreenView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center'
  },
  decreaseItemOrangeView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignItems: 'center'
  },
  decreaseItemRedView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  greenText: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    fontSize: FONTS.f15
  },
  orangeTextText: {color: COLORS.orange},
  redText: {color: COLORS.red},
  activeDiscountText: {
    lineHeight: FONTS.f23 + 2,
    color: COLORS.white,
    textAlign: 'center',
    fontSize: FONTS.f23,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  auctionTotalPrice: {
    lineHeight: FONTS.f23,
    width: '85%',
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  circleDecreseValue: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -HEIGHT.h22,
    width: WIDTH.w150,
  },
  decreseValue: {
    width: WIDTH.w140,
    textAlign: 'center',
    fontSize: FONTS.f40,
    lineHeight: FONTS.f45,
    color: COLORS.red,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  buttonText: {
    lineHeight: FONTS.f20,
  },
  textStyle: {
    color: COLORS.red,
    fontSize: FONTS.f40,
    lineHeight: FONTS.f40,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  alertBox: {
    alignItems: 'center',
  },
  alertTitle: {
    textAlign: 'center',
    color: COLORS.black,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    marginBottom: SPACING.sh10,
  },
  congTextStyle: {
    color: COLORS.green,
    fontSize: FONTS.f36,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
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
  discountPriceTextText: {
    color: COLORS.black,
    fontSize: FONTS.f20,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  warningTextStyle: {
    color: COLORS.warning,
    textAlign: 'center',
    marginBottom: SPACING.sh10,
    marginHorizontal: SPACING.sh15,
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
  confirmButton: {
    width: WIDTH.w200,
  },
  backgroundVideo: {
    height: HEIGHT.h100,
    width: HEIGHT.h200,
  },
  swipeStatus: {
    color: 'green',
    fontSize: 15,
    paddingVertical: 3,
    marginVertical: 5,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 1,
    textAlign: 'center',
  },
  subHeading: {color: '#140866', fontSize: 15},
  title: {
    color: '#700D99',
    fontSize: 20,
  },
  videoHeading: {
    marginTop: HEIGHT.h60,
    textAlign: 'center',
    fontSize: FONTS.f27,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  auctionTitle: {
    width: WIDTH.w250,
    marginTop: SPACING.sh10,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: FONTS.f18,
    color: COLORS.black,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
  },
  buyButton: {
    backgroundColor: COLORS.IconColor,
    width: WIDTH.w155,
    borderRadius: SPACING.sh6,
    height: HEIGHT.h45,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: SPACING.sh15,
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.lightBlue,
    width: WIDTH.w155,
    borderRadius: SPACING.sh6,
    height: HEIGHT.h45,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: SPACING.sh15,
    justifyContent: 'center',
  },
  buyButtonText: {
    color: COLORS.white,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    fontSize: FONTS.f20,
  },
  pendingAuctionName: {
    fontFamily: APP_FONTS.PlusJakartaSansBold
  },
  pendingAuctionPrice: {
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.red
  }
});
