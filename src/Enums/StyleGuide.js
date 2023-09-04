import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ACTIVEOPACITY = .8;

const COLORS = {
  WHITE: '#ffffff',
  BLACK: '#323643',
  DARK: '#000000',
  RED: '#BF1E2D',
  YELLOW: '#FFC529',
  GREY: '#9796A1',
  LIGHT_GREY: '#858992',
  LIGHT: '#D4D5DAB2'
};

const FONTS = {
  Poppins_Regular: 'Poppins-Regular',
  Poppins_Medium: 'Poppins-Medium',
  Poppins_Bold: 'Poppins-Bold',
  Poppins_SemiBold: 'Poppins-SemiBold',
  Poppins_Italic: 'Poppins-Italic',
  Poppins_ExtraBold: 'Poppins-ExtraBold',
};

const SCREEN = {
  Splash: 'Splash',
  Home: 'Home',
  MapScreen:'MapScreen'
}

const TEXT_STYLE = {
  title: {
    fontSize: 24,
    color: COLORS.WHITE,
  },
  boldTitle: {
    fontSize: 28,
    color: COLORS.WHITE,
    fontWeight:'600',
    fontFamily: FONTS.Poppins_SemiBold
  },
  text_med_Red: {
    fontFamily: FONTS.Poppins_Medium,
    color: COLORS.RED,
  },
  text_med_bold: {
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.WHITE,
  },
  text_small_bold: {
    fontFamily: FONTS.Poppins_Bold,
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.BLACK,
  },
  text_regular: {
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 14,
    color: COLORS.DARK,
  }
};
const commonStyles = {
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  justifyView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export {
  COLORS,
  width,
  height,
  ACTIVEOPACITY,
  FONTS,
  commonStyles,
  TEXT_STYLE,
  SCREEN,
};