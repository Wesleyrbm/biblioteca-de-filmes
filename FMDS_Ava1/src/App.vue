<template>
  <v-app>
    <v-app-bar app color="deep-purple-darken-3" dark>
      <v-toolbar-title>🎬 Biblioteca de Filmes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/lista" text>Lista</v-btn>
      <v-btn to="/filmes" text>CRUD</v-btn>
      <v-btn to="/sobre" text>Sobre</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
