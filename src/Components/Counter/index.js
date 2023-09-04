import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icons from '../../Enums/Icons';
import { COLORS, TEXT_STYLE, commonStyles } from '../../Enums/StyleGuide';

const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const formatCount = (count) => {
        return count < 10 ? `0${count}` : count.toString();
    }

    return (
        <View style={styles.CounterContainer}>
            <TouchableOpacity style={styles.RemoveButton} onPress={decrementCounter}>
                <Icons type="Octicons" name="dash" color={COLORS.RED} size={16} />
            </TouchableOpacity>
            <Text style={styles.Count}>{formatCount(count)}</Text>
            <TouchableOpacity style={styles.AddButton} onPress={incrementCounter}>
                <Icons type="AntDesign" name="plus" color={COLORS.WHITE} size={16} />
            </TouchableOpacity>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    CounterContainer: {
        ...commonStyles.horizontalView,
        width: '28%',
        ...commonStyles.justifyView
    },
    RemoveButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.RED,
        ...commonStyles.center,
    },
    AddButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: COLORS.RED,
        ...commonStyles.center,
    },
    Count: {
        ...TEXT_STYLE.text_small_bold,
    },
});
