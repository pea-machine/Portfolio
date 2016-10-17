<template>
    <div>
        <loader></loader>
        <burger></burger>
        <transition name="fade"><router-view></router-view></transition>
    </div>
</template>

<style lang="sass" scoped>

</style>
    
<script>
    import Loader from './Loader.vue';
    import Burger from './Burger.vue';
    import store from '../vuex/store.js';
    export default {
        components: {
            'loader': Loader,
            'burger': Burger
        },
        mounted() {
            store.commit('updatePageLoadingStatus', true);
        }
    }
</script>
