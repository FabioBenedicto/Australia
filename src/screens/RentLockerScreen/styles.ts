import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textContainer: {
    marginTop: 40,
    backgroundColor: 'red',
    width: '100%',
  },
  listsContainer: {
    alignSelf: 'flex-start',
  },
  textLeftMapLocker: {
    transform: [
      { rotate: "270deg" },
    ],
    alignSelf: 'center',
    backgroundColor: 'green',
    marginLeft: 0,
  },
});
