import {COLORS} from '@utils/colors';
import {SPACING} from '@utils/constant';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loadingModal: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingVertical: SPACING.sw15,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.sw15,
    zIndex: 9,
    marginLeft: SPACING.sw15,
    marginRight: SPACING.sw15,
    overflow: 'hidden',
  },
});
