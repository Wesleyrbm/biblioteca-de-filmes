<template>
  <v-col cols="12" sm="6" md="4">
    <v-card>
      <v-card-title>{{ filme.titulo }}</v-card-title>
      <v-card-subtitle>{{ filme.genero }}</v-card-subtitle>
      <v-card-text>Nota: {{ filme.nota }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="$emit('edit')">Editar</v-btn>

        <v-btn color="error" @click="$emit('delete')">Excluir</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
defineProps({
  filme: Object
})

// 2. Eventos 'edit' e 'delete' declarados (boa prática)
defineEmits(['edit', 'delete'])
</script>