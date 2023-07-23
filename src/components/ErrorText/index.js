import {Pressable, Text} from 'react-native';
import React, {useMemo} from 'react';
import styles from './styles';

const ErrorText = (...props) =>
  useMemo(() => {
    const [{value, icon, warningText, onPressMsg}] = props;
    if (!value) {
      return null;
    }
    return (
      <Pressable style={styles.errorView} onPress={onPressMsg}>
        {icon}
        <Text style={[styles.errorText, warningText]}>{value}</Text>
      </Pressable>
    );
  }, [props]);

export default ErrorText;
