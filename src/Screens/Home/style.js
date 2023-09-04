import { StyleSheet } from "react-native";
import { COLORS, FONTS, TEXT_STYLE, commonStyles } from "../../Enums/StyleGuide";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  ScrollContainer: {
    paddingBottom: '4%'
  },
  FeedBackContainer: {
    ...commonStyles.verticleView,
    width: '47%',
    marginLeft: '5%',
    marginTop: '2%'
  },
  Rating: {
    ...TEXT_STYLE.text_small_bold
  },

  Reviews: {
    fontSize: 12,
    fontFamily: FONTS.Poppins_Medium,
    color: COLORS.GREY,
  },
  ReviewLine: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.RED,
    bottom: 4
  },
  ReviewButtonText: {
    fontSize: 13,
    ...TEXT_STYLE.text_med_Red

  },
  PricingContainer: {
    ...commonStyles.justifyView,
    paddingHorizontal: '4%',
    marginVertical: '2%'
  },
  Dollar: {
    fontSize: 17,
    ...TEXT_STYLE.text_med_Red

  },
  Price: {
    fontSize: 24,
    ...TEXT_STYLE.text_med_Red
  },
  Description: {
    fontSize: 12,
    fontFamily: FONTS.Poppins_Medium,
    color: COLORS.LIGHT_GREY,
    width: '93%',
    alignSelf: 'center',
    lineHeight: 19
  },
  BottomContainer: {
    position: 'absolute',
    bottom: '3%',
    alignSelf: 'center'
  }
})