import Vue from 'vue';
import Vuex from 'vuex';
import AuthStore from './authStore';
import UserStore from './userStore';
import CountryStore from './countryStore';
import StatisticStore from './statisticStore';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: AuthStore, user: UserStore, country: CountryStore, statistic: StatisticStore
    }
});