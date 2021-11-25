<template>
  <div class="buscador">
      <label>Cerca pressupostos:</label>
      <div class="grup">
          <input type="text"
            v-model="cercaString"
            v-on:input="emetCerca">
            <button @click="clearCerca">X</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Buscador',
    emits: ['cerca'],
    data() {
        return {
            cercaString: ''
        }
    },
    methods: {
        emetCerca() {
            this.$emit('cerca', this.cercaString);
        },
        clearCerca() {
            this.cercaString = '';
            this.$emit('cerca', this.cercaString);
        }
    }
}
</script>

<style scoped>
    input {
        width: 32ch;
        border: 1px solid black;
        margin-bottom: 1rem;
    }
    .buscador {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: .6rem;
        margin: auto;
        border-bottom: 1px solid #F67754;
        margin-bottom: 1.4rem;
    }
    button {
        border: none;
        background-color: transparent;
        color: #222;
        font-size: 1rem;
        line-height: .9;
        padding-left: 0;
    }
</style>