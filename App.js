import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CartaoFilme from './components/CartaoFilme';
import { useState } from 'react';
import Titulo from './components/Titulo';
import { TouchableOpacity } from 'react-native';


const catalogo = [
  {
    id: 1,
    categoria: 'filme',
    poster: '🚀',
    titulo: 'Interestelar',
    genero: 'Ficção Científica',
    ano: 2014,
    sinopse:
      'Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.',
  },
  {
    id: 2,
    categoria: 'filme',
    poster: '🏠',
    titulo: 'Parasita',
    genero: 'Thriller',
    ano: 2019,
    sinopse:
      'Uma família pobre se infiltra na vida de uma família rica, com consequências imprevisíveis.',
  },
  {
    id: 3,
    categoria: 'filme',
    poster: '🏜️',
    titulo: 'Duna',
    genero: 'Ficção Científica',
    ano: 2021,
    sinopse:
      'Um jovem nobre assume o controle do planeta mais perigoso do universo.',
  },
  {
    id: 4,
    categoria: 'filme',
    poster: '🪄',
    titulo: 'Harry Potter',
    genero: 'Fantasia / Aventura',
    ano: 2001,
    sinopse:
      'Um jovem bruxo descobre seus poderes e começa sua jornada na Escola de Magia de Hogwarts.',
  },
  {
    id: 5,
    categoria: 'filme',
    poster: '💍',
    titulo: 'Senhor dos Anéis',
    genero: 'Fantasia / Aventura',
    ano: 2001,
    sinopse:
      'Um hobbit parte em uma missão épica para destruir um anel poderoso e salvar a Terra-média.',
  },
  {
    id: 6,
    categoria: 'serie',
    poster: '🧪',
    titulo: 'Breaking Bad',
    genero: 'Drama / Crime',
    ano: 2008,
    sinopse:
      'Um professor de química começa a produzir metanfetamina para garantir o futuro da família.',
  },
  {
    id: 7,
    categoria: 'serie',
    poster: '🔦',
    titulo: 'Stranger Things',
    genero: 'Ficção Científica',
    ano: 2016,
    sinopse:
      'Um grupo de crianças enfrenta forças sobrenaturais em uma pequena cidade.',
  },
  {
    id: 8,
    categoria: 'anime',
    poster: '⚔️',
    titulo: 'Attack on Titan',
    genero: 'Ação / Drama',
    ano: 2013,
    sinopse:
      'A humanidade vive atrás de enormes muralhas para se proteger de gigantes.',
  },
  {
    id: 9,
    categoria: 'anime',
    poster: '📓',
    titulo: 'Death Note',
    genero: 'Thriller Psicológico',
    ano: 2006,
    sinopse:
      'Um estudante encontra um caderno capaz de matar qualquer pessoa cujo nome seja escrito nele.',
  },
  {
    id: 10,
    categoria: 'anime',
    poster: '🍥',
    titulo: 'Naruto',
    genero: 'Ação / Aventura',
    ano: 2002,
    sinopse:
      'Um jovem ninja busca reconhecimento e sonha em se tornar o Hokage de sua vila.',
  },
  {
    id: 11,
    categoria: 'anime',
    poster: '🐉',
    titulo: 'Dragon Ball',
    genero: 'Ação / Artes Marciais',
    ano: 1986,
    sinopse:
      'Goku reúne as Esferas do Dragão e enfrenta inimigos poderosos para proteger a Terra.',
  },
];

export default function App() {

  // Estado que guarda o filme selecionado
  // Comeca como null, ou seja, nenhum filme selecionado
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  // guarda a categoria selicionada para filtrar o catalogo, começa como 'todos' para mostrar tudo
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');


  // Filter() cria uma nova lista filtrada pelo intem informada
  const filmes = catalogo.filter((item) => item.categoria === 'filme');
  const series = catalogo.filter((item) => item.categoria === 'serie');
  const animes = catalogo.filter((item) => item.categoria === 'anime');

  //Funcao responsavel por renderizar os filmes, recebe um filme e retorna um CartaoFilme com as props do filme e a funcao onPress para selecionar o filme
  const renderizarFilmes = (filme) => (
    <CartaoFilme
    //key ajudar a identificar cada item da lista
       key={filme.id}

       // o Spread (. . .)  envia as informacoes do filme como props para o CartaoFilme, ou seja, poster, titulo, genero, ano e sinopse
       {...filme}

       //quando o usuario clicar no botao "Ver detalhes" do CartaoFilme, a funcao onPress vai ser chamada e vai atualizar o estado filmeSelecionado com o filme clicado, ou seja, o filme selecionado vai ser exibido na tela de detalhes
       onPress={()=> setFilmeSelecionado(filme)}
    
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.logo}>GomesPlus</Text>
          <View style={styles.filtroContainer}>
          {[
            { key: 'todos', label: 'todos'},
            { key: 'filme', label: 'filmes'},
            { key: 'serie', label: 'series'},
            { key: 'anime', label: 'animes'},
          ].map((filtro) => (
            <TouchableOpacity 
            key={filtro.key} 
            style={[
              styles.filtroBotao,
              categoriaSelecionada === filtro.key && styles.filtroBotaoAtivo
            ]}
            onPress={() => setCategoriaSelecionada(filtro.key)}
            >
              <Text 
                style={[
                  styles.filtroTexto,
                  categoriaSelecionada === filtro.key && styles.filtroTextoAtivo
                ]}>

              {filtro.label}
              </Text>
            </TouchableOpacity>
           ))
          }
          </View>

          {categoriaSelecionada === 'todos' ? (
            <>
              <Titulo texto={"🎥Filmes"}/>
              {filmes.map(renderizarFilmes)}

              <Titulo texto={"📺Series"}/>
              {series.map(renderizarFilmes)}

              <Titulo texto={"🎌Animes"}/>
              {animes.map(renderizarFilmes)}
            </> 
          ) : (
            <>
              <Titulo 
              texto={categoriaSelecionada === 'filme' 
              ? '🎥Filmes'
              : categoriaSelecionada === 'serie' 
              ? '📺Series' 
              : '🎌Animes'
            }
              />
              {
                 catalogo.filter((item) => item.categoria === categoriaSelecionada).map(renderizarFilmes)
              }
            </>
          )}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0C10',
    justifyContent: 'center',
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  
  logo: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: -1,
    color: '#cace00ff',
    marginBottom: 24,
  },

  filtroContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  filtroBotao: {
    backgroundColor: '#cace00ff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginRight: 10,
    marginBottom: 10,
  },

  filtroBotaoAtivo: {
    backgroundColor: '#916300ff',
  },

  filtroTexto: {
    color: '#000000ff',
 
  },

  filtroTextoAtivo: {
    color: '#cace00ff',
  },
});