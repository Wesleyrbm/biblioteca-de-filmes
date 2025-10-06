<template>
  <v-form @submit.prevent="salvar">
    <v-text-field v-model="titulo" label="Título" required />
    <v-text-field v-model="genero" label="Gênero" required />
    <v-text-field v-model="nota" label="Nota (0-10)" type="number" required />

    <v-btn type="submit" color="primary">Adicionar Filme</v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['add-filme'])

const titulo = ref('')
const genero = ref('')
const nota = ref('')

function salvar() {
  if (!titulo.value || !genero.value || !nota.value) return

  const novoFilme = {
    titulo: titulo.value,
    genero: genero.value,
    nota: nota.value
  }

  emit('add-filme', novoFilme)

  titulo.value = ''
  genero.value = ''
  nota.value = ''
}
</script>
