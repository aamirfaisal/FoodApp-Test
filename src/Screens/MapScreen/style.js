import { StyleSheet } from "react-native";
import { COLORS } from "../../Enums/StyleGuide";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    MapStyle: {
        ...StyleSheet.absoluteFillObject,
    },
    TopButton: {
        zIndex: 1,
        margin: '5%'
    },
    BottomContainer: {
        position: 'absolute',
        bottom: '3%',
        alignSelf: 'center'
    }

})