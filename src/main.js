import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import BaseButton from "@/components/base/BaseButton.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/', redirect: '/login'},
        {path: '/login', component: () => import('@/views/Login.vue')},
        {path: '/anagrafiche', component: () => import('@/views/AnagraficheList.vue')},
    ]
});
const app = createApp(App);

app.use(router);
app.component('base-button', BaseButton);
app.mount('#app');
