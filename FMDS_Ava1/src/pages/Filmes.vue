<template>
  <div class="pa-4">
    <h2>Gerenciar Filmes</h2>
    <FilmeForm @add-filme="adicionarFilme" />
  </div>
</template>

<script setup>
import FilmeForm from '../components/FilmeForm.vue'
import { ref } from 'vue'

const filmes = ref(JSON.parse(localStorage.getItem('filmes')) || [])

function adicionarFilme(filme) {
  filmes.value.push(filme)
  localStorage.setItem('filmes', JSON.stringify(filmes.value))
}
</script>
