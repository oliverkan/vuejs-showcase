import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './authStore';
import { user } from './userStore';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth, user
    }
});