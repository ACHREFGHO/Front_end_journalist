

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router); // Ensure that you are using the router here
app.mount('#app');

