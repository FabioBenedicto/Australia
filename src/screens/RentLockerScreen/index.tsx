import React from "react";
import { Image, ScrollView, View } from 'react-native';

import { Container } from "../../components/Container";
import { MyLockerText } from "../../components/MyLockerText";

import LockerContainer from '../../assets/LockerContainer.png';

import { DARK } from "../../theme/dark";
import { LIGHT } from "../../theme/light";

import { styles } from "./styles";

export function RentLockerScreen() {
  const darkTheme = true;
  const mapLockers = [
    { Key: 'Sala 2', floor: 1, leftRoom: 'Sala 2', rightRoom: 'Sala 3', onPress: () => { } },
    { Key: 'Sala 3', floor: 1, onPress: () => { } },
    { Key: 'Sala 4', floor: 1, onPress: () => { } },

  ]

  const TEXT_LENGTH = 40
  const TEXT_HEIGHT = 14
  const OFFSET = TEXT_LENGTH / 2 - TEXT_HEIGHT / 2

  return (
    <Container isRentLockerContainer darkTheme={darkTheme}>
      <View style={styles.textContainer}>
        <MyLockerText
          fontFamily={LIGHT.FONT_FAMILY.BOLD}
          fontSize={LIGHT.FONT_SIZE.LG}
          color={darkTheme
            ? DARK.COLORS.TEXT_PRIMARY
            : LIGHT.COLORS.TEXT_PRIMARY}
          textAlign="center"
        >
          Alugue um Armário
        </MyLockerText>
        <MyLockerText
          fontFamily={LIGHT.FONT_FAMILY.REGULAR}
          fontSize={LIGHT.FONT_SIZE.MD}
          color={darkTheme
            ? DARK.COLORS.TEXT_SECONDARY
            : LIGHT.COLORS.TEXT_SECONDARY}
          textAlign="center"
        >
          Selecione o bloco de armários que você deseja.
        </MyLockerText>
      </View>

      <ScrollView
        horizontal
        style={{ backgroundColor: '#2D2E30', width: '100%', padding: 30,  borderRadius: 30, marginBottom: 40, marginLeft: '6%' }}
      >

        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', backgroundColor: 'red' }}>
          <View style={styles.textLeftMapLocker}>
              <MyLockerText
                fontSize={LIGHT.FONT_SIZE.LG}
                fontFamily={LIGHT.FONT_FAMILY.MEDIUM}
              >
                Sala 10
              </MyLockerText>
            </View>
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain', backgroundColor: 'yellow' }} />
            <View style={styles.textLeftMapLocker}>
              <MyLockerText
                fontSize={LIGHT.FONT_SIZE.LG}
                fontFamily={LIGHT.FONT_FAMILY.MEDIUM}
              >
                Sala 10
              </MyLockerText>
            </View>
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
            <View style={styles.textLeftMapLocker}>
              <MyLockerText
                fontSize={LIGHT.FONT_SIZE.LG}
                fontFamily={LIGHT.FONT_FAMILY.MEDIUM}
              >
                Sala 10
              </MyLockerText>
            </View>
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 40, marginTop: 10 }}>

            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
            <Image source={LockerContainer} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
          </View>
        </View>

      </ScrollView>
    </Container>
  )
}
