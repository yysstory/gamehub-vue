import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios';
axios.defaults.withCredentials = true;
loadFonts();
const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(vuetify).mount('#app')
