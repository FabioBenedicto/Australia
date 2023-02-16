import React, { useEffect, useState } from "react";
import { Alert, BackHandler, View } from 'react-native';



import { useToast } from "react-native-toast-notifications";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { InputNotEditable } from "../../components/InputNotEditable";
import { Logo } from "../../components/Logo";
import { MyLockerText } from "../../components/MyLockerText";
import { MyLockerTextInput } from "../../components/MyLockerTextInput";

import { Link } from "../../components/Link";

import { DARK } from "../../theme/dark";
import { LIGHT } from "../../theme/light";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export function LoginScreen() {
  const [darkTheme, setDarkTheme] = useState(true);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [loginWithEmailSucceed, setLoginWithEmailSucceed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const forgotEmailToast = () => {
    Alert.alert(
      'Esqueceu seu e-mail',
      'Seu email institucional segue o seguinte formato: "clRA@g.unicamp.br"',
    [{
      text: 'Entendi',
    }]
    )
  }

  const handleEmailVerification = () => {
    if(email != ''){
      setLoading(true);
      const requestBody = {
        email,
      };
      console.log(requestBody);
      setTimeout(() => {
        setLoading(false);
        setLoginWithEmailSucceed(true);
      }, 5000)
  }
}

  const handlePasswordVerification = async () => {
    if(password != ''){
      setLoading(true);
      const requestBody = {
        email,
        password,
      };
      console.log(requestBody);
      setTimeout(() => {
        setLoading(false);
    console.log(requestBody);
      }, 5000)
  };
}

  useEffect(() => {
    const backAction = () => {
      setLoginWithEmailSucceed(false);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Container isAuthContainer darkTheme={darkTheme}>
      <Logo darkTheme={darkTheme} />
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <MyLockerText
            fontSize={LIGHT.FONT_SIZE.LG}
            color={darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_PRIMARY}
          >
            Entrar
          </MyLockerText>

          <MyLockerText color={darkTheme
            ? DARK.COLORS.TEXT_SECONDARY
            : LIGHT.COLORS.TEXT_SECONDARY}
          >
            {
              loginWithEmailSucceed
                ? 'Digite sua senha para fazer login'
                : 'Digite seu e-mail da Unicamp'
            }
          </MyLockerText>
        </View>
        {
          loginWithEmailSucceed
            ? <>
              <InputNotEditable
                value={email}
                darkTheme={darkTheme}
              />
              <View style={styles.inputPassword}>
                <MyLockerTextInput
                  isPasswordTextInput
                  value={password}
                  onChangeText={(value) => { setPassword(value); }}
                  darkTheme={darkTheme}
                />
              </View>
            </>
            : <MyLockerTextInput
              value={email}
              onChangeText={(value) => { setEmail(value); }}
              autoCapitalize='none'
              darkTheme={darkTheme}
            />

        }
        <Link
          onPress={() => {navigation.navigate('ForgotPasswordScreen')}}
          darkTheme={false}
        >
          {
            loginWithEmailSucceed
              ? 'Esqueceu sua senha?'
              : 'Esqueceu seu e-mail?'
          }
        </Link>
      </View>
      <Button
        loading={loading}
        onPress={loginWithEmailSucceed
          ? handlePasswordVerification
          : handleEmailVerification}
        darkTheme={darkTheme}
      >
        Continuar
      </Button>
    </Container>
  )
}
