import React from "react";

import { View } from "react-native";
import { Button } from "../../components/Button";

import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { LockerRent } from "../../components/LockerRent";
import { MyLockerText } from "../../components/MyLockerText";

import { DARK } from "../../theme/dark";
import { LIGHT } from "../../theme/light";

import { styles } from "./styles";

export function HomeScreen() {
  const darkTheme = true;
  const locker = false;
  return (
    <Container isAuthContainer={false} darkTheme={darkTheme}>
      <Header darkTheme={darkTheme} />
    <View style={styles.containerWithoutHeader}>
      <View style={{width: '100%'}}>
      <View style={styles.textContainer}>
        <MyLockerText
          fontFamily={LIGHT.FONT_FAMILY.BOLD}
          fontSize={LIGHT.FONT_SIZE.LG}
          color={darkTheme
            ? DARK.COLORS.TEXT_PRIMARY
            : LIGHT.COLORS.TEXT_PRIMARY}
        >
          Meus armários
        </MyLockerText>
        <View
          style={[
            styles.line,
            {
              borderBottomColor: darkTheme
                ? DARK.COLORS.TEXT_SECONDARY
                : LIGHT.COLORS.TEXT_SECONDARY
            }
          ]}
        />
      </View>
      <View style={styles.lockerRentContainer}>
          <LockerRent darkTheme={darkTheme}/>
          </View>
      </View>
      <Button loading={false} darkTheme={darkTheme}>
        Alugar um Armário
      </Button>
      </View>
    </Container>
  );
}
