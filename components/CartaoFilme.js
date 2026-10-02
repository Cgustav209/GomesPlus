import Emblema from "./Emplema";
import Botao from "./Botao";
import { View, Text, StyleSheet } from "react-native";
import titulo from "./Titulo";

export default function CartaoFilme({ poster, titulo, genero, ano, onPress }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.poster}>{poster}</Text>
      <View style={styles.info}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.ano}>{ano}</Text>
        <Emblema style={styles.genero} categoria={genero} />
        <Botao titulo="Ver detalhes" onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    flexDirection: "row",
    backgroundColor: "rgb(26, 29, 19) ",
    borderRadius: 15,
    padding: 14,
    marginBottom: 12,
    gap: 12,
  },

  poster: {
    fontSize: 80,
  },

  titulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffff",
  },
  ano: {
    fontSize: 12,
    color: "#cace00ff",
    marginBottom: 6,
  },
  genero: {
    fontSize: 12,
    color: "#cace00ff",
  },
});
