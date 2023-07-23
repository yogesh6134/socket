import {View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import User from '@assets/user.svg';
export default function UserImage({icon, editIcon, onEditImage, onPressImage}) {
  return (
    <View style={styles.lightBackground}>
      <Pressable onPress={onPressImage}>
        {icon ? (
          icon
        ) : (
          <View style={styles.userLogo}>
            <User />
          </View>
        )}
      </Pressable>
      {editIcon && (
        <Pressable style={styles.editImage} onPress={onEditImage}>
          {editIcon}
        </Pressable>
      )}
    </View>
  );
}
