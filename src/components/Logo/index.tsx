import React from "react";
import { Image } from "react-native";

import MyLockerLogo from '../../assets/MyLockerLogo.png';
import MyLockerLogoPaintedWhite from '../../assets/ShortLogoWhite.png';

import { styles } from "./styles";

export interface LogoProps {
    darkTheme: boolean;
}

export function Logo({ darkTheme }: LogoProps) {
    return (
        <Image source={darkTheme ? MyLockerLogoPaintedWhite : MyLockerLogo} style={styles.image} />
    )
}
