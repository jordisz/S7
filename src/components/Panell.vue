<template>
  <div class="panell">
      <div class="row">
          <label>Número de pàgines</label>
          <QuantityInput v-on:quantityChanged="changePagines"/>
      </div>
      <div class="row">
          <label>Número d'idiomes</label>
          <QuantityInput v-on:quantityChanged="changeIdiomes"/>
      </div>
  </div>
</template>

<script>
import QuantityInput from './QuantityInput.vue'

export default {
    name: "Panell",
    components: {
        QuantityInput
    },
    data() {
        return {
            idiomes: 1,
            pagines: 1
        }
    },
    methods: {
        changePagines(val) {
            this.pagines = val;
            this.$emit('paginesChanged', this.pagines);
        },
        changeIdiomes(val) {
            this.idiomes = val;
            this.$emit('idiomesChanged', this.idiomes);
        }
    }
}
</script>

<style>
    .panell {
        width: 250px;
        border: 2px solid black;
        border-radius: 15px;
        padding: 2em 1.5em;
        margin: 1em 0 1em .5em;
    }
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .row:first-of-type {
        margin-bottom: 1em;
    }
</style>