import React from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";

import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { MyLockerText } from "../../components/MyLockerText";
import { MyLockerTextInput } from "../../components/MyLockerTextInput";
import { DARK } from "../../theme/dark";
import { LIGHT } from "../../theme/light";

import { styles } from "./styles";

export function CreatePasswordScreen() {
  const darkTheme = true;

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
          Criar Senha
        </MyLockerText>
        <MyLockerText color={darkTheme
            ? DARK.COLORS.TEXT_SECONDARY
            : LIGHT.COLORS.TEXT_SECONDARY}
            textAlign='center'
          >
            Crie uma senha para sua conta
          </MyLockerText>
      </View>

      <View>
        <View style={styles.firstTextInput}>
        <MyLockerTextInput isPasswordTextInput darkTheme={darkTheme} />
        </View>
        <MyLockerTextInput isPasswordTextInput darkTheme={darkTheme} />
      </View>
      </View>
      <Button loading={false} darkTheme={darkTheme}>
        Continuar
      </Button>
    </Container>
  );
}
