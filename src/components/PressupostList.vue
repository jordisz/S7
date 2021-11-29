<template>
    <div class="pressupost-list">
        <OrderButtons 
            v-if="showBuscador"
            v-on:ordreAlfabetic="ordreAlfabetic"
            v-on:ordreData="ordreData"
            v-on:ordreID="ordreID"/>

        <Buscador
            v-if="showBuscador"
            v-on:cerca="cerca"/>

        <div class="pressupost"
            v-for="pressupost in filteredPressupostArray" 
            :key="pressupost.id">
            <h3>{{pressupost.nom}}</h3>
            <h4>Per a {{pressupost.client}}, {{pressupost.data.toLocaleString()}}</h4>
            <p>{{pressupost.serveis}}</p>
            <p class="pressupost-preu">{{pressupost.preu}} €</p>
        </div>
    </div>
</template>

<script>
import OrderButtons from './OrderButtons.vue';
import Buscador from './Buscador.vue';

export default {
    name: "PressupostList",
    components: {
        OrderButtons,
        Buscador
    },
    props: {
        pressupostArray: Array,
        showBuscador: Boolean
    },
    data() {
        return {
            alfabeticAscendent: true,
            dataAscendent: true,
            cercat: '',
            pressupostos: this.pressupostArray
        }
    },
    computed: {
        filteredPressupostArray() {
            return this.pressupostos.filter(pressupost => pressupost.nom.toLowerCase().match(this.cercat.toLowerCase()));
        }
    },
    methods: {
        ordreAlfabetic() {
            if(this.alfabeticAscendent) {
                this.pressupostos.sort((a, b) => a.nom.localeCompare(b.nom));
            } else {
                this.pressupostos.sort((a, b) => b.nom.localeCompare(a.nom));
            }
            this.alfabeticAscendent = !this.alfabeticAscendent;
        },
        ordreData() {
            if(this.dataAscendent) {
                this.pressupostos.sort((a, b) => a.data - b.data);
            } else {
                this.pressupostos.sort((a, b) => b.data - a.data);
            }
            this.dataAscendent = !this.dataAscendent;
        },
        ordreID() {
            this.pressupostos.sort((a, b) => a.id - b.id);

            this.alfabeticAscendent = true;
            this.dataAscendent = true;
        },
        cerca(c) {
            this.cercat = c;
        }
    }
}
</script>

<style scoped>
    .pressupost {
        width: 400px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 1rem;
        margin: 0 auto .4em;
    }
    h3 {
        font-size: 1.2rem;
        font-weight: bold;
    }
    h4 {
        font-size: .9rem;
    }
    p{
        font-size: .9rem;
        margin-bottom: .5rem;
    }
    .pressupost-preu {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0;
    }
</style>