import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';

export default function CustomTextInput({
  label,
  onChangeText,
  value,
  leftIcon,
  rightIcon,
  showPassword,
  hidePassword,
  isPassword,
  keyboardType,
  returnKeyType,
  maxLength,
  onBlur,
}) {
  return (
    <View>
      <FloatingLabelInput
        label={label}
        value={value}
        containerStyles={styles.inputBox}
        customLabelStyles={styles.customLabelStyles}
        labelStyles={styles.labelStyles}
        inputStyles={styles.inputStyles}
        onChangeText={onChangeText}
        isPassword={isPassword}
        leftComponent={leftIcon}
        rightComponent={rightIcon}
        customHidePasswordComponent={showPassword}
        onBlur={onBlur}
        // customShowPasswordImage={showPassword}
        customShowPasswordComponent={hidePassword}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        maxLength={maxLength}
      />
    </View>
  );
}
