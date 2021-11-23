<template>
  <div class="home">
    <div class="columna esquerra">
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
      
      <div class="preu">
        <p>Preu: {{ preu }} €</p>
      </div>

      <div class="save">
        <label>Nom del pressupost:</label>
        <input type="text" v-model="nom" />
        <label>Client:</label>
        <input type="text" v-model="client" />
        <button @click="addPressupost">Desa pressupost</button>
      </div>

      <router-link to="/benvinguda">
        <div class="button">Torna enrera</div>
      </router-link>
    </div>

    <div class="columna dreta">
      <PressupostList 
        v-for="pressupost in pressupostArray" 
        :key="pressupost.id"
        :pressupostNom="pressupost.nom"
        :pressupostClient="pressupost.client"
        :pressupostData="pressupost.data.toLocaleString()"
        :pressupostServeis="pressupost.serveis"
        :pressupostPreu="pressupost.preu"
        />
    </div>
  </div>
</template>

<script>
import Panell from '@/components/Panell.vue';
import PressupostList from '@/components/PressupostList.vue';

export default {
  name: 'Home',
  components: {
    Panell,
    PressupostList
  },
  data() {
    return {
      web: false,
      seo: false,
      ads: false,
      pagines: 0,
      idiomes: 0,
      nom: '',
      client: '',
      pressupostArray: []
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
    },
    addPressupost() {
      let serveisArray = [];
      if(this.web) serveisArray.push(`Web (${this.pagines} pag. / ${this.idiomes} id.)`);
      if(this.seo) serveisArray.push('SEO');
      if(this.ads) serveisArray.push('Google Ads');

      let newPressupost = {
        id: this.pressupostArray.length,
        nom: this.nom || 'Sense nom',
        client: this.client,
        data: new Date(),
        serveis: serveisArray.join(', '),
        preu: this.preu        
      }

      this.pressupostArray.push(newPressupost);

      this.nom = '';
      this.client = '';
      this.web = false;
      this.seo = false;
      this.ads = false;
      this.pagines = 0;
    }
  }
}
</script>

<style>
  .home {
    width: 85vw;
    margin: 2rem auto;
    display: flex;
  }
  .esquerra {
    width: 40vw;
  }
  .dreta {
    width: 50vw;
    height: 100vh;
  }
  .checkbox {
    margin-bottom: 1em;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  a {
    text-decoration: none;
  }

  .preu {
    margin: 1.8em 0 2em;
    font-size: 1.2rem;
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

  .save {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }
  .save input {
    width: 40ch;
    border: 1px solid black;
    margin-bottom: .3em;
  }
  .save button {
    width: 200px;
    font-size: 1rem;
    border-radius: 5px;
  }

</style>
