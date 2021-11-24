import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

library.add(faQuestionCircle, faSort);

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');
