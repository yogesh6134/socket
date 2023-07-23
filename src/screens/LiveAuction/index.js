import {
  View,
  BackHandler,
  ImageBackground,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Vibration,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react'; 
import styles from './styles';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Header from '@components/Header';
import BackIcon from '@assets/backIcon.svg';
import OrderPlaced from '@assets/orderPlaced.svg';
import Row from '@components/Row';
import {HEIGHT, WIDTH} from '@utils/constant';
import {COLORS} from '@utils/colors';
import {commonStyle} from '@utils/commonStyle';
import Carousel from '@components/Carousel';
import CustomAlert from '@components/AlertBox';
import {sizeToDp} from '@utils/';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import socketServices from '@utils/socketServices';
import {BlankScreen, YoutubeVideo} from './extraScreen';
import Button from '@components/Button';
import CustomStatusBar from '@components/CustomStatusBar';
import {userBuyAuctionRequest} from './action';
import {youtube_parser} from '@utils/timeFormat';
import {Loader} from '@components/LoadingView';
import { checkTokenRequest } from '@screens/ProfileScreen/action';
import DiscountBox from '@assets/images/discountbox.png'

const LiveAuction = ({navigation}) => {
  const dispatch = useDispatch();
  const [showCompleteMsgAlert, setShowCompleteMsgAlert] = useState();
  const [auctionDatadata, setAuctionData] = useState()
  const [videoUrl, setVideoUrl] = useState();
  const [auctionStartTimeLeft, setAuctionStartTimeLeft] = useState();
  const [shakeAnimation] = useState(new Animated.Value(0));
  const [getTotalWinner, setGetTotalWinner] = useState();
  const [disabledButton, setDisabledButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true)
  const [winAuctionPrice, setWinAuctionPrice] = useState()

  const user_id = useSelector(
    state => state?.profileReducer?.profileData?.data?.user_details?.user_id,
  );

  const duePayment = useSelector(
    state => state?.profileReducer?.profileData?.data?.due_payment
  );

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Home');
        return true;
      };
      dispatch(checkTokenRequest());
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, navigation]),
  );

  const wonRequestHandler = useCallback(
    winnerData => {
      const totalDuration = winnerData.totalDuration - winnerData.duration;
      const currentDate = new Date();
      const date_time = currentDate.toUTCString();
      const winning_price = winnerData.winning_price.toFixed(2);
      setWinAuctionPrice(winning_price)
      const data = {
        auction_id: winnerData.auctionId,
        auction_price: parseFloat(winnerData.Price),
        winning_price,
        date_time,
        no_of_items: winnerData.getWinner,
        duration: totalDuration,
        discount: winnerData.winning_discount,
      };
        dispatch(userBuyAuctionRequest({data}));
    },
    [dispatch],
  );

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      setVideoUrl();
      setAuctionData()
      setDisabledButton(false);
    });
    return focusHandler;
  }, [navigation, dispatch]);

  useEffect(() => {
    socketServices.on('connect', () => {
      console.log('Connected:======', socketServices);
    }); 
   
    if (duePayment?.length <= 1) {
    socketServices.on('preAuction', data => {
      const users = data?.joinedUsers;
      const found = users.find(id => id == user_id);
      if (found) {
        setVideoUrl(data.video_url);
        setAuctionStartTimeLeft(data.diff);
      }
    });
    socketServices.on('liveAuctionData', val => {
      const users = val?.joinedUsers;
      const found = users.find(id => id == user_id);
      if (found && duePayment?.length <= 0) {
        setAuctionData(val)
        setAuctionStartTimeLeft();
        setGetTotalWinner(val.getTotalWinner ? val.totalNumberOfItem - val.getTotalWinner : val.totalNumberOfItem);
      }
    });
    socketServices.on('endAuctionData', endData => {
      const users = endData?.joinedUsers;
      const found = users.find(id => id == user_id);
      if (found) {
        setAuctionData()
        setShowCompleteMsgAlert(true);
        setIsPlaying(false)
      }
    });
    socketServices.on('completeAuctionData', auctionComplete => {
      const users = auctionComplete?.joinedUsers;
      const found = users.find(id => id == user_id);
      if (found) {
        setAuctionData()
        setShowCompleteMsgAlert(true);
        setIsPlaying(false)
      }
    });
      socketServices.on('winnerdData', winnerData => {
        wonRequestHandler(winnerData);
        setAuctionData()
      });
  }
  }, [user_id, wonRequestHandler, showCompleteMsgAlert]);

  const shakeStyle = {
    transform: [
      {
        translateX: shakeAnimation.interpolate({
          inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          outputRange: [0, -25, 20, -15, 10, -5, 0, 0, 0, 0, 0],
        }),
      },
    ],
  };
  const buyAuctionHandler = useCallback((props) => {
    setDisabledButton(true);
    dispatch(checkTokenRequest());
    socketServices.emit('sendBuyData', {
      targetSocketId: socketServices.id,
      userID: user_id,
      winning_price: props?.Price_display,
      discount: props?.Discount_sec,
      time: Date.now(),
      massage: 'React Native Connected',
      getWinner: 1,
      Price: props?.Price,
      totalNumberOfItem: props?.totalNumberOfItem,
      duration: props?.dropTimer,
      auctionId: props?.auctionId,
      totalDuration: props?.duration,
    });
    shakeAnimation.setValue(0);
    Vibration.vibrate();
    Animated.timing(shakeAnimation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [
    shakeAnimation,
    user_id,
  ]);

  const auctionRenderTime = () => {
    return (
      <View style={styles.circleDecreseValue}>
        <Text style={styles.textStyle}>£</Text>
        <Text style={styles.decreseValue} numberOfLines={1}>
          {isPlaying ? parseFloat(auctionDatadata?.Price_display).toFixed(2) : winAuctionPrice}
        </Text>
      </View>
    );
  };

  const backButton = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const expireAuction = useCallback(() => {
    setShowCompleteMsgAlert(false);
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }, [navigation]);

  const minutes = Math.floor(auctionDatadata?.dropTimer / 60);
  const seconds = auctionDatadata?.dropTimer - minutes * 60;
  const decreseValuePercentage = (getTotalWinner * 100) / auctionDatadata?.totalNumberOfItem;

  const buttonText = values => {
    if (values > 50) {
      return styles.decreaseItemGreenView;
    } else {
      if (values > 20) {
        return styles.decreaseItemOrangeView;
      } else {
        return styles.decreaseItemRedView;
      }
    }
  };

  return (
    <View style={styles.container}>
      {(!auctionDatadata && !videoUrl || duePayment?.length > 0) && <BlankScreen data={duePayment} />}
      {videoUrl && auctionStartTimeLeft > 15 && duePayment?.length <= 0 && (
        <YoutubeVideo id={youtube_parser(videoUrl)} />
      )}
      {auctionStartTimeLeft <= 16 && auctionStartTimeLeft > 1 && duePayment?.length <= 0 && (
        <CustomAlert
          isVisibleModal={true}
          modalStyle={styles.modalStyle}
          backdropOpacity={0.9}>
          <View style={styles.countdownModal}>
            <Text style={styles.modalTextHeading}>Get Ready!</Text>
            <Text style={styles.modalTextDetail}>Auction Starts In</Text>
            <View style={styles.countdownView}>
              <CountdownCircleTimer
                isPlaying
                duration={15}
                initialRemainingTime={auctionStartTimeLeft}
                size={WIDTH.w155}
                trailColor={COLORS.red}
                colors={'#d3d3d3'}>
                {({remainingTime}) => (
                  <Text style={styles.modalTextColor}>{remainingTime} </Text>
                )}
              </CountdownCircleTimer>
            </View>
          </View>
        </CustomAlert>
      )}
      {auctionStartTimeLeft === 1  && duePayment?.length <= 0 && <Loader />}
      {auctionDatadata && duePayment?.length <= 0 &&(
        <View style={styles.container}>
          <CustomStatusBar
            backgroundColor={COLORS.IconColor}
            barStyle="light-content"
          />
          <Header
            title={auctionDatadata?.auctionName}
            style={styles.headerStyle}
            headerColor={styles.headerText}
            icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.white} />}
            onBackIconPress={backButton}
          />
          <View style={styles.TopView}>
            {auctionDatadata?.auctionImages && (
              <Carousel
                images={auctionDatadata?.auctionImages.split(',')}
                url={'https://yolop.net/admin/public/images/auctions/'}
              />
            )}
          </View>

          <View style={styles.main}>
            <Row spaces style={styles.detailView}>
              <View style={styles.auctionDetail}>
                <Text style={styles.auctionNameText} numberOfLines={1}>
                  Items on Offer : {auctionDatadata?.totalNumberOfItem}
                </Text>
              </View>
              <View style={styles.totalItemsView}>
                <Text style={styles.auctionNameText}> Items Left : </Text>
                <View
                  style={buttonText(decreseValuePercentage)}>
                  <Text style={styles.greenText}>
                    {getTotalWinner}{' '}
                  </Text>
                </View>
              </View>
            </Row>

            <View style={styles.activeAuctionInstruction}>
              <View style={styles.priceView}>
                <Text style={styles.auctionDetailHeading}> {'VALUE'} </Text>
                <View style={styles.activeDiscountText}>
                  <Text numberOfLines={1} style={styles.auctionTotalPrice}>
                  £ {auctionDatadata?.Price}
                  </Text>
                </View>
              </View>
              <View style={styles.TimeView}>
                <Text style={styles.auctionDetailHeading}>
                  {'AUCTION ENDING IN'}
                </Text>
                <Text style={styles.timeTextStyle}>
                  {minutes < 10 ? '0' + minutes : minutes}:
                  {seconds < 10 ? '0' + seconds : seconds}
                </Text>
              </View>
              <View style={styles.percentageView}>
                <ImageBackground
                  source={DiscountBox}
                  style={styles.discountbox}>
                  <Text style={styles.discountText}>DISCOUNT</Text>
                  <Text style={styles.activeDiscountText}>
                    {`${Math.floor(auctionDatadata?.Discount_sec)}%`}
                  </Text>
                </ImageBackground>
              </View>
            </View>

            <View>
              <View style={commonStyle.centerText}>
                <CountdownCircleTimer
                  isPlaying={isPlaying}
                  duration={auctionDatadata?.duration}
                  initialRemainingTime={auctionDatadata?.dropTimer}
                  size={WIDTH.w155}
                  trailColor={auctionDatadata?.auctionColor ? auctionDatadata?.auctionColor : COLORS.red}
                  colors={'#d3d3d3'}>
                  {auctionRenderTime}
                </CountdownCircleTimer>
              </View>

              <TouchableWithoutFeedback
                onPress={() => buyAuctionHandler(auctionDatadata)}
                disabled={disabledButton}>
                <Animated.View
                  style={[
                    disabledButton ? styles.disabledButton : styles.buyButton,
                    shakeStyle,
                  ]}>
                  <Text style={styles.buyButtonText}>Buy Now</Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      )}
      <CustomAlert isVisibleModal={showCompleteMsgAlert} backdropOpacity={0.9}>
        <View style={styles.alertBox}>
          <OrderPlaced />
          <Text style={styles.congTextStyle}>Auction completed!</Text>
          <Button
            size={'large'}
            text={'OK'}
            onPress={expireAuction}
            style={styles.confirmButton}
          />
        </View>
      </CustomAlert>
    </View>
  );
};
export default LiveAuction;
