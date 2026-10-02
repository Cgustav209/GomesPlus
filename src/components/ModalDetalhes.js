import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ModalDetalhes({ filme, onClose }) {
  return (
    <Modal
      visible={filme !== null}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {filme && (
            <>
              {/* Imagem do Pôster */}
              <Image
                source={{ uri: filme.poster }}
                style={styles.modalPoster}
              />

              <Text style={styles.modalTitulo}>{filme.titulo}</Text>

              <View style={styles.modalDetalhesLinha}>
                <Text style={styles.modalAno}>{filme.ano}</Text>
                <Text style={styles.modalGenero}>• {filme.genero}</Text>
              </View>

              <Text style={styles.modalSubtitulo}>Sinopse</Text>
              <Text style={styles.modalSinopse}>{filme.sinopse}</Text>

              {/* Botão de Fechar */}
              <TouchableOpacity style={styles.botaoFechar} onPress={onClose}>
                <Text style={styles.textoBotaoFechar}>Fechar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#1a1d13",
    borderRadius: 15,
    padding: 22,
    width: "100%",
    maxWidth: 400,
    borderWidth: 1,
    borderColor: "#cace00ff",
  },
  modalPoster: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 16,
    resizeMode: "cover",
  },
  modalTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  modalDetalhesLinha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  modalAno: {
    fontSize: 14,
    color: "#cace00ff",
  },
  modalGenero: {
    fontSize: 14,
    color: "#ccc",
  },
  modalSubtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  modalSinopse: {
    fontSize: 14,
    color: "#aaa",
    lineHeight: 20,
    marginBottom: 24,
  },
  botaoFechar: {
    backgroundColor: "#cace00ff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotaoFechar: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
