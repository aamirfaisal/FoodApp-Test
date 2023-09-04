import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons'

const Icons  = ({ type = 'Ionicons', color = '#cacfcf', size = 20, name = 'search', customStyle }) => {
    switch (type) {
        case 'Ionicons':
            return <Ionicons name={name} style={customStyle} size={size} color={color} />;
        case 'FontAwesome':
            return <FontAwesome name={name} style={customStyle} size={size} color={color} />;
        case 'FontAwesome5':
            return <FontAwesome5 name={name} style={customStyle} size={size} color={color} />;
            case 'FontAwesome6':
            return <FontAwesome6 name={name} style={customStyle} size={size} color={color} />;
        case 'Feather':
            return <Feather name={name} style={customStyle} size={size} color={color} />;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} style={customStyle} size={size} color={color} />;
        case 'AntDesign':
            return <AntDesign name={name} style={customStyle} size={size} color={color} />;
        case 'Entypo':
            return <Entypo name={name} style={customStyle} size={size} color={color} />;
        case 'Foundation':
            return <Foundation name={name} style={customStyle} size={size} color={color} />;
        case 'MaterialIcons':
            return <MaterialIcons name={name} style={customStyle} size={size} color={color} />;
        case 'Fontisto':
            return <Fontisto name={name} style={customStyle} size={size} color={color} />;
        case 'SimpleLineIcons':
            return <SimpleLineIcons name={name} style={customStyle} size={size} color={color} />;
        case 'EvilIcons':
            return <EvilIcons name={name} style={customStyle} size={size} color={color} />;
            case 'Octicons':
            return <Octicons name={name} style={customStyle} size={size} color={color} />;
        default:
            return <Ionicons name={name} style={customStyle} size={size} color={color} />;
    }
};

export default Icons;
