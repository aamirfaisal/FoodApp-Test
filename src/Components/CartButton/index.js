import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../Enums/StyleGuide'
import Icons from '../../Enums/Icons'

const CartButton = (props) => {
    const { style, onPress } = props
    return (
        <TouchableOpacity style={[styles.ButtonContainer, style]} onPress={onPress}>
            <View style={styles.BagView}>
                <Icons type='FontAwesome6' name={'bag-shopping'} size={20} color={COLORS.RED} />
            </View>
            <Text style={styles.CartLabel}>Add to cart </Text>
        </TouchableOpacity>
    )
}

export default CartButton

const styles = StyleSheet.create({
    ButtonContainer: {
        height: 53,
        width: 167,
        borderRadius: 53 / 2,
        backgroundColor: COLORS.RED,
        ...commonStyles.horizontalView
    },
    BagView: {
        height: 42,
        width: 42,
        borderRadius: 42 / 2,
        backgroundColor: COLORS.WHITE,
        marginLeft: '4%',
        ...commonStyles.center,
    },
    CartLabel: {
        fontSize: 15,
        fontFamily: FONTS.Poppins_Medium,
        color: COLORS.WHITE,
        paddingLeft: '5%'
    },

})