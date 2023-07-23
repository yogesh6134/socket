import {View, Pressable, TextInput, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {COLORS} from '@utils/colors';

export default function Header({
  icon,
  title,
  menubar,
  style,
  headerColor,
  onBackIconPress,
  type,
  onFilterPress,
  onMenuPress,
  appIcon,
  onChanheText,
  value,
  searchIcon,
}) {
  return (
    <>
      {type !== 'dashboard' && (
        <View style={[styles.simpleContainer, style]}>
          <Pressable style={styles.leftSideView} onPress={onBackIconPress}>
            {icon}
          </Pressable>
          <Text style={[styles.centerView, headerColor]}>{title}</Text>
          <View style={styles.rightSideView}>{menubar}</View>
        </View>
      )}
      {type === 'dashboard' && (
        <View style={[styles.container, style]}>
          <Pressable style={styles.leftSideView} onPress={onFilterPress}>
            {icon}
          </Pressable>
          <View style={styles.searchBox}>
            {appIcon}
            <View style={styles.textInput}>
              <TextInput
                placeholder="Search Here..."
                style={styles.textInputStyle}
                underlineColorAndroid="transparent"
                placeholderTextColor={COLORS.primaryBlack}
                onChangeText={onChanheText}
                value={value}
              />
              <Pressable style={styles.searchIcon}>{searchIcon}</Pressable>
            </View>
          </View>
          <Pressable style={styles.rightSideView} onPress={onMenuPress}>
            {menubar}
          </Pressable>
        </View>
      )}
    </>
  );
}
