import {COLORS} from '@utils/colors';
import {SPACING} from '@utils/constant';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  bottomsheet: {
    borderTopLeftRadius: SPACING.sh15,
    borderTopRightRadius: SPACING.sh15,
    backgroundColor: COLORS.white,
  },
  sheetContentContainer: {
    flex: 1,
    borderTopLeftRadius: SPACING.sh15,
    borderTopRightRadius: SPACING.sh15,
    // overflow: 'hidden',
  },
});
