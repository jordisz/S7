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
          v-if="web === true"
          :paginesInit="this.pagines"
          :idiomesInit="this.idiomes"
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

      <router-link to="/">
        <div class="button">Torna enrera</div>
      </router-link>
    </div>

    <div class="columna dreta">
      <PressupostList 
        :pressupostArray="this.filteredPressupostArray"
        :showBuscador="this.showBuscador"
        v-on:ordreAlfabetic="ordreAlfabetic"
        v-on:ordreData="ordreData"
        v-on:ordreID="ordreID"
        v-on:cerca="cerca"
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
      pressupostArray: [],
      alfabeticAscendent: true,
      dataAscendent: true,
      cercat: ''
    }
  },
  created() {
    if (Object.keys(this.$route.query).length !== 0) {
    this.web = this.$route.query.Web == 'true'  ? true : false;
    this.seo = this.$route.query.SEO == 'true' ? true : false;
    this.ads = this.$route.query.GoogleAds == 'true' ? true : false;
    this.pagines = +this.$route.query.Pagines;
    this.idiomes = +this.$route.query.Idiomes;
    }
  },
  computed: {
    preu() {
      this.$router.replace({query: {Web: this.web, SEO: this.seo, GoogleAds: this.ads, Pagines: this.pagines, Idiomes: this.idiomes}});
      let total = 0;
      if (this.web === true) {
        total += 500;
      } 
      if (this.seo === true) {
        total += 300;
      } 
      if (this.ads === true) {
        total += 200;
      }
      if (this.pagines > 0 && this.idiomes > 0) {
        total += (this.pagines * this.idiomes * 30)
      }
      return total;
    },
    filteredPressupostArray() {
      return this.pressupostArray.filter(pressupost => pressupost.nom.toLowerCase().match(this.cercat.toLowerCase()));
    },
    showBuscador() {
      return this.pressupostArray.length > 1;
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
    },
    ordreAlfabetic() {
      if(this.alfabeticAscendent) {
        this.pressupostArray.sort((a, b) => a.nom.localeCompare(b.nom));
      } else {
        this.pressupostArray.sort((a, b) => b.nom.localeCompare(a.nom));
      }
      this.alfabeticAscendent = !this.alfabeticAscendent;
    },
    ordreData() {
      if(this.dataAscendent) {
        this.pressupostArray.sort((a, b) => a.data - b.data);
      } else {
        this.pressupostArray.sort((a, b) => b.data - a.data);
      }
      this.dataAscendent = !this.dataAscendent;
    },
    ordreID() {
      this.pressupostArray.sort((a, b) => a.id - b.id);

      this.alfabeticAscendent = true;
      this.dataAscendent = true;
    },
    cerca(cerca) {
      this.cercat = cerca;
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
