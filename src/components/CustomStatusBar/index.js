import React from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function CustomStatusBar({backgroundColor, barStyle}) {
  const insight = useSafeAreaInsets();

  return (
    <View style={{height: insight.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}
