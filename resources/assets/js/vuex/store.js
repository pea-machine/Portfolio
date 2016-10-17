import Vue from 'vue'
import Vuex from 'vuex'

const state = {
    scrollY: 0,
    pageLoading: false
}

const mutations = {
    updateScrollPositionY (state, scrollY) {
        state.scrollY = scrollY;
    },
    updatePageLoadingStatus(state, pageLoading) {
        state.pageLoading = pageLoading;
    }
}

export default new Vuex.Store({
    state,
    mutations
})