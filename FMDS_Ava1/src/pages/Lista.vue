<template>
  <div class="pa-4">
    <h2>Lista de Filmes</h2>

    <v-row v-if="filmes.length > 0">
      <FilmeCard
        v-for="(filme, index) in filmes"
        :key="index"
        :filme="filme"
        @delete="removerFilme(index)"
        @edit="editarFilme(index)" />
    </v-row>
    <div v-else class="pa-4 text-center">
      <p>Nenhum filme cadastrado ainda.</p>
    </div>
  </div>
</template>

<script setup>
import FilmeCard from '../components/FilmeCard.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router' // 3. Importe o useRouter

const filmes = ref([])
const router = useRouter() // 4. Crie uma instância do roteador

onMounted(() => {
  filmes.value = JSON.parse(localStorage.getItem('filmes')) || []
})

function removerFilme(index) {
  // Adicionar uma confirmação antes de excluir é uma boa prática
  if (confirm('Tem certeza que deseja excluir este filme?')) {
    filmes.value.splice(index, 1)
    localStorage.setItem('filmes', JSON.stringify(filmes.value))
  }
}

// 2. Crie a função para editar
function editarFilme(index) {
  // Navega para uma nova rota de edição, passando o índice do filme como parâmetro
  router.push(`/editar/${index}`)
}
</script>