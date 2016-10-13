<template>
    <div>
        <loader></loader>
        <burger></burger>
        <div class="work" ref="workContainer">
            <div class="item">
                <video width="100%" height="auto" poster="/public/video/daretodonate_10s_placeholder.jpg">
                    <source src="/public/video/daretodonate_10s_compressed.webm" type="video/webm">
                    <source src="/public/video/daretodonate_10s_compressed.mp4" type="video/mp4">
                    <img src="/public/video/daretodonate_10s_placeholder.jpg">
                </video>
            </div>
            <div class="item">
                <video width="100%" height="auto" poster="/public/video/techmog_10s_placeholder.jpg">
                    <source src="/public/video/techmog_10s_compressed.webm" type="video/webm">
                    <source src="/public/video/techmog_10s_compressed.mp4" type="video/mp4">
                    <img src="/public/video/techmog_10s_placeholder.jpg">
                </video>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .work {
        position: fixed;
        width: 100%;
        height: 100vh;
        .item {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            video {
                object-fit: cover;
                object-position: 0 0;
            }
        }
    }
</style>

<script>
    import Loader from './Loader.vue';
    import Burger from './Burger.vue';
    import { TweenMax } from 'gsap';
    import store from '../vuex/store.js';

    export default {
        components: {
            'loader': Loader,
            'burger': Burger
        },
        data () {
            return {
                lastScroll: 0,
                ticking: false,
                currentItem: 1,
                fauxBodyHeight: 1000,
                itemCount: document.querySelectorAll('.work .item').length
            }
        },
        beforeMount () {
            document.body.style.height = this.fauxBodyHeight + 'px';
        },
        mounted () {
            store.subscribe((updateScrollPositionY, state) => {
                this.handleScroll(state.scrollY);
            });
        },
        methods: {
            handleScroll (scrollY) {
                this.lastScroll = scrollY;
                if (!this.ticking) {
                    window.requestAnimationFrame(() => {

                        let scrollPercentage = scrollY / this.fauxBodyHeight * 100;

                        let itemShow = scrollPercentage / this.itemCount;

                        console.log(itemShow);

                        new TweenMax('.work .item:nth-of-type(' + itemShow + ')', 1, { height: '+=' + scrollY, ease: Sine.easeIn }); 
                        this.ticking = false;
                    });
                }
                this.ticking = true;
            }
        }
    }
</script>