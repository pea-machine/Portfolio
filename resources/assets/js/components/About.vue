<template>
    <div class="about-container">
        <div class="grid gut70 smallest-to-20 smaller-to-40 small-to-60 medium-to-40 outergut">
            <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100">
                <img src="/public/img/display-picture.jpg" class="display-picture handleLoad" v-on:load="handleLoad">
            </div>
            <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100">
                <div class="block-text">
                    <p>
                        Full-stack nomad working with a range of technologies while floating around Laravel, Wordpress and Backbone. I have experience building for brands such as Sky, ASOS, Vue Cinemas, Diageo, EE, Macmillan and thrive on projects with high polish.
                    </p>
                    <p>
                        I have a passion for making (hardware as well as software) and founded the product design blog Techmog.com in 2011. I'm now joined by a team of writers who help cover London's maker scene. 
                    </p>
                    <p>
                        I'm currently freelancing in London, either on-site or from the co-working space Greenhouse N16.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .about-container {
        padding: 67px 0 0 0
    }
</style>

<script>
    import store from '../vuex/store.js';
    export default {
        data () {
            return {
                fauxBodyHeight: 0,
                handleLoadTotal: 0,
                handleLoadDone: 0
            }
        },
        mounted() {
            this.handleLoadTotal = this.$el.getElementsByClassName('handleLoad').length | 0;
            this.fauxBodyHeight = window.innerHeight;
            document.querySelector('#app').style.height = this.fauxBodyHeight + 'px';
            setTimeout(() => { document.querySelector('#app').style.minHeight = 0; }, 4000);
            window.addEventListener('resize', this.handleResize);
            setTimeout(() => {
                store.commit('updatePageLoadingStatus', false);
            }, 5000);
        },
        beforeRouteEnter (to, from, next) {
            store.commit('updatePageLoadingStatus', true);
            next();
        },
        beforeRouteLeave (to, from, next) {
            document.querySelector('#app').style.height = null;
            next();
        },
        beforeDestroy: function () {
          window.removeEventListener('resize', this.handleResize)
        },
        methods: {
            handleResize () {
                this.fauxBodyHeight = window.innerHeight;
                document.querySelector('#app').style.height = this.fauxBodyHeight + 'px';
            },
            handleLoad (event) {
                this.handleLoadDone++;
                if(this.handleLoadDone == this.handleLoadTotal) {
                    store.commit('updatePageLoadingStatus', false);
                }
            }
        }
    }
</script>
