import React, {useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import Modal from 'react-native-modal';
import Button from '@components/Button';
import Row from '@components/Row';
import * as RootNavigation from '@utils/navigateTo';
import {NAVIGATION_SCREENS} from '@utils/navigationScreen';
import OrderPlaced from '@assets/orderPlaced.svg';
import Close from '@assets/close.svg';
import JoinedAuction from '@assets/joinedAuctionIcon.svg';
import {HEIGHT} from '@utils/constant';
import {hideModal} from './action';

const CustomModal = ({isVisibleModal, data}) => {
  const dispatch = useDispatch();
  const savedAmount = data?.auction_price - data?.Amount;

  const onPaymentRequest = useCallback(() => {
    dispatch(hideModal(data));
    RootNavigation.navigate(NAVIGATION_SCREENS.ADD_FUND, {
      amount: data.Amount,
      auction_id: data.id,
      currency_name: data.currency_name,
      Payment_currency: '£',
    });
  }, [data, dispatch]);

  const onAuctionJoin = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  return (
    <Modal
      isVisible={isVisibleModal}
      animationIn="zoomInDown"
      backdropOpacity={0.9}
      animationOut="zoomOutUp">
      {data?.join ? (
        <View style={styles.alertBox}>
          <Pressable onPress={onAuctionJoin} style={styles.crossIcon}>
            <Close />
          </Pressable>
          <JoinedAuction height={HEIGHT.h90} width={HEIGHT.h90} />
          <Text style={styles.alertTitle}>
            You Joined
            <Text style={styles.auctionName}>{` "${data?.name}"`} </Text>
            <Text> Successfully.</Text>
          </Text>
          {data?.lucky_draw && <Text style={styles.freeAuctionTitle}>Raffle redeemed. Free entry for this auction. Enjoy!</Text>}
        </View>
      ) : (
        <View style={styles.alertBox}>
          <OrderPlaced />
          <Text style={styles.congTextStyle}>Congratulations!</Text>
          <Text style={styles.alertTitle}>
            You Won
            <Text style={styles.discountPriceTextText}>{` ${data?.name}`}</Text>
            <Text style={styles.alertTitle}> Successfully.</Text>
          </Text>
          <View style={styles.totalDiscount}>
            <Text style={styles.payInstructionText}>You only pay</Text>
            <Text style={styles.paymentText}>£ {data?.Amount}</Text>
          </View>

          <Row>
            <Text style={styles.savedAmountText}>You saved </Text>
            <Text
              style={styles.discountPriceTextText}>{`£ ${savedAmount.toFixed(
              2,
            )}`}</Text>
          </Row>

          <Button
            size={'large'}
            text={'Checkout'}
            onPress={onPaymentRequest}
            style={styles.confirmButton}
          />
        </View>
      )}
    </Modal>
  );
};

const mapStateToProps = state => ({
  isVisibleModal: state?.modalReducer?.isVisibleModal,
  data: state?.modalReducer?.data,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
