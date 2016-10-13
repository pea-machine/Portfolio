import Vue from 'vue'
import Vuex from 'vuex'

const state = {
    scrollY: 0
}

const mutations = {
    updateScrollPositionY (state, scrollY) {
        state.scrollY = scrollY;
    }
}

export default new Vuex.Store({
    state,
    mutations
})