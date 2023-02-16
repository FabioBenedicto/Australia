import React from 'react';
import { TextInput } from 'react-native';

import { LIGHT } from '../../theme/light';
import { DARK } from '../../theme/dark';

import { styles } from './styles';

export interface inputNotEditableProps {
  value: string;
  darkTheme: boolean;
}

export function InputNotEditable({ value, darkTheme }: inputNotEditableProps) {
  return (
    <TextInput
      value={value}
      editable={false}
      style={[
        styles.input,
        {
          backgroundColor: darkTheme
          ? DARK.COLORS.BACKGROUND_INPUT
          : LIGHT.COLORS.BACKGROUND_INPUT,
          color: darkTheme
          ? DARK.COLORS.TEXT_PRIMARY
          : LIGHT.COLORS.TEXT_PRIMARY,
        }
      ]}
    />
  );
}
