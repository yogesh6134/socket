import React from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';
import styles from './styles';

const CustomAlert = ({
  isVisibleModal,
  children,
  modalStyle,
  backdropOpacity,
}) => {
  return (
    <Modal
      isVisible={isVisibleModal}
      animationIn="zoomInDown"
      backdropOpacity={backdropOpacity}
      animationOut="zoomOutUp">
      <View style={[styles.container, modalStyle]}>{children}</View>
    </Modal>
  );
};
export default CustomAlert;
