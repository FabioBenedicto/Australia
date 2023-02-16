import React, { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { MyLockerText } from "../MyLockerText";

import { LIGHT } from "../../theme/light";

import { styles } from "./styles";

export interface LinkProps extends TouchableOpacityProps {
    children: ReactNode;
    darkTheme: boolean;
}

export function Link({ children, darkTheme, ...props }: LinkProps) {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <MyLockerText color={LIGHT.COLORS.BACKGROUND_BUTTON}>
                {children}
            </MyLockerText>
        </TouchableOpacity>
    )
}

