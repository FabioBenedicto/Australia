import { StyleSheet } from "react-native";
import light from "../../theme/light";

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingVertical: 15,
        borderRadius: 15,
        marginBottom: 40,
    },

    content: {
        height: light.FONT_SIZE.LG,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
