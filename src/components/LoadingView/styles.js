import {COLORS} from '@utils/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parentContainer: {position: 'absolute'},
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tranparent,
  },
});
export default styles;
