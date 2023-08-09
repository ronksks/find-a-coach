import {createApp} from 'vue';
import router from "@/router";
import App from './App.vue'

const app = createApp(App)
console.log("test")
app.use(router)
app.mount('#app');
