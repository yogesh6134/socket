import React, {forwardRef, useCallback} from 'react';
import {View} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import styles from './styles';

const Bottomsheet = forwardRef(
  (
    {
      children,
      index,
      snapPoints,
      customStyle,
      enablePanDownToClose,
      onChange,
      ...props
    },
    ref,
  ) => {
    const renderBackdrop = useCallback(
      props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior={'none'}
          opacity={0.4}
        />
      ),
      [],
    );

    return (
      <BottomSheet
        ref={ref}
        index={index}
        snapPoints={snapPoints}
        backgroundStyle={[styles.bottomsheet, customStyle]}
        enablePanDownToClose={enablePanDownToClose}
        backdropComponent={renderBackdrop}
        handleComponent={null}
        keyboardBlurBehavior="restore"
        keyboardBehavior={'interactive'}
        onChange={onChange}
        {...props}>
        <View style={styles.sheetContentContainer}>{children}</View>
      </BottomSheet>
    );
  },
);

export default Bottomsheet;
