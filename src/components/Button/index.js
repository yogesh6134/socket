import Row from '@components/Row';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const buttonSize = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const buttonText = {
  small: styles.smallText,
  medium: styles.mediumText,
  large: styles.largeText,
};

const Button = ({
  size,
  text,
  onPress,
  style,
  icon,
  buttonTextStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Row style={[buttonSize[size], style]}>
        {icon}
        <Text style={[buttonText[size], buttonTextStyle]}>{text}</Text>
      </Row>
    </TouchableOpacity>
  );
};

export default Button;
