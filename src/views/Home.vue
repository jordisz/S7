<template>
  <div>
    <p>Què vols fer?</p>
    <div class="checkbox">
      <input type="checkbox" v-model="web">
      <label>Una pàgina web (500€)</label>
    </div>
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

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      web: false,
      seo: false,
      ads: false,
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

      return total;
    }
  }
}
</script>
