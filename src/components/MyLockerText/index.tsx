import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import light from '../../theme/light';

export interface MyLockerTextProps {
    fontFamily?: string;
    fontSize?: number;
    color?: string;
    children: ReactNode;
}

export function MyLockerText({ fontFamily = light.FONT_FAMILY.REGULAR, fontSize = light.FONT_SIZE.MD, color = light.COLORS.TEXT_PRIMARY, children }: MyLockerTextProps) {
    return (
        <Text style={{ fontFamily: fontFamily, fontSize: fontSize, color: color }}>
            {children}
        </Text>
    )
}
