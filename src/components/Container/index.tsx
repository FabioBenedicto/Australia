import React, { ReactNode, useEffect, useState } from "react";
import {
  Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback,
  View
} from 'react-native';

import { DARK } from "../../theme/dark";
import { LIGHT } from "../../theme/light";

import { styles } from "./styles";

export interface ContainerProps {
  children: ReactNode;
  isAuthContainer?: boolean;
  isRentLockerContainer?: boolean;
  darkTheme: boolean;
}

export function Container({ children, isAuthContainer, isRentLockerContainer, darkTheme }: ContainerProps) {
  const [containerHeight, setContainerHeight] = useState(0);
  const [isKeyboardVisible, SetisKeyboardVisible] = useState(false);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  }

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
      onLayout={(event) => {
        if (!isKeyboardVisible) {
          setContainerHeight(event.nativeEvent.layout.height);
        }
      }}
      bounces={false}
    >
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <ScrollView bounces={false}>
            <View
              style={[
                styles.container,
                {
                  height: containerHeight,
                  paddingHorizontal: isAuthContainer ? '6%' : 0,
                  backgroundColor: darkTheme
                    ? DARK.COLORS.BACKGROUND
                    : LIGHT.COLORS.BACKGROUND
                }
              ]}
            >
              {children}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

