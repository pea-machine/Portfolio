import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
import scrollListener from './scrollListener.js';

Vue.use(VueRouter);
scrollListener();

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '/contact', component: Contact }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    router
}).$mount('#app');