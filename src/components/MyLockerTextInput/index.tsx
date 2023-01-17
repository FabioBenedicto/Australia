import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Touchable, TouchableOpacity, TextInputProps, Dimensions } from 'react-native';


import { Eye, EyeSlash } from 'phosphor-react-native'

import { styles } from './styles';

export interface MyLockerTextInputProps extends TextInputProps {
    isPasswordTextInput?: boolean;
    darkTheme: boolean;
}


export function ShowPassword() {

    const [hidePassword, setHidePassword] = useState(true);

    return (
        <TouchableOpacity onPress={() => { setHidePassword(!hidePassword); }}>
            {
                hidePassword
                    ? <Eye color='black' size={20} />
                    : <EyeSlash color='black' size={20} />
            }
        </TouchableOpacity>
    )
}

export function MyLockerTextInput({ isPasswordTextInput, darkTheme, ...props }: MyLockerTextInputProps) {

    const [inputWidth, setInputWidth] = useState(0);

    return (
        <View style={styles.container}>
            <TextInput
                onLayout={(event) => {
                    setInputWidth(event.nativeEvent.layout.height);
                }}
                style={[styles.textInput, { width: inputWidth }]} {...props} />
            {
                isPasswordTextInput
                    ? <ShowPassword />
                    : null

            }
        </View>
    )
}
20
