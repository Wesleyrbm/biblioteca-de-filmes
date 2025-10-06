<template>
  <div class="pa-4">
    <h2>Sobre o Sistema</h2>
    <p>Este sistema é um catálogo de filmes feito com Vue 3 + Vuetify 3.</p>
    <p>Total de filmes cadastrados: {{ total }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' // 1. Importe o ref e o onMounted

const total = ref(0) // 2. Inicie o total como um ref

// 3. Use o onMounted para buscar o valor sempre que a página for carregada
onMounted(() => {
  total.value = JSON.parse(localStorage.getItem('filmes'))?.length || 0
})
</script>
