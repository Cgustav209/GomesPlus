import { StyleSheet, View, Text } from "react-native";

export default function Emblema({ categoria }) {
  return (
    <View styles={styles.emblema}>
      <Text styles={styles.textoCategoria}>{categoria}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  emblema: {
    backgroundColor: "#fbff00",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },

  textoCategoria: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: 600,
  },
});
