<template>
    <div>
        <div class="top-bar"></div>
        <div class="openClickZone" v-on:click="open" v-show="status == 'closed'"></div>
        <div class="closeClickZone" v-on:click="close" v-show="status == 'open'"></div>
        <div class="burger">
            <div class="refract">
                <div class="line leading1"></div>
                <div class="line leading2"></div>
                <div class="line block"></div>
                <div class="line trailing1"></div>
                <div class="line trailing2"></div>
            </div>
            <div class="refract">
                <div class="line leading1"></div>
                <div class="line leading2"></div>
                <div class="line block"></div>
                <div class="line trailing1"></div>
                <div class="line trailing2"></div>
            </div>
            <div class="refract">
                <div class="line leading1"></div>
                <div class="line leading2"></div>
                <div class="line block"></div>
                <div class="line trailing1"></div>
                <div class="line trailing2"></div>
            </div>
        </div>
        <div class="close">
            <div class="refract">
                <div class="line leading1"></div>
                <div class="line leading2"></div>
                <div class="line block"></div>
                <div class="line trailing1"></div>
                <div class="line trailing2"></div>
            </div>
            <div class="refract">
                <div class="line leading1"></div>
                <div class="line leading2"></div>
                <div class="line block"></div>
                <div class="line trailing1"></div>
                <div class="line trailing2"></div>
            </div>
        </div>
        <div class="menu">
            <router-link to="/">Home</router-link>
            <router-link to="/work">Work</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
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

    .top-bar {
        background-color: #150d17;
        width: 100%;
        height: 107px;
        position: fixed;
        z-index: 1
    }
    .openClickZone,
    .closeClickZone {
        position: fixed;
        top: 27px;
        right: 34px;
        width: 60px;
        height: 50px;
        cursor: pointer;
        z-index: 3;
        @media all and (min-width: 0) and (max-width: $mobile-small-landscape-width) { 
            right: 0
        }
    }
    .burger {
        cursor: pointer;
        .refract {
            position: fixed;
            height: 2px;
            top: 45px; 
            right: -680px;
            z-index: 2;
            &:nth-of-type(2) { top: 52px; }
            &:nth-of-type(3) { top: 59px; }
            .leading1,
            .leading2,
            .block,
            .trailing1,
            .trailing2 {
                width: 600px;
            }
        }
    }
    .close {
        cursor: pointer;
        .refract {
            position: fixed;
            top: 0;
            right: 0;
            width: 30px;
            height: 2px;
            z-index: 2;
            @media all and (min-width: 0) and (max-width: $mobile-small-landscape-width) { 
                right: -30px;
            }
            .leading1,
            .leading2,
            .block,
            .trailing1,
            .trailing2 {
                top: -100px;
            }
        }
    }
    .menu {
        position: fixed;
        top: 29px;
        right: 105px;
        @media all and (min-width: 0) and (max-width: $mobile-small-landscape-width) { 
            right: 65px;
        }
        z-index: 1;
        a {
            display: none;
            padding: 17px;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 12px;
            position: relative;
            @media all and (min-width: 0) and (max-width: $mobile-small-landscape-width) { 
                padding: 13px 0 0 6px;
            }
        }
    }
</style>

