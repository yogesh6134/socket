import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: SPACING.sh10,
    paddingHorizontal: SPACING.sw5,
  },
  tabsBox: {
    backgroundColor: COLORS.lightBlue,
    paddingVertical: SPACING.sh10,
  },
  tabsView: {
    marginHorizontal: SPACING.sh4,
    paddingHorizontal: SPACING.sw20,
    borderRadius: SPACING.sh4,
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT.h40,
    paddingBottom: SPACING.sh4,
  },
  tabNavigatorText: {
    color: COLORS.white,
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    lineHeight: FONTS.f18,
  },
  contentBottomContainer: {
    paddingBottom: HEIGHT.h140,
  },
  detailTitleText: {
    color: COLORS.lightBlack,
    marginTop: SPACING.sh2,
    marginBottom: -SPACING.sh6,
    paddingHorizontal: SPACING.sh20,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  listStyle: {
    marginBottom: HEIGHT.h100,
  },
  transactionStatusSuccess: {
    backgroundColor: COLORS.green,
    lineHeight: FONTS.f15,
    paddingVertical: SPACING.sh4,
    paddingHorizontal: SPACING.sh8,
    borderRadius: SPACING.sh10,
    overflow: 'hidden',
    color: COLORS.white,
    fontSize: FONTS.f14,
  },
  transactionStatusCancel: {
    backgroundColor: COLORS.red,
    lineHeight: FONTS.f15,
    paddingVertical: SPACING.sh4,
    paddingHorizontal: SPACING.sh8,
    borderRadius: SPACING.sh10,
    overflow: 'hidden',
    color: COLORS.white,
    fontSize: FONTS.f14,
  },
  transactionStatusProcessing: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: SPACING.sh8,
    borderRadius: SPACING.sh10,
    overflow: 'hidden',
    color: COLORS.white,
    lineHeight: FONTS.f15,
    paddingVertical: SPACING.sh4,
    fontSize: FONTS.f14,
  },
  transactionDate: {
    color: COLORS.black_10,
    fontSize: FONTS.f12,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
  },
  transactionName: {
    color: COLORS.black_10,
    fontFamily: APP_FONTS.PlusJakartaSansSemiBold,
    fontSize: FONTS.f16,
    marginTop: SPACING.sh6,
  },
  transactionFeeText: {
    color: COLORS.black_10,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    fontSize: FONTS.f16,
    marginTop: SPACING.sh2,
  },
  feeChargesText: {
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    fontSize: FONTS.f16,
    marginTop: SPACING.sh6,
    color: COLORS.black,
  },
  historyDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    paddingHorizontal: SPACING.sh20,
    paddingVertical: SPACING.sh12,
  },
  paymentHistoryDetail: {
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    paddingHorizontal: SPACING.sh20,
    paddingVertical: SPACING.sh12,
  },
  paymentHistoryData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    paddingHorizontal: SPACING.sh20,
    paddingTop: SPACING.sh12,
    paddingBottom: HEIGHT.h200,
  },
  historyDetailsView: {
    width: '65%',
  },
  historybuttonView: {
    width: '35%',
    alignItems: 'flex-end',
  },
  transactionPrice: {
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
    marginTop: SPACING.sh6,
  },
  depositsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  earningText: {
    color: COLORS.Light_Gray,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    fontSize: FONTS.f16,
  }
});
