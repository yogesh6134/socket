import {COLORS} from '@utils/colors';
import {StyleSheet} from 'react-native';
import {SPACING, HEIGHT, WIDTH, FONTS} from '@utils/constant';
import {sizeToDp} from '@utils/';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  auctionDetailView: {
    borderBottomWidth: 0.6,
    paddingHorizontal: SPACING.sh10,
    paddingVertical: SPACING.sh6,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomColor: COLORS.borderSolid,
  },
  processingAuctionDetailView: {
    borderBottomWidth: 0.6,
    paddingHorizontal: SPACING.sh10,
    paddingVertical: SPACING.sh6,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.lightGreen,
    borderBottomColor: COLORS.borderSolid,
  },
  auctionLastDetailView: {
    paddingHorizontal: SPACING.sh10,
    paddingVertical: SPACING.sh6,
    marginBottom: HEIGHT.h140,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  detailBoxView: {
    alignItems: 'flex-start',
  },
  logo: {
    width: '20%'
  },
  mainItemView: {
    width: '80%'
  },
  dateText: {
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  liveSoonText: {
    fontSize: FONTS.f14,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.red,
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
  auctionTimeHistory: {
    backgroundColor: COLORS.extraLightBlue,
    width: '56%',
    marginRight: SPACING.sw10,
    paddingVertical: SPACING.sh4,
    paddingHorizontal: SPACING.sh6,
    borderRadius: SPACING.sh4,
  },
  auctionHistory: {
    backgroundColor: COLORS.extraLightBlue,
    width: '40%',
    paddingVertical: SPACING.sh4,
    paddingHorizontal: SPACING.sh6,
    borderRadius: SPACING.sh4,
  },
  auctionHistoryText: {
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  auctionHistoryValue: {
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.IconColor,
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
});
