import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faProjectDiagram, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faProjectDiagram, faUsers, faEnvelope);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)
   .mount('#app');
