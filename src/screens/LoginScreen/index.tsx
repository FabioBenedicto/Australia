import React, { useEffect, useState } from "react";

import { ScrollView, Keyboard, KeyboardAvoidingView, View, TouchableWithoutFeedback } from 'react-native';

import { authorizationStyles } from '../../styles/authorizationStyles';

import useDarkTheme from "../../hooks/useDarkTheme";

import { Logo } from "../../components/Logo";
import { MyLockerText } from "../../components/MyLockerText";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Dimensions } from 'react-native';
import LIGHT from "../../theme/light";
import DARK from "../../theme/dark";
import { MyLockerTextInput } from "../../components/MyLockerTextInput";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { useToast } from "react-native-toast-notifications";
import { InputNotEditable } from "../../components/InputNotEditable";

import { Link } from "../../components/Link";
import styles from "./styles";

export function LoginScreen() {
    const { darkTheme, setDarkTheme } = useDarkTheme();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [loginWithEmailSucceed, setLoginWithEmailSucceed] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const forgotEmailToast = () => {
        toast.show('Seu email institucional segue o seguinte formato: "clRA@g.unicamp.br"');
    };

    const handleEmailVerification = () => {
        const requestBody = {
            email,
        };
        setLoginWithEmailSucceed(true);
        console.log(requestBody);
    };

    const handlePasswordVerification = async () => {
        const requestBody = {
            email,
            password,
        };
        console.log(requestBody);
    };


    return (
        <Container>

            <Logo darkTheme={false} />

            <View style={styles.inputContainer}>

                <View style={styles.textContainer}>

                    <MyLockerText fontSize={LIGHT.FONT_SIZE.LG}>
                        Entrar
                    </MyLockerText>

                    <MyLockerText color={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}>
                        {
                            loginWithEmailSucceed
                                ? 'Digite sua senha para fazer login'
                                : 'Digite seu e-mail da Unicamp'
                        }
                    </MyLockerText>

                </View>

                {
                    loginWithEmailSucceed
                        ? <>
                            <InputNotEditable value={email} darkTheme={darkTheme} />
                            <View style={styles.inputPassword}>
                                <MyLockerTextInput
                                    isPasswordTextInput
                                    value={password}
                                    onChangeText={(value) => { setPassword(value); }}
                                    darkTheme={darkTheme}
                                />
                            </View>
                        </>
                        : <MyLockerTextInput
                            value={email}
                            onChangeText={(value) => { setEmail(value); }}
                            autoCapitalize='none'
                            darkTheme={darkTheme}
                        />

                }

                <Link darkTheme={false}>
                    {
                        loginWithEmailSucceed
                            ? 'Esqueceu sua senha?'
                            : 'Esqueceu seu e-mail?'
                    }
                </Link>

            </View>

            <Button
                loading={loading}
                onPress={loginWithEmailSucceed ? handlePasswordVerification : handleEmailVerification}
                darkTheme={darkTheme}
            >

                Continuar
            </Button>

        </Container>
    )
}
