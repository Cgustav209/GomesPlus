import Emblema from "./Emblema";
import Botao from "./Botao";
import { View, Text, StyleSheet, Image } from "react-native";
import titulo from "./Titulo";

export default function CartaoFilme({ poster, titulo, genero, ano, onPress }) {
  return (
    <View style={styles.cartao}>
      <Image style={styles.poster} source={{ uri: poster }} />
      <View style={styles.info}>
        <View>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.ano}>{ano}</Text>
        </View>

        <Emblema categoria={genero} />
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
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffff",
    marginTop: 12,
  },
  ano: {
    fontSize: 12,
    color: "#cace00ff",
    marginBottom: 6,
  },
});
