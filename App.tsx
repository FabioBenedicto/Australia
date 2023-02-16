import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/Button';
import { MyLockerTextInput } from './src/components/MyLockerTextInput';
import { NavigationContainer } from '@react-navigation/native';
import { MyLockerText } from './src/components/MyLockerText';
import { LIGHT } from './src/theme/light';
import useDarkTheme from './src/hooks/useDarkTheme';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';
import { useEffect } from 'react';
import { DarkThemeContextProvider } from './src/contexts/DarkThemeContext';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import AuthRoutes from './src/routes/auth.routes';
import { DARK } from './src/theme/dark';
import { ToastProvider } from 'react-native-toast-notifications';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const darkTheme = true;

  return (
    <DarkThemeContextProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={darkTheme ? DARK.COLORS.HEADER : LIGHT.COLORS.BACKGROUND_HEADER} />
        <AuthRoutes />
      </NavigationContainer>
    </DarkThemeContextProvider>

  );
}


