<template>
    <div class="page-loader" v-show="!animationEnded">
        <div ref="logo" v-html="logoSvg"></div>
    </div>
</template>

<style lang="sass">
    .page-loader {
        background-color: #1d131f;
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 999;
        .logo {
            position: fixed;
            top: 200px;
            left: 50%;
            width: 415px;
            margin: 0 0 0 -207px;
            path {
                filter: url(#filter);

                fill: url(#background);
            }
        }
    }
</style>

<script>
    import { TweenMax } from 'gsap';
    import 'whatwg-fetch';
    import store from '../vuex/store.js';
    export default {
        data() {
            return {
                logoSvg: '',
                pageLoading: true,
                animationEnded: false,
                logoStartTl: null
            }
        },
        beforeMount() {
            fetch('/public/img/peabay-logo.svg')
                .then((response) => {
                    return response.text();
                })
                .then((body) => {
                    this.logoSvg = body;
                })
                .then(() => {
                    store.subscribe((updatePageLoadingStatus, state) => {
                        console.log(state.pageLoading);
                        //if(this.pageLoading != state.pageLoading) {
                            if(state.pageLoading == false) {
                                console.log('Page not loading');
                                this.pageLoading = false;
                                this.endAnimation();
                            } else {
                                console.log('Page is loading');
                                this.pageLoading = true;
                                this.startAnimation();
                            }
                        //}
                    });
                });
        },
        mounted() {
            console.log('loader mounted')
        },
        methods: {
            startAnimation() {
                
                console.log('animation called');

                if(!this.$refs.logo.querySelector('pattern')) { return; }

                this.logoStartTl = new TimelineMax();
                this.logoStartTl.
                fromTo('.page-loader', 0, { width: 0 }, { width: '100%', ease: Power4.easeInOut, onComplete: () => { this.animationEnded = false; } }).
                fromTo(this.$refs.logo.querySelector('pattern'), 50, { attr:{ x: 0, y: -80 } }, { attr:{ x: -10000, y: -300 }, ease: Power0.easeNone });

            },
            endAnimation() {
                console.log('end animation called');
                const tl = new TimelineMax({ ease: Back.easeIn, delay: 5000 });
                tl.add('parallel', 0).
                fromTo('.page-loader', 1.5, { width: '100%' }, { width: 0, ease: Power4.easeInOut, onComplete: () => { this.animationEnded = true; } }, 'parallel');
            }
        }
    }
</script>
