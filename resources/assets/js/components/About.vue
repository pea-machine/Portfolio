<template>
    <div>
        <div class="grid gut100 outergut">
            <div class="col perc50 smallest-to-100 smaller-to-100 small-to-100">
                <div class="block-image">
                    <img src="/public/img/display-picture.jpg" class="display-picture">
                </div>
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

</style>

<script>
    export default {
        data () {
            return {
                fauxBodyHeight: 0
            }
        },
        mounted() {
            this.fauxBodyHeight = window.innerHeight;
            document.querySelector('#app').style.height = this.fauxBodyHeight + 'px';
            setTimeout(() => { document.querySelector('#app').style.minHeight = 0; }, 4000);
            window.addEventListener('resize', this.handleResize)
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
            }
        }
    }
</script>
