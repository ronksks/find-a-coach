import {createApp} from 'vue';
import router from "@/router";
import store from './store/index.js'
import App from './App.vue'
import BaseCard from "@/components/ui/BaseCard.vue";
import baseButton from "@/components/ui/BaseButton.vue";
import baseBadge from "@/components/ui/BaseBadge.vue";

const app = createApp(App)
app.use(router)
app.use(store)
app.component('base-card', BaseCard)
app.component('base-button', baseButton)
app.component('base-badge',baseBadge)
app.mount('#app');
