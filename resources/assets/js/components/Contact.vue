<template>
    <div class="contact-container">
        <div class="grid gut70 smallest-to-20 smaller-to-40 small-to-60 medium-to-40 outergut">
            <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100">
                <img src="/public/img/greenhouse.jpg" class="display-picture handleLoad" v-on:load="handleLoad">
            </div>
            <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100">
                <div class="block-text">
                    <h1>Contact</h1>
                    <p>
                        Greenhouse<br>
                        49 Green Lanes,<br>
                        London,<br>
                        N16 9BU<br><br>
                    </p>
                    <p>
                        <a href="mailto:hi@peabay.xyz" target="_blank">hi@peabay.xyz</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .contact-container {
        height: 101vh;
        padding: 67px 0 0 0
    }
</style>
    
<script>
    import store from '../vuex/store.js';
    export default {
        data () {
            return {
                handleLoadTotal: 0,
                handleLoadDone: 0
            }
        },
        mounted() {
            this.handleLoadTotal = this.$el.getElementsByClassName('handleLoad').length | 0;
            setTimeout(() => {
                store.commit('updatePageLoadingStatus', false);
            }, 5000);
        },
        beforeRouteEnter (to, from, next) {
            store.commit('updatePageLoadingStatus', true);
            next();
        },
        methods: {
            handleLoad (event) {
                this.handleLoadDone++;
                if(this.handleLoadDone == this.handleLoadTotal) {
                    store.commit('updatePageLoadingStatus', false);
                }
            }
        }
    }
</script>
