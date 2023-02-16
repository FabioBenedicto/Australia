import { StyleSheet } from 'react-native';
import { LIGHT } from '../../theme/light';

export const styles = StyleSheet.create({
    input: {
        maxWidth: '100%',
        alignSelf: 'center',
        fontSize: LIGHT.FONT_SIZE.MD,
        borderRadius: 20,
        padding: 10,
        elevation: 6,
        marginBottom: 10,
    }
});
