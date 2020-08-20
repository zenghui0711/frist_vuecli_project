import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import user from './user'
const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        CHANGE_COUNT(state) {
            state.count++
        },
        logins(state, obj) {
            state.count += obj.count;
        }

    },
    modules:{
        user
    }
})


export default store;