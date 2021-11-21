<template>
  <div class="home">
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
  
    <router-link to="/benvinguda">
      <div class="button">Torna enrera</div>
    </router-link>
    
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

<style>
  .home {
    width: 85vw;
    margin: 2rem auto;
  }
  .checkbox {
    margin-bottom: 1em;
  }

  .button {
    display: block;
    width: 200px;
    text-align: center;
    background-color: #2f532f;
    border: 1px solid black;
    padding: 10px 0;
    text-decoration: none;
    color: white;
    font-weight: bold;
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
