import {COLORS} from '@utils/colors';
import {StyleSheet} from 'react-native';
import {SPACING, HEIGHT, WIDTH, FONTS} from '@utils/constant';
import {sizeToDp} from '@utils/';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  headerText: {
    color: COLORS.white,
    marginBottom: SPACING.sh6,
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
  tabBarText: {
    fontSize: FONTS.f18,
    color: COLORS.black,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
});
