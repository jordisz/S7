<template>
    <div class="pressupost-list">
        <div class="pressupost"
            v-for="pressupost in pressupostArray" 
            :key="pressupost.id">
            <h3>{{pressupost.nom}}</h3>
            <h4>Per a {{pressupost.client}}, {{pressupost.data.toLocaleString()}}</h4>
            <p>{{pressupost.serveis}}</p>
            <p class="pressupost-preu">{{pressupost.preu}} €</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PressupostList",
    props: {
        pressupostArray: Array
    }
}
</script>

<style scoped>
    .pressupost {
        width: 400px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: .3em;
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