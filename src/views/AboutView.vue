    <script setup>
    import { useCounterStore } from '@/stores/counter'
    
    // acceso a store de Pinia
    const counter = useCounterStore()
    </script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="contador">
      <p>Contador: {{ counter.count }}</p>
      <div class="contador-btn">
        <button @click="counter.decrement">-</button>
        <button @click="counter.increment">+</button>
      </div>
    </div>
  </div>
</template>


<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    button {
      margin: 5px;
      padding: 0.2 rem;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      background-color: #fab129;
      color: #190a0a;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  }
  .contador-btn{
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
</style>
