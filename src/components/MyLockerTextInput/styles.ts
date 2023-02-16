import { StyleSheet } from "react-native";
import { LIGHT } from "../../theme/light";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 6,

  },

  textInput: {
    borderRadius: 10,
    paddingVertical: 25,
    justifyContent: 'flex-start',
    color: LIGHT.COLORS.TEXT_SECONDARY,
    flexGrow: 1,
    alignItems: 'center',
    fontSize: 20,
  },

  button: {
    marginLeft: 10,
  }

});
