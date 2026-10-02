import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0C10",
    justifyContent: "center",
    paddingTop: 56,
    paddingHorizontal: 20,
  },

  logo: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: -1,
    color: "#cace00ff",
    marginBottom: 24,
  },

  filtroContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },

  filtroBotao: {
    backgroundColor: "#cace00ff",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginRight: 10,
    marginBottom: 10,
  },

  filtroBotaoAtivo: {
    backgroundColor: "#916300ff",
  },

  filtroTexto: {
    color: "#000000ff",
    fontWeight: "bold",
  },

  filtroTextoAtivo: {
    color: "#cace00ff",
  },
});
