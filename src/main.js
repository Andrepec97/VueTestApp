import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import BaseButton from "@/components/base/BaseButton.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: App },
        { path: '/about', component: App },
    ]
});
const app = createApp(App);

app.use(router);
app.component('base-button', BaseButton);
app.mount('#app');
