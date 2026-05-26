import { View, Text } from 'react-native';

export default function Emblema({categoria}) {
    return (
        <View styles={styles.emblema}>
            <Text styles={styles.textoCategoria}>{categoria}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
       emblema: {
        backgroundColor: '#2d2d2d',
        paddingVertical: 3,
        paddingHorizontal: 10, 
        borderRadius: 20,
        alignSelf: 'flex-start',

    },

    textoCategoria: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 600,
    },
});
