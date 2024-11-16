<script setup>
  import { ref } from 'vue'

  defineProps({
    mensajePadre: String
  })

  const texto = ref('')
  const emit = defineEmits(['enviar-texto'])

  const enviarTexto = () => {
    emit('enviar-texto', texto.value)
  }
</script>

<template>
  <div class="card bg-light p-5">
    <h4>Mensaje del padre: {{ mensajePadre }}</h4> 
    <input type="text" v-model="texto" placeholder="Escribe mensaje a padre" class="form-control" />
    <button @click="enviarTexto" class="btn btn-secondary my-2">Enviar Emit</button>
  </div>
</template>
