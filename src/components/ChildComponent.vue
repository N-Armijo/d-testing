<script setup>
  import { ref} from 'vue'

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
  <div>
    <h2>Componente Hijo</h2>
    <p>Mensaje del padre: {{ mensajePadre }}</p>
    <input type="text" v-model="texto" />
    <button @click="enviarTexto">Enviar Emit</button>
  </div>
</template>
