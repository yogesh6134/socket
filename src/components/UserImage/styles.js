import {COLORS} from '@utils/colors';
import {HEIGHT, SPACING} from '@utils/constant';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  lightBackground: {
    padding: SPACING.sh4,
    borderRadius: HEIGHT.h144,
    alignSelf: 'center',
    marginBottom: SPACING.sh10,
    backgroundColor: COLORS.lightBlue,
  },
  editImage: {
    position: 'absolute',
    right: -HEIGHT.h18,
    bottom: HEIGHT.h24 * 2,
    padding: SPACING.sh6,
    borderRadius: SPACING.sh20 * 2,
    backgroundColor: COLORS.white,
  },
  userLogo: {
    height: HEIGHT.h144,
    width: HEIGHT.h144,
    borderRadius: HEIGHT.h144 / 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
