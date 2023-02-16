import {StyleSheet } from 'react-native'
import { LIGHT } from '../../theme/light';

export const styles = StyleSheet.create({
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderRadius: 10,
    fontSize: LIGHT.FONT_SIZE.LG,
    elevation:  6,
  }
});
