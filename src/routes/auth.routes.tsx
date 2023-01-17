import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import useDarkTheme from '../hooks/useDarkTheme';
import LIGHT from '../theme/light';
import DARK from '../theme/dark';
import { StatusBar } from 'expo-status-bar';

export default function AuthRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();
    const { darkTheme, setDarkTheme } = useDarkTheme();

    return (
        <Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="LoginScreen" component={LoginScreen} />
        </Navigator>
    );
}
