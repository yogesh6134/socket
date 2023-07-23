import {StyleSheet} from 'react-native';
import {COLORS} from '@utils/colors';
import {FONTS, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: SPACING.sh8,
    paddingTop: SPACING.sh10,
  },
  mainView: {
    flex: 0.9,
  },
  checkBox: {
    marginRight: SPACING.sh6,
  },
  passwordLogo: {
    paddingVertical: SPACING.sh6,
    paddingHorizontal: SPACING.sh10,
  },
  termsView: {
    width: WIDTH.w250,
    marginBottom: SPACING.sh15,
  },
  modalHeading: {
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    fontSize: FONTS.f29,
    color: COLORS.yellow,
    textAlign: 'center',
  },
  modalTitle: {
    width: '75%',
    alignSelf: 'center',
    marginTop: SPACING.sh6,
    marginBottom: SPACING.sh10,
  },
  confirmModalButton: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: FONTS.f15,
    color: COLORS.darkText,
    marginLeft: SPACING.sh6,
  },
  borderBottom: {
    height: 1,
    marginLeft: SPACING.sh6,
    backgroundColor: COLORS.darkText,
    marginTop: SPACING.sh2,
  },
});
