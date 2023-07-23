import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.sw20,
    paddingVertical: SPACING.sh6,
    borderBottomColor: COLORS.extraLightBlue,
    borderBottomWidth: SPACING.sh05,
  },
  headerText: {
    fontSize: FONTS.f23,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  main: {
    marginHorizontal: SPACING.sw20,
  },
  clearAllItemButton: {
    paddingVertical: SPACING.sh4,
    paddingLeft: SPACING.sw15,
    paddingRight: SPACING.sh8,
  },
  sortItemView: {
    height: HEIGHT.h144,
  },
  sortItemDetail: {
    marginTop: SPACING.sh10,
    marginBottom: SPACING.sh10,
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
  crossIcon: {
    marginRight: SPACING.sh8,
  },
  dissabledText: {
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
  },
  contentContainer: {
    paddingBottom: HEIGHT.h55,
  },
  sortItemList: {
    flexDirection: 'row',
    marginVertical: SPACING.sh2,
    alignItems: 'center',
  },
  radioButtons: {
    marginRight: SPACING.sh8,
  },
  titleText: {
    fontSize: FONTS.f18,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    color: COLORS.black,
  },
  categoriesView: {
    height: HEIGHT.h100,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryText: {
    marginRight: SPACING.sh30,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
    color: COLORS.black,
    width: WIDTH.w100
  },
  border: {
    borderTopWidth: SPACING.sh05,
    borderTopColor: COLORS.extraLightBlue,
    marginTop: HEIGHT.h20,
    paddingVertical: SPACING.sh10,
    paddingHorizontal: SPACING.sw20,
  },
  button: {
    backgroundColor: COLORS.lightBlue,
  },
  buttonTextStyle: {
    color: COLORS.black_10,
  },
});
