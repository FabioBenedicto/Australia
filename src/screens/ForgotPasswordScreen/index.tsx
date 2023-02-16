import React, { useEffect, useState } from 'react';
import { View, BackHandler  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { MyLockerText } from '../../components/MyLockerText';
import { MyLockerTextInput } from '../../components/MyLockerTextInput';
import { Button } from '../../components/Button';

import { DARK } from '../../theme/dark';
import { LIGHT } from '../../theme/light';

import { styles } from './styles';

export function ForgotPasswordScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const darkTheme = true;

  const handleEmailInput = () => {
    if (email != '') {
      setLoading(true);
      const requestBody = {
        email,
      };
      setTimeout(() => {
        console.log(requestBody);
        setLoading(false);
        navigation.navigate('VerifyEmailScreen');
      }, 2000);
    }
  };

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Container
      isAuthContainer
      darkTheme={darkTheme}
    >
      <Logo darkTheme={darkTheme} />
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <MyLockerText
            fontSize={LIGHT.FONT_SIZE.LG}
            color={darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_PRIMARY}
            textAlign='center'
          >
            Entrar
          </MyLockerText>
          <MyLockerText
            color={darkTheme
              ? DARK.COLORS.TEXT_SECONDARY
              : LIGHT.COLORS.TEXT_SECONDARY}
            textAlign='center'
          >
            Digite seu e-mail da Unicamp
          </MyLockerText>
        </View>
        <MyLockerTextInput
          placeholder='E-mail institucional'
          placeholderTextColor={darkTheme
            ? DARK.COLORS.TEXT_PLACEHOLDER
            : LIGHT.COLORS.TEXT_PLACEHOLDER}
          value={email}
          onChangeText={(value) => { setEmail(value); }}
          autoCapitalize='none'
          darkTheme={darkTheme}
        />

      </View>
      <Button
        onPress={handleEmailInput}
        loading={loading}
        darkTheme={darkTheme}
      >
        Continuar
      </Button>
    </Container>
  );
}
