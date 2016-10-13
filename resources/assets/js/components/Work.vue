<template>
    <div>
        <loader></loader>
        <burger></burger>
        <div class="container">
            <div class="header">
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tempor quam. Duis ut bibendum nulla, eleifend consequat sem. </blockquote>
            </div>
            <div class="work" ref="workContainer">
                <div class="item">
                    <div class="grid gut40 outergut">
                        <div class="col perc50">
                            <video width="100%" height="auto" autoplay="autoplay" loop="loop" poster="/public/video/daretodonate_10s_placeholder.jpg">
                                <source src="/public/video/daretodonate_10s_compressed.webm" type="video/webm">
                                <source src="/public/video/daretodonate_10s_compressed.mp4" type="video/mp4">
                                <img src="/public/video/daretodonate_10s_placeholder.jpg">
                            </video>
                        </div>
                        <div class="col perc50">
                            <div class="caption">
                                <h2>Dare to Donate</h2>
                                <p>The aim was to combat donation fatigue by making people want to give to charity. The app asked fundraisers put to their friends a number of chllenges they would be willing to do. A vote for one of these dares costs a single donation to charity. When the voting is finished all funds go to their chosen charity and the fundraiser completes the winning challenge.</p>
                                <p>We worked with anti-bullying charity Ditch the Label to build a bespoke version which was graced by TV and YouTube personalities. We were also approached by Macmillan to run a trial with them.</p>
                                <p>The app was featured by JustGiving and exhibited at the launch of their API. Since then the app has raised thousands for charity and is loved by hundreds of charities.</p>
                                <div class="button-container bottom">
                                    <a href="http://daretodonate.co" target="_blank" class="button primary cycle-background">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="grid gut40 outergut">
                        <div class="col perc50">
                            <video width="100%" height="auto" autoplay="autoplay" loop="loop" poster="/public/video/techmog_10s_placeholder.jpg">
                                <source src="/public/video/techmog_10s_compressed.webm" type="video/webm">
                                <source src="/public/video/techmog_10s_compressed.mp4" type="video/mp4">
                                <img src="/public/video/techmog_10s_placeholder.jpg">
                            </video>
                        </div>
                        <div class="col perc50">
                            <div class="caption">
                                <h2>Techmog</h2>
                                <p>I founded, designed and built the product design blog which covers the maker community in London. Techmog's brand was inspured by the community's growing preference for blazing colours and bold design.</p>
                                <p>We focus on hardware in London, covering everything from hobby projects to product design. We use a technical perspective to discover how products are made. With this we aim to change the way people think about the products they use and inspire them to create their own.</p>
                                <div class="button-container bottom">
                                    <a href="http://techmog.com" target="_blank" class="button primary cycle-background">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>

    .container {
        position: fixed;
        height: 100vh;
    }

    .header {
        height: 100vh;
        position: relative;
        width: 100%;
        blockquote {
            position: absolute;
            top: 30%;
            transform: translateY(-50%);
            text-align: right;
            font-size: 30px;
            font-family: georgia;
            font-weight: 100;
            max-width: 50%;
            right: 0;
            color: rgb(222, 213, 226);
            letter-spacing: 0.03em;
            line-height: 1.3em;
        }
    }

    .work {
        padding: 100px 0 0 0;
        width: 100%;
        .item {
            top: 0;
            left: 0;
            width: 100%;
            min-height: 100vh;
            font-family: georgia;
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
                ticking: false,
                fauxBodyHeight: window.innerHeight * 3,
                itemCount: document.querySelectorAll('.work .item').length
            }
        },
        mounted () {
            document.querySelector('#app').style.height = this.fauxBodyHeight + 'px';
            store.subscribe((updateScrollPositionY, state) => {
                this.handleScroll(state.scrollY);
            });
        },
        methods: {
            handleScroll (scrollY) {
                if (!this.ticking) {
                    window.requestAnimationFrame(() => {
                        new TweenMax('.container', 1, { y: scrollY * -1 }); 
                        this.ticking = false;
                    });
                }
                this.ticking = true;
            }
        }
    }
</script>