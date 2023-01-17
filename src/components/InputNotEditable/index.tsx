import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import dark from '../../theme/dark';

export interface inputNotEditableProps {
    value: string;
    darkTheme: boolean;
}

export function InputNotEditable({ value, darkTheme }: inputNotEditableProps) {
    return (
        <TextInput
            value={value}
            editable={false}
            style={[styles.input, { backgroundColor: 'black' }]}
        />
    );
}
