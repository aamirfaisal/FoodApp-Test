import { StyleSheet, View } from 'react-native';
import React from 'react';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS, FONTS } from '../../Enums/StyleGuide';
import Icons from '../../Enums/Icons';

const SwipeButton = () => {
    const X = useSharedValue(10);
    const animatedGestureHandler = useAnimatedGestureHandler({
        onActive: e => {
            if (e.translationX < 0) {
                X.value = -e.translationX;
            } else {
                X.value = e.translationX;
            }
        },
        onEnd: () => {
            if (X.value < 150) {
                X.value = withSpring(10);
            } else {
                X.value = withSpring(150); 
            }
        },
    });
    const InterpolateXInput = [0, 50];
    const AnimatedStyles = {
        swipeStyle: useAnimatedStyle(() => {
            return { transform: [{ translateX: X.value }] };
        }),

        swipeText: useAnimatedStyle(() => {
            return {
                opacity: interpolate(
                    X.value,
                    InterpolateXInput,
                    [1, 0],
                    Extrapolate.CLAMP,
                ),
                transform: [
                    {
                        translateX: interpolate(X.value, InterpolateXInput, [
                            0,
                            150,
                            Extrapolate.CLAMP,
                        ]),
                    },
                ],
            };
        }),
    };
    return (
        <GestureHandlerRootView>
            <View style={styles.ButtonContainer}>
                <PanGestureHandler onGestureEvent={animatedGestureHandler}>
                    <Animated.View
                        style={[styles.InnerCircle, AnimatedStyles.swipeStyle]}
                    >
                        <Icons type='AntDesign' name={'doubleright'} size={20} color={COLORS.DARK} />
                    </Animated.View>
                </PanGestureHandler>
                <Animated.Text style={[AnimatedStyles.swipeText, styles.TilteText]}>
                    {'Reached Drop Location'}
                </Animated.Text>
            </View>
        </GestureHandlerRootView>
    );
};

export default SwipeButton;

const styles = StyleSheet.create({
    ButtonContainer: {
        width: 248,
        height: 60,
        borderRadius: 28.5,
        backgroundColor: COLORS.RED,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TilteText: {
        fontSize: 12,
        color: COLORS.WHITE,
        fontFamily: FONTS.Poppins_Regular,
        position: 'absolute',
    },
    InnerCircle: {
        width: 67,
        height: 52,
        borderRadius: 30,
        backgroundColor: COLORS.WHITE,
        position: 'absolute', 
        justifyContent: 'center',
        alignItems: 'center',
        left: 0, 
    },
});
