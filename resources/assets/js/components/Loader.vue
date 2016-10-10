<template>
    <div class="page-loader" v-if="!animationEnded">
        <div ref="logo" v-html="logoSvg"></div>
    </div>
</template>

<style lang="sass">
    .page-loader {
        background-color: #000000;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        .logo {
            position: absolute;
            top: 200px;
            left: 50%;
            width: 30%;
            margin: 0 0 0 -13%;
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
    export default {
        data() {
            return {
                logoSvg: '',
                pageLoading: true,
                animationEnded: false
            }
        },
        beforeCreate() {
            fetch('/public/img/peabay-logo.svg')
                .then((response) => {
                    return response.text();
                })
                .then((body) => {
                    this.logoSvg = body;
                })
                .then(() => {
                    this.startAnimation();
                    // Page loaded listener
                    window.addEventListener("load", () => {
                        setTimeout(() => {
                            this.pageLoading = false;
                        }, 3000);
                    });
                    // Hide loader after 15 seconds as fallback
                    setTimeout(() => {
                        this.pageLoading = false;
                    }, 15000);
                });
        },
        methods: {
            startAnimation() {
                TweenMax.staggerFromTo('.logo', 
                    1, 
                    { scale: 1.1 }, 
                    { scale: 0.9, ease: Back.easeOut }, 
                    0.5);
                
                let logoAnimationX = TweenMax.fromTo('.logo #background', 50, { attr:{ x: 0 } }, { attr:{ x: -10000 }, ease: Power0.easeNone });
                let logoAnimationY = TweenMax.fromTo('.logo #background', 60, { attr:{ y: -80 } }, { attr:{ y: -300 }, ease: Power0.easeNone });

                let pageLoadingChecker = setInterval(() => {
                    if(!this.pageLoading) {
                        clearInterval(pageLoadingChecker);
                        this.endAnimation(logoAnimationX, logoAnimationY);
                    }
                }, 1000);

            },
            endAnimation(logoAnimationX, logoAnimationY) {
                logoAnimationX.pause();
                logoAnimationY.pause();
                const tl = new TimelineMax({ ease: Back.easeIn });
                tl.
                fromTo('.logo', 0.2, { opacity: 1, scale: 0.9 }, { opacity: 0, scale: 0.8 }, 0).
                fromTo('.page-loader', 1, { opacity: 1 }, { opacity: 0, onComplete: () => { this.animationEnded = true; } }, 0);
            }
        }
    }
</script>
