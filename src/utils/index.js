import {PixelRatio} from 'react-native';
import {showToast} from './loaderAndToastMethod';
import messaging from '@react-native-firebase/messaging';

export const sizeToDp = sizeDp => PixelRatio.roundToNearestPixel(sizeDp);

export const showInternetError = () => {
  showToast('no internet connection', 'warning');
};
