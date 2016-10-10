<template>
    <div>
        <loader></loader>
        <video width="100%" height="auto" class="videoLazyLoad playing" poster="/public/img/video/daretodonate_10s_placeholder.jpg">
            <source src="/public/img/video/daretodonate_10s_compressed.webm" type="video/webm">
            <source src="/public/img/video/daretodonate_10s_compressed.mp4" type="video/mp4">
            <img src="/public/img/video/daretodonate_10s_placeholder.jpg">
        </video>
        <video width="100%" height="auto" class="videoLazyLoad paused" poster="/public/img/video/techmog_10s_placeholder.jpg">
            <source src="/public/img/video/techmog_10s_compressed.webm" type="video/webm">
            <source src="/public/img/video/techmog_10s_compressed.mp4" type="video/mp4">
            <img src="/public/img/video/techmog_10s_placeholder.jpg">
        </video>
        <video width="100%" height="auto" class="videoLazyLoad paused" poster="/public/img/video/adorer_10s_placeholder.jpg">
            <source src="/public/img/video/Adorer_10s_compressed.webm" type="video/webm">
            <source src="/public/img/video/Adorer_10s_compressed.mp4" type="video/mp4">
            <img src="/public/img/video/adorer_10s_placeholder.jpg">
        </video>
    </div>
</template>

<style lang="sass" scoped>

</style>

<script>
    import Loader from './Loader.vue'
    export default {
        components: {
            'loader': Loader
        }
    }
</script>
