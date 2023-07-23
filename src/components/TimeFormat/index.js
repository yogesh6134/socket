import Row from '@components/Row';
import {COLORS} from '@utils/colors';
import {FONTS, SPACING} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TimeFormat = ({hours, min, sec}) => {
  const auctionHours = hours < 10 ? '0' + hours : hours;
  const auctionMin = min < 10 ? '0' + min : min;
  const auctionSec = sec < 10 ? '0' + sec : sec;

  return (
    <Row style={styles.container}>
      <View>
        <Text style={styles.heading}>{'Hrs'}</Text>
        <Text style={styles.title}>{`${auctionHours}  : `}</Text>
      </View>
      <View>
        <Text style={styles.heading}>{'Min'}</Text>
        <Text style={styles.title}>{`${auctionMin}  : `}</Text>
      </View>
      <View>
        <Text style={styles.heading}>{'Sec'}</Text>
        <Text style={styles.title}>{auctionSec}</Text>
      </View>
    </Row>
  );
};

export default TimeFormat;

const styles = StyleSheet.create({
  container: {
    marginTop: -SPACING.sh4,
  },
  heading: {
    color: COLORS.lightBlack,
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansMedium,
  },
  title: {
    // lineHeight: FONTS.f12
    // paddingBottom: SPACING.sh4,
    lineHeight: FONTS.f23,
    fontSize: FONTS.f30,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
  },
});
