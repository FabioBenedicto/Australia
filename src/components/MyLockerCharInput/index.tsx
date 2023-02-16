import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { DARK } from "../../theme/dark";
import { LIGHT } from "../../theme/light";

import { styles } from "./styles";

export interface MyLockerCharTextInput extends TextInputProps {
  darkTheme: boolean;
}

export function MyLockerCharTextInput( {darkTheme, ...props} :  MyLockerCharTextInput){
  return(
    <TextInput
      style={[styles.textInput, {backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND_INPUT : LIGHT.COLORS.BACKGROUND_INPUT}]}
      maxLength={1}
      {...props}
    />
  );
}
