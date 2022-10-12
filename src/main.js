import { createApp } from 'vue';
import routers from './routes';
import App from './App.vue';


import './assets/sass/style.sass'


const app = createApp(App);
app.use(routers);
app.mount('#app');