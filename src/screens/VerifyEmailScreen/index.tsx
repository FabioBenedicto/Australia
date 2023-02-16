import React from "react";
import { View, Dimensions, FlatList } from 'react-native';

import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { MyLockerText } from "../../components/MyLockerText";

import { LIGHT } from "../../theme/light";
import { DARK } from "../../theme/dark";

import { styles } from './styles';
import { Link } from "../../components/Link";
import { Button } from "../../components/Button";
import { MyLockerCharTextInput } from "../../components/MyLockerCharInput";

export function VerifyEmailScreen() {
  const widthScreen = Dimensions.get('window').height;
  console.log(widthScreen);
  const darkTheme = true;

  const DATA = [
    {
      position: 'start',
    },
    {
      position: 'center',
    },
    {
      position: 'center',
    },
    {
      position: 'center',
    },
    {
      position: 'center',
    },
    {
      position: 'end',
    },
  ];

  return (
    <Container darkTheme={darkTheme}>

      <Logo darkTheme={darkTheme} />

      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>

          <MyLockerText
            fontSize={LIGHT.FONT_SIZE.LG}
            color={darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_SECONDARY}
            textAlign="center"
          >
            Verifique seu e-mail
          </MyLockerText>

          <MyLockerText
            color={darkTheme
              ? DARK.COLORS.TEXT_SECONDARY
              : LIGHT.COLORS.TEXT_SECONDARY}
            textAlign="center"
          >
            Digite o código enviado para o seu e-mail
          </MyLockerText>

        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            if (item.position != 'end') {
              return (
                <View style={{ marginRight: 10 }}>
                  <MyLockerCharTextInput darkTheme={darkTheme} />
                </View>
                )
            }
            return(<MyLockerCharTextInput darkTheme={darkTheme} />)
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={ widthScreen > 700 ? styles.contentContainer : null}
        >

        </FlatList>

        <Link darkTheme={darkTheme}>
          Reenviar código
        </Link>
      </View>

      <Button darkTheme={darkTheme} loading={false}>
        Continuar
      </Button>

    </Container>
  );
}
