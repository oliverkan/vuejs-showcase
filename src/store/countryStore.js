import CountryService from '../services/countryService';

export default {
    namespaced: true,
    state: {countryList:[]},
    actions: {
        getCountryList({ commit }) {
            return CountryService.getCountryList().then(
                country => {
                    commit('setCountryList', country);
                    return Promise.resolve(country);
                }
            );
        }
    },
    mutations: {
        setCountryList(state, countries) {
            state.countryList = countries;
        }
    },
    getters:{
        countries(state){
            return state.countryList;
        }
    }
};