import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image,BackHandler } from 'react-native'
import React from 'react'
import BackButton from '../BackButton'
import Icons from '../../Enums/Icons'
import { COLORS, TEXT_STYLE, commonStyles, width } from '../../Enums/StyleGuide'
import { FoodImage } from '../../Enums/Images'
import { MoreItems } from '../../Constants'
import { useNavigation } from '@react-navigation/native'

const CoverContainer = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground imageStyle={{ borderRadius: 12 }} source={FoodImage} style={styles.BackgroundImage}>
            <View style={{ ...commonStyles.justifyView }}>
                {/* Back Button */}
                <BackButton onPress={() => BackHandler.exitApp()}/>
                {/* Add favorite Icon */}
                <TouchableOpacity style={styles.LikeIcon}>
                    <Icons type="Ionicons" name="heart" color={COLORS.WHITE} size={15} />
                </TouchableOpacity>
            </View>
            <View style={{ ...commonStyles.justifyView }}>
                <View style={styles.BottomContent}>
                    <Text style={styles.CardTitle}>Ground Beef Tacos</Text>
                </View>
                {/* Side Images */}
                <View>
                    {MoreItems.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} >
                                <Image source={item?.image} style={styles.SubImages} />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </ImageBackground>
    )
}

export default CoverContainer

const styles = StyleSheet.create({
    BackgroundImage: {
        height: 200,
        width: width * .9,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: '6%',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        justifyContent: 'space-between'
    },
    LikeIcon: {
        height: 28,
        width: 28,
        borderRadius: 28 / 2,
        backgroundColor: COLORS.RED,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '2%'
    },
    BottomContent: {

    },
    CardTitle: {
        ...TEXT_STYLE.boldTitle,
        width: '60%',
    },
    SubImages: {
        height: 40,
        width: 40,
        borderRadius: 5,
        marginTop: 5
    }
})