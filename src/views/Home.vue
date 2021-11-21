<template>
  <div>
    <p>Què vols fer?</p>
  
    <div class="checkbox">
      <input type="checkbox" v-model="web" @click="resetPanell">
      <label>Una pàgina web (500€)</label>
    </div>

    <transition name="grow">
      <Panell
        v-if="web"
        v-on:paginesChanged="addPagines"
        v-on:idiomesChanged="addIdiomes"/>
    </transition>
    
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
      pagines: 1,
      idiomes: 1
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
    addPagines(val) {
      this.pagines = +val;
    },
    addIdiomes(val) {
      this.idiomes = +val;
    },
    resetPanell() {
      if(!this.web) {
        this.pagines = 1;
        this.idiomes = 1;
      } else {
        this.pagines = 0;
        this.idiomes = 0;
      }
    }
  }
}
</script>

<style scoped>
  .checkbox {
    margin-bottom: 1em;
  }

  .grow-enter-active {
    transform-origin: top left;
    animation: grow .6s ease-in-out;
  }
  .grow-leave-active {
    transform-origin: top left;
    animation: grow .3s reverse ease-in-out;
  }
  @keyframes grow {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
