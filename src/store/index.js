import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// import user from './user'

console.log('store')

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        CHANGE_COUNT(state) {
            state.count++
        }
    },
    modules: {
        // user
    }
})


export default store;