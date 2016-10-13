<template>
    <div>
        <loader></loader>
        <burger></burger>
        <div class="hero"></div>
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
    import store from '../vuex/store.js';
    export default {
        name: 'Home',
        components: {
            'loader': Loader,
            'burger': Burger
        }
    }
</script>
