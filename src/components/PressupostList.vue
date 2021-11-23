<template>
    <div class="pressupost-list">
        <div class="pressupost">
            <h3>{{pressupostNom}}</h3>
            <h4>Per a {{pressupostClient}}, {{pressupostData}}</h4>
            <p>{{pressupostServeis}}</p>
            <p class="pressupost-preu">{{pressupostPreu}} €</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PressupostList",
    props: {
        pressupostNom: String,
        pressupostClient: String,
        pressupostData: String,
        pressupostServeis: String,
        pressupostPreu: Number
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