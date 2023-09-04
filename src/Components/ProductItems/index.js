import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, TEXT_STYLE, commonStyles } from '../../Enums/StyleGuide'
import Icons from '../../Enums/Icons'

const ProductItems = ({ productGroup, handlePress }) => {
    return (
        <View style={styles.MainContainer}>
            {/* Title */}
            <Text style={styles.Title}>{productGroup.title}</Text>
            {productGroup.productItems.map((item, itemIndex) => (
                <View style={styles.SubContainer}
                    key={itemIndex}>
                    <View style={styles.ImageContainer}>
                        <Image source={item.image} style={styles.ItemImage} />
                        <Text style={styles.Name}>{item.name}</Text>
                    </View>
                    <View style={{ ...commonStyles.horizontalView }}>
                        <Text style={styles.Price}>+${item.price}</Text>
                        {/* Radio Buttons */}
                        <TouchableOpacity
                            onPress={() => handlePress(item)}>
                            {item.selected ?
                                (<Icons type='MaterialIcons' name={'radio-button-checked'} size={25} color={COLORS.RED} />)
                                :
                                (<Icons type='FontAwesome' name={'circle-thin'} size={25} color={COLORS.LIGHT} />)}
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default ProductItems

const styles = StyleSheet.create({
    MainContainer: {
        paddingHorizontal: '4%'
    },
    SubContainer: {
        ...commonStyles.justifyView,
        marginTop: '2%'
    },
    ImageContainer: {
        ...commonStyles.horizontalView
    },
    ItemImage: {
        height: 34,
        width: 34,
        borderRadius: 34 / 2,
        resizeMode: 'contain'
    },
    Name: {
        ...TEXT_STYLE.text_regular,
        marginLeft: '8%'
    },
    Price: {
        ...TEXT_STYLE.text_regular,
        fontSize: 12,
        marginRight: 14
    },
    Title: {
        fontSize: 18,
        fontFamily: FONTS.Poppins_Bold,
        color: COLORS.BLACK,
        marginTop: '2%'
    },
})