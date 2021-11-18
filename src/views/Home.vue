<template>
  <div>
    <p>Què vols fer?</p>
    <div class="checkbox">
      <input type="checkbox" v-model="web">
      <label>Una pàgina web (500€)</label>
    </div>
    <Panell 
      v-on:paginesChanged="addPagines" 
      v-on:idiomesChanged="addIdiomes"/>
    <div class="checkbox">
      <input type="checkbox" v-model="seo">
      <label>Una consultoria SEO (300€)</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" v-model="ads">
      <label>Una campanya de Google Ads (200€)</label>
    </div>
    <p>Preu: {{ preu }} €</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Panell from '@/components/Panell.vue'

export default {
  name: 'Home',
  components: {
    Panell
  },
  data() {
    return {
      web: false,
      seo: false,
      ads: false,
      pagines: 0,
      idiomes: 0
    }
  },
  computed: {
    preu() {
      let total = 0;
      if (this.web) {
        total += 500;
      } 
      if (this.seo) {
        total += 300;
      } 
      if (this.ads) {
        total += 200;
      }
      if (this.pagines > 0 && this.idiomes > 0) {
        total += (this.pagines * this.idiomes * 30)
      }

      return total;
    }
  },
  methods: {
    addPagines(str) {
      this.pagines = +str;
    },
    addIdiomes(str) {
      this.idiomes = +str;
    }
  }
}
</script>

<style scoped>
  .checkbox {
    margin-bottom: 1em;
  }
</style>
