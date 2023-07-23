import {COLORS} from '@utils/colors';
import {FONTS, HEIGHT, SPACING, WIDTH} from '@utils/constant';
import {APP_FONTS} from '@utils/fonts';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  header: {
    backgroundColor: COLORS.IconColor,
    borderBottomColor: COLORS.IconColor,
    color: COLORS.white,
  },
  main: {
    paddingVertical: SPACING.sh20,
    marginHorizontal: SPACING.sw15,
    height: HEIGHT.h270,
  },
  bottomBox: {
    paddingHorizontal: SPACING.sw30,
  },
  bottomHeading: {
    textAlign: 'center',
    color: COLORS.IconColor,
    marginVertical: SPACING.sh10,
    fontSize: FONTS.f29,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
  },
  bottomHeadingDetail: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: FONTS.f16,
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
  },
  modalStyle: {
    paddingTop: SPACING.sh05,
    borderRadius: SPACING.sh05,
  },
  modalHeader: {
    flexDirection: 'row',
    paddingVertical: SPACING.sh8,
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeading: {
    marginLeft: SPACING.sh15,
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
    fontSize: FONTS.f23
  },
  closeModal: {
    paddingHorizontal: SPACING.sh15,
    paddingVertical: SPACING.sh8,
  },
  modalMainView: {
    margin: HEIGHT.h15
  },
  modalTitle: {
    fontFamily: APP_FONTS.PlusJakartaSansRegular,
    color: COLORS.black,
    fontSize: FONTS.f18
  },
  dropdownIconStyle:{ 
    transform: [{rotate: '90deg'}],
  },
  dropUpIconStyle: {
    transform: [{rotate: '270deg'}],
  },
  messageBox: {
    minHeight: HEIGHT.h80,
    maxHeight: HEIGHT.h200,
    borderColor: COLORS.borderSolid,
    borderWidth: SPACING.sh05,
    borderRadius: SPACING.sh6,
    marginTop: SPACING.sh15,
    padding: SPACING.sh10,
    textAlignVertical: 'top'
  },
  dropdownHeading: {
    fontFamily: APP_FONTS.PlusJakartaSansBold,
    color: COLORS.black,
    fontSize: FONTS.f16,
  },
  dropdownItems: {
    flexDirection: 'row',
    paddingVertical: SPACING.sh8,
    borderBottomWidth: SPACING.sh05,
    borderBottomColor: COLORS.borderSolid,
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
