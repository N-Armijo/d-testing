<script setup>
  import { ref } from 'vue'
  import ChildComponent from '@/components/ChildComponent.vue'

  const mensaje = ref('')  
  const textoRecibido = ref('')  

  const handleTexto = (texto) => {
    textoRecibido.value = texto
  }
</script>

<template>
  <div class="container">
    <div>
      <input 
        type="text" 
        v-model="mensaje" 
        placeholder="Escribe un mensaje para el hijo" 
        class="form-control my-3"
  
      />
      
      <h4>Mensaje recibido del hijo: {{ textoRecibido }}</h4>
    </div>
    
    <ChildComponent
      :mensajePadre="mensaje"  
      @enviar-texto="handleTexto" 
    />
  </div>
</template>
