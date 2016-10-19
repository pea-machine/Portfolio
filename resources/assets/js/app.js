import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store.js';
import Container from './components/Container.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
import scrollListener from './scrollListener.js';

Vue.use(VueRouter);
scrollListener();

const routes = [
    {
        path: '/', component: Container,
        children: [
            { path: '', component: Home },
            { path: 'about', component: About },
            { path: 'work', component: Work },
            { path: 'contact', component: Contact }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-1519216-10', 'auto');
    ga('send', 'pageview');
    next();
});

const app = new Vue({
    router
}).$mount('#app');