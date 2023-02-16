import React, { ReactNode } from 'react';
import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { MyLockerText } from "../MyLockerText";

import { DARK } from '../../theme/dark';
import { LIGHT } from '../../theme/light';

import { styles } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  loading: boolean;
  darkTheme: boolean;
}

export function Button({ children, loading, darkTheme, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: darkTheme
            ? loading
              ? DARK.COLORS.BACKGROUND_BUTTON_LOADING
              : DARK.COLORS.BACKGROUND_BUTTON
            : loading
              ? LIGHT.COLORS.BACKGROUND_BUTTON_LOADING
              : LIGHT.COLORS.BACKGROUND_BUTTON
        }
      ]}
      activeOpacity={1}
      {...props}
    >

      <View style={styles.content}>
        {
          loading
            ? <ActivityIndicator
              size="large"
              color={darkTheme
                ? DARK.COLORS.TEXT_PRIMARY
                : LIGHT.COLORS.TEXT_PRIMARY}
            />
            : <MyLockerText
              fontFamily={LIGHT.FONT_FAMILY.BOLD}
              fontSize={LIGHT.FONT_SIZE.SEMILG}
              color={darkTheme
                ? DARK.COLORS.TEXT_BUTTON
                : LIGHT.COLORS.TEXT_BUTTON}
            >
              {children}
            </MyLockerText>
        }
      </View>

    </TouchableOpacity >
  )
}
