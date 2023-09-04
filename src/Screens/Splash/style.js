import { StyleSheet } from "react-native";
import { commonStyles } from "../../Enums/StyleGuide";

export const styles = StyleSheet.create({
    Container: {
      flex: 1,
      ...commonStyles.center
    },
  });