<script>
    import { TweenMax } from 'gsap';
    import 'vue-scroll';
    import store from '../vuex/store.js';
    export default {
        data () {
            return {
                burgerOpenTl: null,
                topBarScrollTl: null,
                status: 'closed',
                minimized: false,
                pageLoading: true
            }
        },
        mounted () {

            store.subscribe((updatePageLoadingStatus, state) => {
                if(state.pageLoading != this.pageLoading) {
                    if(state.pageLoading == false) {
                        this.refractBurger();
                    }
                    this.pageLoading = state.pageLoading;
                }
            });

            store.subscribe((updateScrollPositionY, state) => {
                this.handleScroll(state.scrollY);
            });
        },
        methods: {
            refractBurger() {
                const tl = new TimelineMax({ delay: 1 });
                const windowWidth = window.innerWidth + 600;
                const moveX = "+=" + windowWidth;
                const easing = Expo.easeOut;
                const overlap = "-=1.97";

                let topBarHeight = 107;
                let refractRight = 50;
                if(window.innerWidth < 600) {
                    topBarHeight = 50;
                    refractRight = 20;
                    this.minimize();
                }

                tl.timeScale(0.9).
                to('.top-bar', 1, { height: topBarHeight }, 0).
                fromTo('.burger .refract', 2, {width: 600, right: window.innerWidth + 680 }, { right: refractRight, width: 30, ease: easing }, 0).
                fromTo('.burger .leading1', 2, { width: 600, right: window.innerWidth + 680 }, { width: 30, right: 0, ease: easing }, 0).
                fromTo('.burger .leading2', 2, { width: 600, right: window.innerWidth + 680 }, { width: 30, right: 0, ease: easing }, overlap).
                fromTo('.burger .block', 2, { width: 600, right: window.innerWidth + 680 }, { width: 30, right: 0, ease: easing }, overlap).
                fromTo('.burger .trailing1', 2, { width: 600, right: window.innerWidth + 680 }, { width: 30, right: 0, ease: easing }, overlap).
                fromTo('.burger .trailing2', 2, { width: 600, right: window.innerWidth + 680 }, { width: 30, right: 0, ease: easing }, overlap);
            },
            open () {
                if(this.burgerOpenTl !== null && this.burgerOpenTl.isActive() == true) {
                    return;
                }
                this.status = 'open';
                this.burgerOpenTl = new TimelineMax({ ease: Back.easeIn });
                const overlap = "-=0.95";
                const easing = Expo.easeOut;
                this.burgerOpenTl.timeScale(1.1).

                    to('.top-bar', 1, { height: 107 }, 0).

                    to('.burger .refract:nth-of-type(1)', 0.1, { opacity: 0 }, 0).
                    to('.burger .refract:nth-of-type(2)', 0.2, { opacity: 0 }, 0).
                    to('.burger .refract:nth-of-type(3)', 0.3, { opacity: 0 }, 0).

                    // Line 1

                    fromTo('.close .refract:nth-of-type(1) .leading1', 1, 
                        { rotation: -45, top: -60, right: -117, width: 150 }, 
                        { rotation: -45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, 0).

                    fromTo('.close .refract:nth-of-type(1) .leading2', 1, 
                        { rotation: -45, top: -60, right: -117, width: 150 }, 
                        { rotation: -45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, overlap).

                    fromTo('.close .refract:nth-of-type(1) .block', 1, 
                        { rotation: -45, top: -60, right: -117, width: 150 }, 
                        { rotation: -45, top: 51, right: 51, width: 30, boxShadow: '0 0 2px #FFFFFF', ease: easing }, overlap).

                    fromTo('.close .refract:nth-of-type(1) .trailing1', 1, 
                        { rotation: -45, top: -60, right: -117, width: 150 }, 
                        { rotation: -45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, overlap).

                    fromTo('.close .refract:nth-of-type(1) .trailing2', 1, 
                        { rotation: -45, top: -60, right: -117, width: 150 }, 
                        { rotation: -45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, overlap).

                    // Line 2

                    fromTo('.close .refract:nth-of-type(2) .leading1', 1, 
                        { rotation: 45, top: 174, right: -135, width: 150 }, 
                        { rotation: 45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, overlap).

                    fromTo('.close .refract:nth-of-type(2) .leading2', 1, 
                        { rotation: 45, top: 174, right: -135, width: 150 }, 
                        { rotation: 45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, overlap).

                    fromTo('.close .refract:nth-of-type(2) .block', 1, 
                        { rotation: 45, top: 174, right: -135, width: 150 }, 
                        { rotation: 45, top: 51, right: 51, width: 30, boxShadow: '0 0 2px #FFFFFF', ease: easing }, overlap).

                    fromTo('.close .refract:nth-of-type(2) .trailing1', 1, 
                        { rotation: 45, top: 174, right: -135, width: 150 }, 
                        { rotation: 45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, overlap).

                    fromTo('.close .refract:nth-of-type(2) .trailing2', 1, 
                        { rotation: 45, top: 174, right: -135, width: 150 }, 
                        { rotation: 45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, overlap).

                    // Show menu
                    
                    to('.menu a:nth-of-type(1)', 0.2, 
                        { autoAlpha: 1, display:'inline-block', left: '-=10', color: '#c5dcc5', textShadow: '0 0 1px RGBA(255,255,255,0.2), -2px 0px 1px #1027ee, 2px 0 1px #ef1c1a' }, '-=0.7').
                    
                    to('.menu a:nth-of-type(2)', 0.2, 
                        { autoAlpha: 1, display:'inline-block', left: '-=10', color: '#c5dcc5', textShadow: '0 0 1px RGBA(255,255,255,0.2), -2px 0px 1px #1027ee, 2px 0 1px #ef1c1a' }, '-=0.8').
                    
                    to('.menu a:nth-of-type(3)', 0.2, 
                        { autoAlpha: 1, display:'inline-block', left: '-=10', color: '#c5dcc5', textShadow: '0 0 1px RGBA(255,255,255,0.2), -2px 0px 1px #1027ee, 2px 0 1px #ef1c1a' }, '-=0.9').

                    to('.menu a:nth-of-type(4)', 0.2, 
                        { autoAlpha: 1, display:'inline-block', left: '-=10', color: '#c5dcc5', textShadow: '0 0 1px RGBA(255,255,255,0.2), -2px 0px 1px #1027ee, 2px 0 1px #ef1c1a' }, '-=1');

            },
            close () {
                if(this.burgerOpenTl !== null && this.burgerOpenTl.isActive() != true && this.status == 'open') {
                    this.status = 'closed';
                    this.burgerOpenTl.reverse();
                }
            },
            minimize () {
                if(this.topBarScrollTl === null && this.minimized == false) {
                    this.topBarScrollTl = new TimelineMax(
                        { 
                            ease: Back.easeIn, 
                            onComplete: () => { 
                                this.minimized = true; 
                            }, 
                            onReverseComplete: () => { 
                                this.minimized = false; 
                            } 
                        }
                    );
                    this.topBarScrollTl.timeScale(2).
                        fromTo('.top-bar', 1, { height: 107 }, { height: 50 }, 0).
                        to('.openClickZone', 1, { top: 0 }, 0).
                        to('.burger .refract:nth-of-type(1)', 1, { top: '-=28', ease: Expo.easeOut }, '-=0.9').
                        to('.burger .refract:nth-of-type(2)', 1, { top: '-=28', ease: Expo.easeOut }, '-=0.9').
                        to('.burger .refract:nth-of-type(3)', 1, { top: '-=28', ease: Expo.easeOut }, '-=0.9');
                } else {
                    this.topBarScrollTl.play();
                }
            },
            maximize () {
                if(this.topBarScrollTl !== null && this.minimized == true) {
                    this.topBarScrollTl.reverse();
                    this.minimized = false;
                }
            },
            handleScroll (scrollY) {
                this.close();
                setTimeout(() => {
                    if(scrollY > 300) {
                        this.minimize();
                    } else {
                        if(window.innerWidth > 600) {
                            this.maximize();
                        }
                    }
                }, 1000);
            }
        }
    }
</script>