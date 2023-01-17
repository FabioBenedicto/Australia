import { StyleSheet } from "react-native";
import light from "../../theme/light";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderColor: light.COLORS.TEXT_PRIMARY,
        alignItems: 'center',
        paddingRight: 25,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#EEEEEE',
    },

    textInput: {
        borderRadius: 10,
        padding: 25,
        justifyContent: 'flex-start',
        color: light.COLORS.TEXT_SECONDARY,
        flexGrow: 1,
        alignItems: 'center',
        fontSize: 20,
        backgroundColor: '#EEEEEE',
    },

})
