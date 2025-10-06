<template>
  <div class="pa-4">
    <h2>Editar Filme</h2>
    <v-form @submit.prevent="salvarEdicao">
      <v-text-field v-model="titulo" label="Título" required />
      <v-text-field v-model="genero" label="Gênero" required />
      <v-text-field v-model="nota" label="Nota (0-10)" type="number" required />

      <v-btn type="submit" color="primary">Salvar Alterações</v-btn>
      <v-btn color="grey" class="ml-2" @click="cancelar">Cancelar</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const filmes = ref([])
const titulo = ref('')
const genero = ref('')
const nota = ref('')

onMounted(() => {
  filmes.value = JSON.parse(localStorage.getItem('filmes')) || []
  const index = parseInt(route.params.index)
  const filme = filmes.value[index]
  if (filme) {
    titulo.value = filme.titulo
    genero.value = filme.genero
    nota.value = filme.nota
  }
})

function salvarEdicao() {
  const index = parseInt(route.params.index)
  filmes.value[index] = {
    titulo: titulo.value,
    genero: genero.value,
    nota: nota.value
  }
  localStorage.setItem('filmes', JSON.stringify(filmes.value))
  router.push('/lista') // volta para lista
}

function cancelar() {
  router.push('/lista')
}
</script>
