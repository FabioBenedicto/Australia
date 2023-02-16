import React from "react";
import { Image, View } from "react-native";

import { MyLockerText } from "../MyLockerText";

import { Gear } from "phosphor-react-native";

import DefaultProfilePicture from '../../assets/DefaultProfilePicture.jpg';

import { LIGHT } from "../../theme/light";

import { DARK } from "../../theme/dark";
import { styles } from "./styles";

export interface HeaderProps {
  color?: String;
  name?: String;
  email?: String;
  darkTheme: boolean;
}

export function Header({ color, name, email, darkTheme }: HeaderProps) {
  return (
    <>
      <View style={styles.colorContainer}>
        <Gear
          size={LIGHT.FONT_SIZE.SEMILG}
          weight="fill"
          color={darkTheme
            ? DARK.COLORS.TEXT_PRIMARY
            : LIGHT.COLORS.TEXT_PRIMARY}
        />
        </View>
        <View style={styles.informationContainer}>
          <Image
            source={DefaultProfilePicture}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <MyLockerText
              fontSize={LIGHT.FONT_SIZE.LG}
              color={darkTheme
                ? DARK.COLORS.TEXT_PRIMARY
                : LIGHT.COLORS.TEXT_PRIMARY}
            >
              Nome Sobrenome
            </MyLockerText>
            <MyLockerText
              color={darkTheme
                ? DARK.COLORS.TEXT_SECONDARY
                : LIGHT.COLORS.TEXT_SECONDARY}
            >
              {
                email
                ? email
                : 'e-mail@g.unicamp.br'
              }
            </MyLockerText>
          </View>
        </View>
        </>
  );
}
