import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {  
        value: 7
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        updateValue: (context, payload) => {
            context.commit('updateValue', payload);
        }
    },
    modules: {
        counter
    }
})