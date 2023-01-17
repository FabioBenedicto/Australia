import React, { ReactNode, useEffect, useState } from "react";
import { Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from "./styles";

export interface ContainerProps {
    children: ReactNode;
}

export function Container({ children }: ContainerProps) {

    const [containerHeight, setContainerHeight] = useState(0);
    const [isKeyboardVisible, SetisKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                SetisKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                SetisKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return (
        <ScrollView
            bounces={false}
            onLayout={(event) => {
                if (!isKeyboardVisible) {
                    setContainerHeight(event.nativeEvent.layout.height);
                }
            }}
        >
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <ScrollView bounces={false}>
                        <View style={[styles.container, { height: containerHeight }]}>
                            {children}
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>

    );
}

