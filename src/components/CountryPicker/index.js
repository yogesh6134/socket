import React, {forwardRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';

const CountryPicker = forwardRef(
  (
    {defaultValue, defaultCode, onChangeText, onChangeFormattedText, autoFocus},
    ref,
  ) => {
    return (
      <PhoneInput
        ref={ref}
        defaultValue={defaultValue}
        defaultCode={defaultCode}
        layout="first"
        onChangeText={onChangeText}
        onChangeFormattedText={onChangeFormattedText}
        withDarkTheme
        withShadow={false}
        keyboardType="phone-pad"
        placeholder={''}
        autoFocus={autoFocus}
        containerStyle={styles.loginWithPhoneBoxView}
        textContainerStyle={styles.textContainerStyle}
        codeTextStyle={styles.codeText}
        textInputStyle={styles.textinputStyle}
        phoneInputContainer={true}
        textInputProps={{maxLength: 15}}
      />
    );
  },
);
export default CountryPicker;
