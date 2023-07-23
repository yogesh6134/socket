import React, {useCallback, useState} from 'react';
import {SafeAreaView, View, FlatList, Pressable, Text} from 'react-native';
import Header from '@components/Header';
import styles from './styles';
import BackIcon from '@assets/backIcon.svg';
import {sizeToDp} from '@utils/';
import Row from '@components/Row';
import PasswordLogo from '@assets/passwordLogo.svg';
import NextButton from '@assets/nextIcon.svg';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import {COLORS} from '@utils/colors';
import {HEIGHT} from '@utils/constant';

export default function SettingScreen({navigation}) {
  const [data, setData] = useState([
    {
      name: 'Change Password',
      icon: (
        <PasswordLogo
          height={sizeToDp(22)}
          width={sizeToDp(22)}
          fill={COLORS.IconColor}
        />
      ),
    },
  ]);

  const onCheckDetail = ({name}) => {
    if (name) {
      navigation.navigate(NAVIGATION_SCREENS.CREATE_PASSWORD, {
        data: name,
      });
    }
  };

  const onBackPressHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = useCallback(({item}) => {
    return (
      <Pressable
        key={item.id}
        style={styles.boxView}
        onPress={() => onCheckDetail({name: item.name})}>
        <Row>
          {item.icon}
          <Text style={styles.headingText}>{item.name}</Text>
        </Row>
        <NextButton />
      </Pressable>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderKeyExtractor = useCallback((item, index) => {
    index.toString();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
        title="Settings"
        onBackIconPress={onBackPressHandler}
      />
      <FlatList
        data={data}
        keyExtractor={renderKeyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
