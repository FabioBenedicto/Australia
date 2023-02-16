import React, { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { Eye, EyeSlash } from 'phosphor-react-native';

import { LIGHT } from '../../theme/light';
import { DARK } from '../../theme/dark';

import { styles } from './styles';

export interface MyLockerTextInputProps extends TextInputProps {
    isPasswordTextInput?: boolean;
    darkTheme: boolean;
}

export interface ShowPasswordButtonProps {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  color: string;
}

export function ShowPasswordButton({showPassword, setShowPassword, color} : ShowPasswordButtonProps) {

    return (
        <TouchableOpacity onPress={() => { setShowPassword(!showPassword); }} style={styles.button}>
            {
                showPassword
                    ? <EyeSlash color={color} size={20} weight='bold'/>
                    : <Eye color={color} size={20} weight='bold'/>
            }
        </TouchableOpacity>
    )
}

export function MyLockerTextInput({ isPasswordTextInput, darkTheme, ...props }: MyLockerTextInputProps) {

    const [inputWidth, setInputWidth] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[styles.container, {backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND_INPUT : LIGHT.COLORS.BACKGROUND_INPUT}]}>
            <TextInput
                onLayout={(event) => {
                    setInputWidth(event.nativeEvent.layout.height);
                }}
                secureTextEntry={isPasswordTextInput ? !showPassword : false}
                cursorColor={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}
                style={[styles.textInput, {width: inputWidth,  color:  darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY, backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND_INPUT : LIGHT.COLORS.BACKGROUND_INPUT}]} {...props} />

              {
                isPasswordTextInput
                ? <ShowPasswordButton showPassword={showPassword} setShowPassword={setShowPassword} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}/>
                : null
              }
        </View>
    )
}
