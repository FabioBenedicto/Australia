import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CreatePasswordScreen } from '../screens/CreatePasswordScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RentLockerScreen } from '../screens/RentLockerScreen';
import { VerifyEmailScreen } from '../screens/VerifyEmailScreen';

export default function AuthRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator
            initialRouteName="CreatePasswordScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="LoginScreen" component={LoginScreen} />
            <Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
            <Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />
            <Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
            <Screen name="HomeScreen" component={HomeScreen} />
            <Screen name='RentLockerScreen' component={RentLockerScreen}/>
        </Navigator>
    );
}
