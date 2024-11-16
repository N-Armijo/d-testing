<script setup>
  import { ref } from 'vue'
  import ChildComponent from '@/components/ChildComponent.vue'
  
  const mensaje = ref('Hola desde el componente padre')
  const textoRecibido = ref('')
  
  const handleTexto = (texto) => {
    textoRecibido.value = texto
  }
</script>
<template>
  <div>
    <h1>Componente Padre</h1>
    <ChildComponent
        :mensajePadre="mensaje"
        @enviar-texto="handleTexto"
    />
    <p v-if="textoRecibido">Texto recibido del hijo: {{ textoRecibido }}</p>
  </div>
</template>