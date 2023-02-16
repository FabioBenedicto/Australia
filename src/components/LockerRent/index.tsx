import React from 'react';
import { Image, View } from 'react-native';

import { MyLockerText } from '../MyLockerText';

import LockerImage from '../../assets/LockerImage.png';

import { LIGHT } from '../../theme/light';

import { DARK } from '../../theme/dark';
import { styles } from './styles';

export interface LockerRentProps {
  darkTheme: boolean;
}

export function LockerRent({ darkTheme }: LockerRentProps) {
  return (
    <View
      style={[styles.container,
      {
        backgroundColor: darkTheme
          ? DARK.COLORS.BACKGROUND_PANEL
          : LIGHT.COLORS.BACKGROUND_PANEL
      }
      ]}
    >
      <Image source={LockerImage} style={styles.image} />
      <View>
        <MyLockerText
          fontSize={LIGHT.FONT_SIZE.LG}
          color={darkTheme
            ? DARK.COLORS.TEXT_PRIMARY
            : LIGHT.COLORS.TEXT_PRIMARY}
        >
          Armário 000
        </MyLockerText>
        <MyLockerText
          fontSize={LIGHT.FONT_SIZE.MD}
          color={darkTheme
            ? DARK.COLORS.TEXT_SECONDARY
            : LIGHT.COLORS.TEXT_SECONDARY}
        >
          Alugado em 00/00/00
        </MyLockerText>
      </View>
    </View>
  );
}
