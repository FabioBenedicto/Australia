import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

interface DarkThemeContextType {
    darkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  }

export interface DarkThemeContextProviderProps {
    children: ReactNode;
}

export const DarkThemeContext = createContext({} as DarkThemeContextType);

export function DarkThemeContextProvider({ children } : DarkThemeContextProviderProps) {

    const [darkTheme, setDarkTheme] = useState(false);

    const SetCookie = async () => {
        await AsyncStorage.setItem('darkMode', darkTheme.toString());
    }

    useEffect(() => {
        try {
            SetCookie();
        } catch (e) {
            console.log(e);
        }
    }, [darkTheme]);

    return (
        <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
      </DarkThemeContext.Provider>
    );
}
