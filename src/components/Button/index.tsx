import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, ActivityIndicator } from 'react-native';

import { MyLockerText } from "../MyLockerText";

import { styles } from "./styles";

import light from '../../theme/light';
import dark from '../../theme/dark';

export interface ButtonProps extends TouchableOpacityProps {
    loading: boolean;
    children: ReactNode;
    darkTheme: boolean;
}

export function Button({ loading, children, darkTheme, ...props }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: darkTheme ? loading ? dark.COLORS.BACKGROUND_BUTTON_LOADING : dark.COLORS.BACKGROUND_BUTTON : loading ? light.COLORS.BACKGROUND_BUTTON_LOADING : light.COLORS.BACKGROUND_BUTTON }]} {...props}>
            <View style={styles.content}>
                {
                    loading
                        ? <ActivityIndicator
                            size="large"
                            color={darkTheme ? dark.COLORS.TEXT_BUTTON : light.COLORS.TEXT_BUTTON}
                        />
                        : <MyLockerText
                            fontFamily={light.FONT_FAMILY.BOLD}
                            fontSize={light.FONT_SIZE.SEMILG}
                            color={darkTheme ? dark.COLORS.TEXT_BUTTON : light.COLORS.TEXT_BUTTON}
                        >
                            {children}
                        </MyLockerText>
                }
            </View>
        </TouchableOpacity >
    )
}
