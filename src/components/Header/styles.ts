import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  colorContainer: {
    width: '100%',
    height: '20%',
    paddingTop: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '15%',
    transform: [{translateY: -20}],
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 250,
  },
  textContainer: {
    alignSelf: 'flex-end',
  }
});
