import { Text, StyleSheet } from "react-native";

export default function titulo({ Texto }) {
  return <Text style={styles.titulo}>{Texto}</Text>;
}

const styles = StyleSheet.create({
  titulo: {},
});
