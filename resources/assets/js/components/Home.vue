<template>
    <div>
        <loader></loader>
        <burger></burger>
        <div class="hero"></div>
        <router-link to="/work">Work</router-link>
        <video width="100%" height="auto" autoplay="true" loop="true" poster="/public/video/daretodonate_10s_placeholder.jpg">
            <source src="/public/video/daretodonate_10s_compressed.webm" type="video/webm">
            <source src="/public/video/daretodonate_10s_compressed.mp4" type="video/mp4">
            <img src="/public/video/daretodonate_10s_placeholder.jpg">
        </video>
        <video width="100%" height="auto" autoplay="true" loop="true" poster="/public/video/techmog_10s_placeholder.jpg">
            <source src="/public/video/techmog_10s_compressed.webm" type="video/webm">
            <source src="/public/video/techmog_10s_compressed.mp4" type="video/mp4">
            <img src="/public/video/techmog_10s_placeholder.jpg">
        </video>
        <video width="100%" height="auto" autoplay="true" loop="true" poster="/public/video/adorer_10s_placeholder.jpg">
            <source src="/public/video/Adorer_10s_compressed.webm" type="video/webm">
            <source src="/public/video/Adorer_10s_compressed.mp4" type="video/mp4">
            <img src="/public/video/adorer_10s_placeholder.jpg">
        </video>
    </div>
</template>

<style lang="sass" scoped>
    .hero {
        //background-image: url('/public/img/palms.jpg');
        background-size: cover;
        width: 100%;
        height: 100vh;   
    }
</style>

<script>
    import Loader from './Loader.vue';
    import Burger from './Burger.vue';
    import { TweenMax } from 'gsap';
    export default {
        components: {
            'loader': Loader,
            'burger': Burger
        }
    }
</script>
