import {Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '@components/Button';

export default function BlankPage({
  icon,
  heading,
  title,
  nextAuction,
  onButtonPressHandler,
  buttonText,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.heading}> {heading} </Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.heading}> {nextAuction} </Text>
      {buttonText && (
        <Button
          size={'large'}
          text={buttonText}
          onPress={onButtonPressHandler}
          style={styles.button}
        />
      )}
    </View>
  );
}
