<template>
    <div>
        <div class="work-container">
            <div class="header">
                <blockquote>Work lovingly created for Sky, ASOS, Vue Cinemas, Diageo, Macmillan and EE. Here are some favorites.</blockquote>
            </div>
            <div class="work" ref="workContainer">
                <div class="item">
                    <div class="grid gut40 smallest-to-20 smaller-to-40 small-to-60 medium-to-40 outergut">
                        <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100 medium-to-100">
                            <div class="video">
                                <video v-on:canplaythrough="handleLoad" class="handleLoad" width="100%" height="auto" autoplay="autoplay" loop="loop" poster="/public/video/daretodonate_10s_placeholder.jpg">
                                    <source src="/public/video/daretodonate_10s_compressed.webm" type="video/webm">
                                    <source src="/public/video/daretodonate_10s_compressed.mp4" type="video/mp4">
                                    <img src="/public/video/daretodonate_10s_placeholder.jpg">
                                </video>
                            </div>
                        </div>
                        <div class="col perc40 smallest-to-100 smaller-to-100 small-to-100 medium-to-100">
                            <div class="caption">
                                <h2>Dare to Donate</h2>
                                <p>Fundraising platform to combat 'donation fatigue'. The app asked fundraisers put to their friends a number of challenges they would be willing to do. A vote for one of these dares costs a single donation to charity. When the voting is finished all funds go to their chosen charity and the fundraiser completes the winning challenge.</p>
                                <p>We worked with anti-bullying charity Ditch the Label to build a bespoke version which was used and promoted by TV and YouTube personalities. We also worked with Macmillan to run a pilot.</p>
                                <p>The app was featured by JustGiving and exhibited at the launch of their API. Since then the app has raised thousands for charity and is publicized by hundreds of charities.</p>
                                <div class="button-container bottom">
                                    <a href="http://daretodonate.co" target="_blank" class="button primary">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="grid gut40 smallest-to-20 smaller-to-40 small-to-60 medium-to-40 outergut">
                        <div class="col perc10 smallest-hide smaller-hide small-hide medium-hide"></div>
                        <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100 medium-to-100 smallest-show smaller-show smaller-show small-show medium-show">
                            <video v-on:canplaythrough="handleLoad" class="handleLoad" width="100%" height="auto" autoplay="autoplay" loop="loop" poster="/public/video/techmog_10s_placeholder.jpg">
                                <source src="/public/video/techmog_10s_compressed.webm" type="video/webm">
                                <source src="/public/video/techmog_10s_compressed.mp4" type="video/mp4">
                                <img src="/public/video/techmog_10s_placeholder.jpg">
                            </video>
                        </div>
                        <div class="col perc40 smallest-to-100 smaller-to-100 small-to-100 medium-to-100">
                            <div class="caption">
                                <h2>Techmog</h2>
                                <p>I founded, designed and built the product design blog which covers the maker community in London. Techmog's brand was inspired by the community's growing preference for blazing colours and bold design.</p>
                                <p>We focus on hardware in London, covering everything from hobby projects to product design. We use a technical perspective to discover how products are made. With this we aim to change the way people think about the products they use and inspire them to create their own.</p>
                                <div class="button-container bottom">
                                    <a href="http://techmog.com" target="_blank" class="button primary">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100 medium-to-100 smallest-hide smaller-hide small-hide medium-hide">
                            <video v-on:canplaythrough="handleLoad" class="handleLoad" width="100%" height="auto" autoplay="autoplay" loop="loop" poster="/public/video/techmog_10s_placeholder.jpg">
                                <source src="/public/video/techmog_10s_compressed.webm" type="video/webm">
                                <source src="/public/video/techmog_10s_compressed.mp4" type="video/mp4">
                                <img src="/public/video/techmog_10s_placeholder.jpg">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="grid gut40 smallest-to-20 smaller-to-40 small-to-60 medium-to-40 outergut">
                        <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100 medium-to-100">
                            <video v-on:canplaythrough="handleLoad" class="handleLoad" width="100%" height="auto" autoplay="autoplay" loop="loop" poster="/public/video/sky_20s_placeholder.jpg">
                                <source src="/public/video/sky_20s.webm" type="video/webm">
                                <source src="/public/video/sky_20s.mp4" type="video/mp4">
                                <img src="/public/video/sky_20s_placeholder.jpg">
                            </video>
                        </div>
                        <div class="col perc40 smallest-to-100 smaller-to-100 small-to-100 medium-to-100">
                            <div class="caption">
                                <h2>Sky Fortitude</h2>
                                <p>Sky made the unusual decision to host the website of their new TV show Fortitude on Tumblr. Its limitations meant day-to-day problem solving but we ended up with a very flexible design that could be modified via tag names.</p>
                                <p>The design itself was based on a spine. Applying specific tags to posts allowed them to take different forms; hero'ing a video or a scattering of images.</p>
                                <div class="button-container bottom">
                                    <a href="http://skyfortitude-blog.tumblr.com" target="_blank" class="button primary">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="grid gut40 smallest-to-20 smaller-to-40 small-to-60 medium-to-40 outergut">
                        <div class="col perc10 smallest-hide smaller-hide small-hide medium-hide"></div>
                        <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100 medium-to-100 smallest-show smaller-show small-show medium-show">
                            <video v-on:canplaythrough="handleLoad" class="handleLoad" width="100%" height="auto" autoplay="autoplay" loop="loop" poster="/public/video/adorer_10s_placeholder.jpg">
                                <source src="/public/video/Adorer_10s_compressed.webm" type="video/webm">
                                <source src="/public/video/Adorer_10s_compressed.mp4" type="video/mp4">
                                <img src="/public/video/adorer_10s_placeholder.jpg">
                            </video>
                        </div>
                        <div class="col perc40 smallest-to-100 smaller-to-100 small-to-100 medium-to-100">
                            <div class="caption">
                                <h2>Adorer</h2>
                                <p>Adorer was a highly successful tool to build your Twitter following which, unfortunately, had its plug pulled.</p>
                                <p>It's known that liking people's tweets would sometimes return a follow back. Do this enough and you can build a decent following. But do it too much and you risk annoying people. Adorer was designed to like people's tweets very quickly but only once per person.</p>
                                <p>Until Twitter decided that it was the wrong side of borderline inappropriate the app was generating revenue with a monthly subscription.</p>
                            </div>
                        </div>
                        <div class="col perc50 smallest-to-100 smaller-to-100 smallest-hide smaller-hide small-hide medium-hide">
                            <video v-on:canplaythrough="handleLoad" class="handleLoad" width="100%" height="auto" autoplay="autoplay" loop="loop" poster="/public/video/adorer_10s_placeholder.jpg">
                                <source src="/public/video/Adorer_10s_compressed.webm" type="video/webm">
                                <source src="/public/video/Adorer_10s_compressed.mp4" type="video/mp4">
                                <img src="/public/video/adorer_10s_placeholder.jpg">
                            </video>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="grid gut100 smallest-to-20 smaller-to-40 small-to-60 medium-to-40 large-to-40 outergut">
                        <div class="col perc33 smallest-to-100 smaller-to-100 small-to-100 medium-to-50">
                            <div style="background-image: url('/public/img/screenshots/biglight.jpg')" class="background-image"></div>
                            <div class="caption">
                                <h3>Biglight</h3>
                                <p>JavaScript animation, UI and CMS improvements.</p>
                                <ul class="tags">
                                    <li>Wordpress</li>
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                    <li>Less</li>
                                </ul>
                            </div>
                        </div>
                        <!-- <div class="col perc33">
                            <div style="background-image: url('/public/img/screenshots/thefoldline.jpg')" class="background-image"></div>
                            <div class="caption">
                                <h3>The Fold Line</h3>
                                <p>New reviews section, UI adjustments, ported images from local server to AWS.</p>
                                <ul class="tags">
                                    <li>Wordpress</li>
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                    <li>SCSS</li>
                                </ul>
                            </div>
                        </div> -->
                        <div class="col perc33 smallest-to-100 smaller-to-100 small-to-100 medium-to-50">
                            <div style="background-image: url('/public/img/madame-tussauds-banner.jpg')" class="background-image"></div>
                            <div class="caption">
                                <h3>Madame Tussauds</h3>
                                <p>Bracket game with Facebook login.</p>
                                <ul class="tags">
                                    <li>JavaScript</li>
                                    <li>Facebook API</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col perc33 smallest-to-100 smaller-to-100 small-to-100 medium-to-50">
                            <div style="background-image: url('/public/img/ee-banner.jpg')" class="background-image"></div>
                            <div class="caption">
                                <h3>EE</h3>
                                <p>JavaScript animation, design.</p>
                                <ul class="tags">
                                    <li>JavaScript</li>
                                    <li>GSAP</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col perc33 smallest-to-100 smaller-to-100 small-to-100 medium-to-50">
                            <div style="background-image: url('/public/img/asos-banner.jpg')" class="background-image"></div>
                            <div class="caption">
                                <h3>ASOS</h3>
                                <p>20+ Facebook apps.</p>
                                <ul class="tags">
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                    <li>Facebook API</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col perc33 smallest-to-100 smaller-to-100 small-to-100 medium-to-50">
                            <div style="background-image: url('/public/img/vue-banner.jpg')" class="background-image"></div>
                            <div class="caption">
                                <h3>Vue Cinemas</h3>
                                <p>Custom CMS to manage competitions and giveaways.</p>
                                <ul class="tags">
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                    <li>Facebook API</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col perc33 smallest-to-100 smaller-to-100 small-to-100 medium-to-50">
                            <div style="background-image: url('/public/img/screenshots/openplanned.jpg')" class="background-image"></div>
                            <div class="caption">
                                <h3>Open Planned</h3>
                                <p>Back-end functionality to enable visitor-submitted content.</p>
                                <ul class="tags">
                                    <li>Wordpress</li>
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                    <li>SCSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

    .work-container {
        position: fixed;
        height: 100vh;
    }

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

    .work {
        padding: 100px 0 0 0;
        width: 100%;
        .item {
            top: 0;
            left: 0;
            width: 100%;
            min-height: 100vh;
            @media all and (min-width: 0) and (max-width: $tablet-portrait-width){ 
                min-height: auto;
            }
            video {
                object-fit: cover;
                object-position: 0 0;
            }
            .caption {
                font-size: 18px
            }
            .background-image {
                padding-bottom: 50%;
                background-size: cover;
                background-position: center;
            }
            .tags {
                list-style: none;
                margin: 0;
                padding: 0;
                li {
                    display: inline-block;
                    font-size: 12px;
                    background-color: RGBA(255,255,255,0.07);
                    padding: 1px 8px;
                    border-radius: 3px;
                    color: #a395a7;
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
                ticking: false,
                fauxBodyHeight: 0,
                itemCount: document.querySelectorAll('.work .item').length,
                handleLoadTotal: 0,
                handleLoadDone: 0
            }
        },
        mounted () {
            this.handleLoadTotal = this.$el.getElementsByClassName('handleLoad').length | 0;
            this.fauxBodyHeight = document.querySelector('.work').offsetHeight + document.querySelector('.header').offsetHeight;
            document.querySelector('#app').style.height = this.fauxBodyHeight + 'px';
            store.subscribe((updateScrollPositionY, state) => {
                this.handleScroll(state.scrollY);
            });
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
            handleScroll (scrollY) {
                if (!this.ticking) {
                    window.requestAnimationFrame(() => {
                        new TweenMax('.work-container', 1, { y: scrollY * -1 });
                        this.ticking = false;
                    });
                }
                this.ticking = true;
            },
            handleResize () {
                this.fauxBodyHeight = document.querySelector('.work').offsetHeight + document.querySelector('.header').offsetHeight;
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