import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao({ titulo, onPress }) {
  return (
    // Botão personalizado
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#fbff00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },

  textoBotao: {
    color: "#110c0c",
    fontSize: 14,
    fontWeight: "bold",
  },
});
