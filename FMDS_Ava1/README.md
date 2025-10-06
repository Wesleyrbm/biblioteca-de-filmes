# Biblioteca de Filmes 🎬

Este é um projeto de um catálogo de filmes (CRUD) desenvolvido como parte da disciplina de FMDS. A aplicação permite cadastrar, listar, editar e excluir filmes, salvando os dados no Local Storage do navegador.

O projeto foi construído com Vue 3 (Composition API), Vite, Vuetify 3 para a interface de usuário e Vue Router para a navegação entre páginas.

## ✨ Funcionalidades

-   Adicionar novos filmes com título, gênero e nota.
-   Listar todos os filmes cadastrados.
-   Excluir filmes da lista.
-   Editar filmes existentes.
-   Visualizar a contagem total de filmes cadastrados na página "Sobre".

## 🏛️ Estrutura do Projeto

A aplicação é dividida nas seguintes rotas e componentes principais:

### Rotas (Páginas)

-   **/ (ou /lista)**: Página principal que lista todos os filmes cadastrados. Utiliza o componente `Lista.vue`.
-   **/filmes**: Página que contém o formulário para adicionar um novo filme. Utiliza o componente `Filmes.vue`.
-   **/editar/:id**: Página para editar um filme existente.
-   **/sobre**: Página com a descrição do projeto e a contagem de filmes. Utiliza o componente `Sobre.vue`.

### Componentes Reutilizáveis

-   **`FilmeCard.vue`**: Componente responsável por exibir as informações de um único filme em um card (título, gênero, nota) e contém os botões para edição e exclusão.
-   **`FilmeForm.vue`**: Componente que contém os campos do formulário para o cadastro e edição de um filme.

## 🛠️ Tecnologias Utilizadas

-   **[Vue 3](https://vuejs.org/)** (Composition API)
-   **[Vite](https://vitejs.dev/)**
-   **[Vuetify 3](https://vuetifyjs.com/)**
-   **[Vue Router](https://router.vuejs.org/)**

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto localmente:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* npm (já vem instalado com o Node.js)

### Passos

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/Wesleyrbm/biblioteca-de-filmes.git](https://github.com/Wesleyrbm/biblioteca-de-filmes.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd biblioteca-de-filmes
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

4.  **Execute a aplicação em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  O servidor de desenvolvimento iniciará na porta `5173`. Abra seu navegador e acesse `http://localhost:5173` para ver a aplicação.

## 👥 Integrantes do Grupo

* **Wesley Rodrigo Barbosa Mafra** - Matrícula: 20230006067