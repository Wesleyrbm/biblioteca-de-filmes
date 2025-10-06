<template>
  <div class="pa-4">
    <h2>Lista de Filmes</h2>
    <v-row>
      <FilmeCard
        v-for="(filme, index) in filmes"
        :key="index"
        :filme="filme"
        @delete="removerFilme(index)"
      />
    </v-row>
  </div>
</template>

<script setup>
import FilmeCard from '../components/FilmeCard.vue'
import { ref, onMounted } from 'vue'

const filmes = ref([])

onMounted(() => {
  filmes.value = JSON.parse(localStorage.getItem('filmes')) || []
})

function removerFilme(index) {
  filmes.value.splice(index, 1)
  localStorage.setItem('filmes', JSON.stringify(filmes.value))
}
</script>
