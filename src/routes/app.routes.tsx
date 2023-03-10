import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import useDarkTheme from '../hooks/useDarkTheme';
import { LIGHT } from '../theme/light';
import { DARK } from '../theme/dark';

export default function AppRoutes() {
    const { Navigator, Screen } = createStackNavigator();
    const { darkTheme, setDarkTheme } = useDarkTheme();

    return (
        <Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: DEFAULT.COLORS.BLUE.MEDIUM,
                },
                cardStyle: {
                    backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND : LIGHT.COLORS.BACKGROUND,
                }
            }}
        >
            <Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Perfil' }} />
            <Screen name="RentLockerScreen" component={RentLockerScreen} />
            <Screen name="PaymentScreen" component={PaymentScreen} />
            <Screen name="ConfigurationScreen" component={ConfigurationScreen} options={{ title: 'Configurações' }} />
            <Screen name="ApmScreen" component={ApmScreen} options={{ title: 'APM' }} />

        </Navigator>
    );
}
