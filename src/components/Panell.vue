<template>
  <div class="panell">
      <div class="row">
          <label>Número de pàgines</label>
          <input type="text" 
            @keypress="filtraNumeros" 
            @keyup="$emit('paginesChanged', this.pagines)" 
            v-model="pagines">
      </div>
      <div class="row">
          <label>Número d'idiomes</label>
          <input type="text" 
            @keypress="filtraNumeros" 
            @keyup="$emit('idiomesChanged', this.idiomes)" 
            v-model="idiomes">
      </div>
  </div>
</template>

<script>
export default {
    name: "Panell",
    data() {
        return {
            idiomes: '',
            pagines: ''
        }
    },
    methods: {
        filtraNumeros(e) {
            if(e.keyCode < 48 || e.keyCode > 57) {
                e.preventDefault();
            }
        }
    }
}
</script>

<style>
    .panell {
        width: 320px;
        border: 3px solid black;
        border-radius: 15px;
        padding: 2em 1.5em;
        margin: 1em 0;
    }
    .row {
        display: flex;
        justify-content: space-between;
    }
    .row:first-of-type {
        margin-bottom: 1em;
    }
</style>