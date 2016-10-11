<template>
    <div>
        <div class="openClickZone" v-on:click="open" v-if="status == 'closed'"></div>
        <div class="closeClickZone" v-on:click="close" v-if="status == 'open'"></div>
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
    </div>
</template>

<style lang="sass" scoped>
    .refract {
        position: absolute;
        .leading1,
        .leading2,
        .block,
        .trailing1,
        .trailing2 {
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .leading1 {
            background-color: #1027ee;
            box-shadow: 2px 0 1px #1027ee;
            z-index: 1;
        }
        .leading2 {
            background-color: #2aecef;
            box-shadow: 1px 0 2px #2aecef;
            z-index: 2;
        }
        .block {
            background-color: #FFFFFF;
            box-shadow: 0 0 1px #FFFFFF;
            z-index: 3
        }
        .trailing1 {
            background-color: #f2f235;
            box-shadow: -1px 0 1px #f2f235;
            z-index: 2;
        }
        .trailing2 {
            background-color: #ef1c1a;
            box-shadow: -2px 0 1px #ef1c1a;
            z-index: 1;
        }
    }
    .openClickZone,
    .closeClickZone {
        position: fixed;
        top: 27px;
        right: 34px;
        width: 60px;
        height: 50px;
        cursor: pointer;
        z-index: 2
    }
    .burger {
        cursor: pointer;
        .refract {
            position: fixed;
            height: 2px;
            top: 45px; 
            left: -680px;
            z-index: 1;
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
            z-index: 1;
            .leading1,
            .leading2,
            .block,
            .trailing1,
            .trailing2 {
                top: -100px;
            }
        }
    }
</style>

<script>
    import { TweenMax } from 'gsap';
    export default {
        data(){
            return {
                burgerOpenTl: null,
                status: 'closed'
            }
        },
        beforeMount() {
            window.addEventListener('load', () => {
                this.refractBurger();
            });
        },
        mounted() {
            if(document.readyState === 'complete') {
                this.refractBurger();
            }
        },
        methods: {
            refractBurger() {
                const tl = new TimelineMax({ delay: 2 });
                const windowWidth = window.innerWidth + 600;
                const moveX = "+=" + windowWidth;
                const easing = Expo.easeOut;
                const overlap = "-=1.97";

                tl.timeScale(0.75).
                fromTo('.burger .refract', 2, {left: -680, width: 600}, { left: -680, width: 600, ease: easing }, 0).
                to('.burger .leading1', 2, { width: 30, left: moveX, ease: easing }, 0).
                to('.burger .leading2', 2, { width: 30, left: moveX, ease: easing }, overlap).
                to('.burger .block', 2, { width: 30, left: moveX, ease: easing }, overlap).
                to('.burger .trailing1', 2, { width: 30, left: moveX, ease: easing }, overlap).
                to('.burger .trailing2', 2, { width: 30, left: moveX, ease: easing, onComplete: () => {
                    const lines = document.querySelectorAll('.burger .line');
                    const burgerRefract = document.querySelectorAll('.burger .refract');
                
                    [].forEach.call(lines, function(line) {
                        line.style.left = null;
                    });

                    [].forEach.call(burgerRefract, function(refract) {
                        refract.style.left = 'auto';
                        refract.style.right = '50px';
                        refract.style.width = '30px';
                    });
                } }, overlap);
            },
            open() {
                if(this.burgerOpenTl !== null && this.burgerOpenTl.isActive() == true) {
                    return;
                }
                this.status = 'open';
                this.burgerOpenTl = new TimelineMax({ ease: Back.easeIn });
                const overlap = "-=0.95";
                const easing = Expo.easeOut;
                this.burgerOpenTl.timeScale(1.1).
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
                        { rotation: 45, top: 51, right: 51, boxShadow: 0, width: 30, ease: easing }, overlap);
            },
            close() {
                if(this.burgerOpenTl.isActive() != true) {
                    this.status = 'closed';
                    this.burgerOpenTl.reverse();
                }
            }
        }
    }
</script>