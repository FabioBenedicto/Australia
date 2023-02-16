import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import { LIGHT } from '../../theme/light';

export interface MyLockerTextProps {
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  textAlign?: "left" | "auto" | "right" | "center" | "justify" | undefined;
  children: ReactNode;
}

export function MyLockerText({
  fontFamily = LIGHT.FONT_FAMILY.REGULAR,
  fontSize = LIGHT.FONT_SIZE.MD,
  color = LIGHT.COLORS.TEXT_PRIMARY,
  textAlign = "left",
  children,
}: MyLockerTextProps) {
  return (
    <Text style={{
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color,
      textAlign: textAlign,
    }}>
      {children}
    </Text>
  )
}
