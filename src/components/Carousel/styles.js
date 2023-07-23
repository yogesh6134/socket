import {COLORS} from '@utils/colors';
import {HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
  },
  sliderStyle: {
    width: WIDTH.w0,
    alignSelf: 'center',
  },
  imgStyle: {
    height: HEIGHT.h250,
    width: WIDTH.w0,
    alignSelf: 'center',
    overflow: 'hidden',
    resizeMode: 'stretch',
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: WIDTH.w150,
    bottom: SPACING.sh10,
    zIndex: 9,
  },
  dotView: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: COLORS.tranparent,
    position: 'absolute',
    bottom: SPACING.sh15,
    overflow: 'hidden',
    maxWidth: WIDTH.w220,
  },
  dot: {
    height: SPACING.sh6,
    width: SPACING.sh6,
    borderRadius: SPACING.sh6 / 2,
    backgroundColor: COLORS.white,
    marginHorizontal: 2,
  },
});
