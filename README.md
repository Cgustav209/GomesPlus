
# 🎬💫 GomesPlus+

Um catálogo interativo de filmes, séries e animes mobile. Desenvolvido como projeto de estudo prático para dominar a construção de interfaces, componentização, manipulação de arrays e gerenciamento de estados utilizando o ecossistema do React Native.

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success)
![Tecnologias](https://img.shields.io/badge/Expo_|_React_Native-000020?logo=expo&logoColor=white)

| Tela Inicial | Tela de Detalhes (Modal) |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/a33798d4-c687-4279-92d8-2dbc196375a5" width="280" alt="HomeGomesPlus" /> | <img src="https://github.com/user-attachments/assets/f5c1ac90-6013-4533-b271-cf481295981d" width="280" alt="ModalGomesPlus" /> |idth="1080" height="2115" alt="ModalGomesPlus" src="https://github.com/user-attachments/assets/f5c1ac90-6013-4533-b271-cf481295981d" />



## 🎯 Objetivo do Projeto

O objetivo principal do GomesPlus é consolidar o aprendizado prático na estrutura fundamental do React Native. Em vez de consumir APIs externas nesta etapa, a aplicação foca em renderizar e filtrar dados a partir de um *Mock* (banco de dados local em JSON/Array). O projeto demonstra o domínio sobre a manipulação de listas e o uso de Hooks para atualizar a interface em tempo real.

## ✨ Funcionalidades e Conceitos Aplicados

- **Catálogo Dinâmico:** Interface visual fluida simulando plataformas de streaming.
- **Sistema de Filtros:** Renderização condicional por categorias (Todos, Filmes, Séries e Animes) utilizando `.filter()` e `.map()`.
- **Modal de Detalhes:** Janela interativa componente-baseada (`<ModalDetalhes />`) que exibe informações completas (pôster, sinopse, ano e gênero) ao selecionar um item.
- **Gerenciamento de Estado:** Uso do `useState` para controlar a categoria ativa e gerenciar a seleção de filmes específicos na tela.
- **Componentização & Props:** Divisão estrutural em componentes reutilizáveis (`<CartaoFilme />`, `<Emblema />`, `<Botao />`, `<ModalDetalhes />`) e envio eficiente de propriedades usando o *Spread Operator* (`...filme`).


## 🛠 Tecnologias Utilizadas

- **[React Native]** - Framework principal para construção da interface nativa.
- **[Expo]** - Ambiente de desenvolvimento para execução e testes rápidos.
- **[JavaScript (ES6+)]** - Lógica de filtros, mapeamento e estruturação dos dados simulados.

## ⚙️ Como executar o projeto localmente

Pré-requisitos: É necessário ter o **Node.js** instalado na máquina e o aplicativo **Expo Go** no celular (ou um emulador configurado).

1. Clone este repositório:
```bash
git clone [https://github.com/Cgustav209/GomesPlus.git](https://github.com/Cgustav209/GomesPlus.git)
