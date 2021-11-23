<template>
  <div class="benvinguda">
    <h1>Benvinguda</h1>
    <div>
      <p>En aquesta aplicació podràs calcular el pressupost dels nostres serveis 
        (creació de pàgines web, SEO i publicitat a Google Ads).
        Si tens més d'un client, podràs generar diferents pressupostos i guardar-los.
      </p>
    </div>
 
    <router-link to="/pressupostos">
      <div class="button">Accedeix</div>
    </router-link>
  </div>
</template>

<style scoped>
  .benvinguda {
    width: 85vw;
    margin: 2rem auto;
  }
  @media(min-width: 1024px) {
    .benvinguda {
      width: 70vw;
    }
  }
  h1 {
    text-align: center;
  }
  .button {
    margin: 2rem auto;
  }

</style>
