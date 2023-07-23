import React from 'react';
import {View} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import styles from './styles';
import {COLORS} from '@utils/colors';

const LoadingView = ({loading}) => {
  return (
    <View style={styles.parentContainer}>
      <Modal isVisible={loading}>
        <View style={styles.container}>
          <SkypeIndicator color={COLORS.primary} size={40} />
        </View>
        <View />
      </Modal>
    </View>
  );
};

export const Loader = () => {
  return (
    <View style={styles.parentContainer}>
      <Modal isVisible={true}>
        <View style={styles.container}>
          <SkypeIndicator color={COLORS.primary} size={40} />
        </View>
        <View />
      </Modal>
    </View>
  );
};
const mapStateToProps = state => ({
  loading: state?.LoadingReducer?.loading,
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(LoadingView);
