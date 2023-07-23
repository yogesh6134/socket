import {ScrollView, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import Header from '@components/Header';
import {sizeToDp} from '@utils/';
import BackIcon from '@assets/backIcon.svg';
import Button from '@components/Button';
import ReferalIcon from '@assets/referalIcon.svg';
import {HEIGHT, WIDTH} from '@utils/constant';
import CustomStatusBar from '@components/CustomStatusBar';
import {COLORS} from '@utils/colors';
import Branch from 'react-native-branch';
import {useSelector} from 'react-redux';

const ReferalAndEarn = ({navigation}) => {
  const {refer_code} = useSelector(
    state => state?.profileReducer?.profileData?.data,
  );


  async function shareReferralLink() {
    Branch.setIdentity(refer_code); // <- Identifiy the user in branch

    let branchUniversalObject = await Branch.createBranchUniversalObject(
      'canonicalIdentifier',
      {
        locallyIndex: true,
        canonicalUrl: 'ok1zg.test-app.link',
        title: refer_code,
        contentDescription: 'Great Reverse Bidding App',
      },
    );
    let linkProperties = {
      feature: 'share',
      channel: 'facebook',
    };
    let controlParams = {
      $desktop_url: 'http://yolop.net/',
    };
    let shareOptions = {
      messageHeader: 'Yolop',
      messageBody: 'An excellent App to bid on amazing items.',
    };
    let {channel, completed, error} =
      await branchUniversalObject.showShareSheet(
        shareOptions,
        linkProperties,
        controlParams,
      );
  }


  const onBackPressHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <CustomStatusBar
        backgroundColor={COLORS.secondary}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title={'Referral & Earn'}
          icon={<BackIcon width={sizeToDp(HEIGHT.h24)} fill={COLORS.black} />}
          onBackIconPress={onBackPressHandler}
        />
        <View style={styles.main}>
          <ReferalIcon
            style={styles.refIconStyle}
            height={sizeToDp(HEIGHT.h260)}
            width={sizeToDp(WIDTH.w300)}
          />
          <View style={styles.instructions}>
            <Text style={styles.instructionText}>
              Get ready to bid, win, and earn with Yolop!{'\n'}
              {'\n'}
              Invite your friends and family to join our platform with your
              referral code and get rewarded. Start earning now by following
              these simple steps:{'\n'}
              1. Invite your friends and family to join our reverse- auction
              platform with your unique referral link from Yolop app.{'\n'}
              2. Share your referral link with your friends and family on
              different social media platforms,email or through text
              message.{'\n'}
              3. You get the extra 5% credit on your wallet once Your friend
              joins his first auction.
            </Text>
          </View>
          <Text style={styles.refLinkTitle}>This is your Referral code</Text>
                    
            <Text style={styles.instructionText}>{refer_code}</Text>
          <Button
            size={'large'}
            text={'Share Now'}
            onPress={shareReferralLink}
            style={styles.button}
          />
          <Text style={styles.termAndConditionText}>
            *Terms and Conditions Apply
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReferalAndEarn;
