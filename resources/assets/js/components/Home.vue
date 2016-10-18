<template>
    <div class="home-container">
        <div class="header">
            <blockquote>I'm Peter Bailey, a full-stack web developer based in London. I specialize in Wordpress, Laravel and Vue.</blockquote>
        </div>
    </div>
</template>

<style lang="sass" scoped>

    $mobile-small-portrait-width: 480px;
    $mobile-small-landscape-width: 600px;
    $mobile-large-width: 767px;
    $tablet-portrait-width: 1023px;
    $tablet-landscape-width: 1199px;
    $desktop-width: 1200px;

    .home-container {
        height: 100.1vh;
        overflow: hidden;
        .header {
            height: 100vh;
            position: relative;
            width: 100%;
            blockquote {
                position: absolute;
                top: 40%;
                transform: translateY(-50%);
                text-align: right;
                font-size: 30px;
                font-weight: 100;
                max-width: 50%;
                right: 0;
                color: rgb(222, 213, 226);
                letter-spacing: 0.03em;
                line-height: 1.3em;
                @media all and (min-width: 0) and (max-width: $tablet-portrait-width) { 
                    max-width: 68%;
                    font-size: 29px
                }
            }
        }
    }
</style>

<script>
    import { TweenMax } from 'gsap';
    import store from '../vuex/store.js';
    export default {
        data () {
            return {
                handleLoadTotal: 0,
                handleLoadDone: 0
            }
        },
        mounted () {
            this.handleLoadTotal = this.$el.getElementsByClassName('handleLoad').length | 0;
            setTimeout(() => {
                store.commit('updatePageLoadingStatus', false);
            }, 2000);
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
