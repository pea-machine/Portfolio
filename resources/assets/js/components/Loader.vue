<template>
    <div class="page-loader">
        <div ref="logo" v-html="logoSvg"></div>
    </div>
</template>

<style lang="sass">

    $mobile-small-portrait-width: 480px;
    $mobile-small-landscape-width: 600px;
    $mobile-large-width: 767px;
    $tablet-portrait-width: 1023px;
    $tablet-landscape-width: 1199px;
    $desktop-width: 1200px;
    
    .page-loader {
        background-color: #1d131f;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;
        overflow-x: hidden;
        z-index: 999;
        .logo {
            position: fixed;
            top: 200px;
            left: 50%;
            width: 415px;
            margin: 0 0 0 -207px;
            @media all and (min-width: 0) and (max-width: $tablet-portrait-width) { 
                width: 300px;
                margin: 0 0 0 -150px;
            }
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
                startTl: null,
                endTl: null
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
                    this.startAnimation();
                    store.subscribe((updatePageLoadingStatus, state) => {
                        if(state.pageLoading != this.pageLoading) {
                            if(state.pageLoading == false) {
                                this.pageLoading = false;
                                this.endAnimation();
                            } else {
                                this.pageLoading = true;
                                this.startAnimation();
                            }
                        }
                    });
                });
        },
        mounted () {
            if(store.state.pageLoading) {
                this.startAnimation();
            }
        },
        methods: {
            startAnimation () {
                if(!this.$refs.logo.querySelector('pattern')) { return; }
                this.fixedLogoFix('start');
                
                this.$refs.logo.style.display = 'block';

                if(this.startTl != null) {
                    this.startTl.play();
                } else {
                    this.startTl = new TimelineMax();
                    this.startTl.
                    fromTo('.page-loader', 0, { width: 0 }, { width: '100%', ease: Power4.easeInOut }).
                    fromTo(this.$refs.logo.querySelector('pattern'), 50, { attr:{ x: 0 } }, { attr:{ x: -10000 }, ease: Power0.easeNone });
                }
            },
            endAnimation () {
                setTimeout(() => {
                    this.startTl.pause();
                    this.$refs.logo.style.display = 'none';
                }, 3000);

                this.endTl = new TimelineMax({ ease: Back.easeIn });
                this.endTl.
                fromTo('.page-loader', 1.5, { width: '100%' }, { width: 0, ease: Power4.easeInOut, onComplete: () => {
                    this.animationEnded = true;
                    this.fixedLogoFix('end');
                } });
            },
            fixedLogoFix (pos) {
                /*switch(pos) {
                    case 'start':
                        document.getElementById('app').style.minHeight = '200vh';
                        document.body.style.height = '100vh';
                        document.body.style.overflowY = 'hidden';
                    break;
                    case 'end':
                        document.getElementById('app').style.minHeight = null;
                        document.body.style.height = null;
                        document.body.style.overflow = null;
                    break;
                }*/
            }
        }
    }
</script>
