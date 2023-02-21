import { createApp } from 'vue'
import App from './App.vue'
import LoginComponent from './components/LoginComponent';
import MainComponent from './components/MainComponent';

import router from './router/index.js';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
app.use(router);
app.use(vuetify);
app.component('LoginComponent', LoginComponent);
app.component('MainComponent', MainComponent);
app.mount('#app')
