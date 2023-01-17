import React, { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { MyLockerText } from "../MyLockerText";

import light from "../../theme/light";
import dark from "../../theme/dark";

import { styles } from "./styles";

export interface LinkProps extends TouchableOpacityProps {
    children: ReactNode;
    darkTheme: boolean;
}

export function Link({ children, darkTheme, ...props }: LinkProps) {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <MyLockerText color={darkTheme ? light.COLORS.BACKGROUND_BUTTON : dark.COLORS.BACKGROUND_BUTTON}>
                {children}
            </MyLockerText>
        </TouchableOpacity>
    )
}

