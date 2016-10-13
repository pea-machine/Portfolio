/**
 * Scroll Listener
 * Updates scroll position in Vuex store on change
 */

import store from './vuex/store.js';

export default function () {
    window.scrollListener = window.addEventListener('scroll', () => {
        store.commit('updateScrollPositionY', window.scrollY);
    }); 
}
