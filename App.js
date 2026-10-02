import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
// Estilos
import { styles } from "./src/theme/styles/styles";
// Componentes
import ModalDetalhes from "./src/components/ModalDetalhes";
import CartaoFilme from "./src/components/CartaoFilme";
import Titulo from "./src/components/Titulo";

const catalogo = [
  {
    id: 1,
    categoria: "filme",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    titulo: "Interestelar",
    genero: "Ficção Científica",
    ano: 2014,
    sinopse:
      "Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.",
  },
  {
    id: 2,
    categoria: "filme",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    titulo: "Parasita",
    genero: "Suspense / Drama",
    ano: 2019,
    sinopse:
      "Uma família pobre se infiltra na vida de uma família rica, com consequências imprevisíveis.",
  },
  {
    id: 3,
    categoria: "filme",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    titulo: "Duna",
    genero: "Ficção Científica",
    ano: 2021,
    sinopse:
      "Um jovem nobre assume o controle do planeta mais perigoso do universo.",
  },
  {
    id: 4,
    categoria: "filme",
    poster: "https://image.tmdb.org/t/p/w500/wM0aX5L1i4oO6oE3RzW1r93F2B.jpg",
    titulo: "Harry Potter",
    genero: "Fantasia / Aventura",
    ano: 2001,
    sinopse:
      "Um jovem bruxo descobre seus poderes e começa sua jornada na Escola de Magia de Hogwarts.",
  },
  {
    id: 5,
    categoria: "filme",
    poster: "https://image.tmdb.org/t/p/w500/98t7yFqFUKXwI2uGq7H2b8d54w2.jpg",
    titulo: "Senhor dos Anéis",
    genero: "Fantasia / Aventura",
    ano: 2001,
    sinopse:
      "Um hobbit parte em uma missão épica para destruir um anel poderoso e salvar a Terra-média.",
  },
  {
    id: 6,
    categoria: "serie",
    poster: "https://image.tmdb.org/t/p/w500/3xnWa9f4Gl0G8n6xO1zHRhEKZz2.jpg",
    titulo: "Breaking Bad",
    genero: "Drama / Crime",
    ano: 2008,
    sinopse:
      "Um professor de química começa a produzir metanfetamina para garantir o futuro da família.",
  },
  {
    id: 7,
    categoria: "serie",
    poster: "https://image.tmdb.org/t/p/w500/uF63AOWt5d4d3LhB8Lh8b4h4yHj.jpg",
    titulo: "Stranger Things",
    genero: "Ficção Científica",
    ano: 2016,
    sinopse:
      "Um grupo de crianças enfrenta forças sobrenaturais em uma pequena cidade.",
  },
  {
    id: 8,
    categoria: "anime",
    poster: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjTEXpNtaEpUmVyhM.jpg",
    titulo: "Attack on Titan",
    genero: "Ação / Drama",
    ano: 2013,
    sinopse:
      "A humanidade vive atrás de enormes muralhas para se proteger de gigantes.",
  },
  {
    id: 9,
    categoria: "anime",
    poster: "https://image.tmdb.org/t/p/w500/tCpeRkS0b6k1Hj2pPibCmvXU5w4.jpg",
    titulo: "Death Note",
    genero: "Thriller Psicológico",
    ano: 2006,
    sinopse:
      "Um estudante encontra um caderno capaz de matar qualquer pessoa cujo nome seja escrito nele.",
  },
  {
    id: 10,
    categoria: "anime",
    poster: "https://image.tmdb.org/t/p/w500/x31xi43xZl9KqXk9G4AUMuB36P.jpg",
    titulo: "Naruto",
    genero: "Ação / Aventura",
    ano: 2002,
    sinopse:
      "Um jovem ninja busca reconhecimento e sonha em se tornar o Hokage de sua vila.",
  },
  {
    id: 11,
    categoria: "anime",
    poster: "https://image.tmdb.org/t/p/w500/409k5lP84T8J2Zk7x3l67n5Yl7y.jpg",
    titulo: "Dragon Ball",
    genero: "Ação / Artes Marciais",
    ano: 1986,
    sinopse:
      "Goku reúne as Esferas do Dragão e enfrenta inimigos poderosos para proteger a Terra.",
  },
];

export default function App() {
  // Estado que guarda o filme selecionado
  // Comeca como null, ou seja, nenhum filme selecionado
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  // guarda a categoria selicionada para filtrar o catalogo, começa como 'todos' para mostrar tudo
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");

  // Filter() cria uma nova lista filtrada pelo intem informada
  const filmes = catalogo.filter((item) => item.categoria === "filme");
  const series = catalogo.filter((item) => item.categoria === "serie");
  const animes = catalogo.filter((item) => item.categoria === "anime");

  //Funcao responsavel por renderizar os filmes, recebe um filme e retorna um CartaoFilme com as props do filme e a funcao onPress para selecionar o filme
  const renderizarFilmes = (filme) => (
    <CartaoFilme
      //key ajudar a identificar cada item da lista
      key={filme.id}
      // o Spread (. . .)  envia as informacoes do filme como props para o CartaoFilme, ou seja, poster, titulo, genero, ano e sinopse
      {...filme}
      //quando o usuario clicar no botao "Ver detalhes" do CartaoFilme, a funcao onPress vai ser chamada e vai atualizar o estado filmeSelecionado com o filme clicado, ou seja, o filme selecionado vai ser exibido na tela de detalhes
      onPress={() => {
        console.log(filme.titulo, "Selecionado");
        setFilmeSelecionado(filme);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.logo}>GomesPlus+</Text>
        <View style={styles.filtroContainer}>
          {[
            { key: "todos", label: "Todos" },
            { key: "filme", label: "Filmes" },
            { key: "serie", label: "Series" },
            { key: "anime", label: "Animes" },
          ].map((filtro) => (
            <TouchableOpacity
              key={filtro.key}
              style={[
                styles.filtroBotao,
                categoriaSelecionada === filtro.key && styles.filtroBotaoAtivo,
              ]}
              onPress={() => setCategoriaSelecionada(filtro.key)}
            >
              <Text
                style={[
                  styles.filtroTexto,
                  categoriaSelecionada === filtro.key &&
                    styles.filtroTextoAtivo,
                ]}
              >
                {filtro.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {categoriaSelecionada === "todos" ? (
          <>
            <Titulo texto={"🎥Filmes"} />
            {filmes.map(renderizarFilmes)}

            <Titulo texto={"📺Series"} />
            {series.map(renderizarFilmes)}

            <Titulo texto={"🎌Animes"} />
            {animes.map(renderizarFilmes)}
          </>
        ) : (
          <>
            <Titulo
              texto={
                categoriaSelecionada === "filme"
                  ? "🎥Filmes"
                  : categoriaSelecionada === "serie"
                    ? "📺Series"
                    : "🎌Animes"
              }
            />
            {catalogo
              .filter((item) => item.categoria === categoriaSelecionada)
              .map(renderizarFilmes)}
          </>
        )}
      </ScrollView>
      {/* MODAL DE DETALHES */}
      <ModalDetalhes
        filme={filmeSelecionado}
        onClose={() => setFilmeSelecionado(null)}
      />
    </View>
  );
}
