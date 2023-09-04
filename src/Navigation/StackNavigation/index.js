import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, MapScreen, Splash } from '../../Screens';
import { SCREEN } from '../../Enums/StyleGuide';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={SCREEN.Splash}>
        <Stack.Screen name={SCREEN.Splash} component={Splash} />
        <Stack.Screen name={SCREEN.Home} component={Home} />
        <Stack.Screen name={SCREEN.MapScreen} component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation
