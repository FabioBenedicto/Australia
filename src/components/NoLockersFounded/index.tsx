import React from 'react';
import { Image, View } from 'react-native';

import { MyLockerText } from '../MyLockerText';

import NoLockerFoundedImage from '../../assets/NoLockersFounded.png';

import { DARK } from '../../theme/dark';
import { LIGHT } from '../../theme/light';

import { styles } from '../Button/styles';


export interface NoLockerFoundedProps {
  darkTheme: boolean;
}

export function NoLockersFounded({ darkTheme }: NoLockerFoundedProps) {
  return (
    <View>
      <Image
      source={NoLockerFoundedImage}
      style={styles.image}/>
      <MyLockerText
        fontFamily={LIGHT.FONT_FAMILY.MEDIUM}
        color={darkTheme
          ? DARK.COLORS.TEXT_HOME
          : LIGHT.COLORS.TEXT_HOME
        }
      >
        Nenhum armário alugado
      </MyLockerText>
    </View>
  );
}
