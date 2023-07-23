import {HEIGHT, SPACING, WIDTH} from '@utils/constant';
import React, {useRef} from 'react';
import {FlatList, Image, View, Animated} from 'react-native';
import styles from './styles';

const Carousel = ({images, url}) => {
  const flatlistRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: HEIGHT.h45,
  }).current;

  const renderItem = ({item, index}) => {
    return (
      <View activeOpacity={1}>
        {url && item ? (
          <Image
            source={{uri: url + item}}
            style={styles.imgStyle}
            resizeMode='contain'
          />
        ) : (
          <Image source={item} style={styles.imgStyle} resizeMode="contain" />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderStyle}>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          scrollEventThrottle={35}
          ref={flatlistRef}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          viewabilityConfig={viewConfigRef}
        />
        <View style={styles.dotView}>
          {images.map((_, i) => {
            const inputRange = [
              (i - 1) * WIDTH.w0,
              i * WIDTH.w320,
              (i + 1) * WIDTH.w0,
            ];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [SPACING.sh6, SPACING.sh6, SPACING.sh6],
              extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.2, 1, 0.5],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                style={[styles.dot, {width: dotWidth, opacity}]}
                key={i.toString()}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Carousel;
