import {SPACING} from '@utils/constant';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  withSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sh2,
  },
  withoutSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sh2,
  },
});
