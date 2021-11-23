<template>
  <div class="order-buttons">
      <button @click="$emit('ordreAlfabetic')">A-Z</button>
      <button @click="$emit('ordreData')">Data</button>
      <button @click="$emit('ordreID')">Restableix ordre</button>
  </div>
</template>

<script>
export default {
    name: 'OrderButtons',
    emits: ['ordreAlfabetic', 'ordreData', 'ordreID']
}
</script>

<style>
    .order-buttons {
        width: 440px;
        margin: 0 auto 1rem;
        display: flex;
    }
    button {
        flex: 1;
        font-size: .8rem;
        margin-right: .4rem;
    }
</style>