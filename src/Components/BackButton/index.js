import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, commonStyles } from '../../Enums/StyleGuide';
import Icons from '../../Enums/Icons';

const BackButton = (props) => {
    const { style, iconColor, onPress } = props
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.ButtonContainer, style]} onPress={onPress}>
            <Icons type="AntDesign" name="left" color={iconColor ? iconColor : COLORS.RED} size={13} />
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    ButtonContainer: {
        height: 32,
        width: 32,
        borderRadius: 8,
        backgroundColor: COLORS.WHITE,
        ...commonStyles.center
    }
})