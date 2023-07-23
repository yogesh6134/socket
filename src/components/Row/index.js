import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';

const Row = ({children, style, spaces, onPress}) => (
  <View style={[spaces ? styles.withSpace : styles.withoutSpace, style]}>
    {children}
  </View>
);

export default Row;
