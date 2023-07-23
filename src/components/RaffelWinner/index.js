import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import Close from '@assets/close.svg';
import OrderPlaced from '@assets/orderPlaced.svg';
import FreeIcon from '@assets/free.svg';
import {HEIGHT} from '@utils/constant';
import CustomAlert from '@components/AlertBox';
import styles from './styles';

const RaffelWinner = ({stateChanger}) => {
  const onAuctionJoin = () => {
    stateChanger(false);
  };
  return (
    <CustomAlert isVisibleModal={true}
       modalStyle={styles.container}>
        <Pressable onPress={onAuctionJoin} style={styles.crossIcon}>
          <Close />
        </Pressable>
        <View style={styles.boomIcon}>
        <OrderPlaced  />
        </View>
        <Text style={styles.congTextStyle}> Congratulations </Text>
          <Text style={styles.titleStyle}>{'You\'re the lucky winner of our thrilling Raffle! As a reward, Your next entry into the next auction is absolutely '} </Text>
          <FreeIcon />
    </CustomAlert>
  );
};

export default RaffelWinner;
