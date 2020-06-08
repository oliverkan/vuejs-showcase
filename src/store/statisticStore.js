import StatisticService from '../services/statisticService';

export default {
    namespaced: true,
    state: {statistics:[]},
    actions: {
        getStatistics({ commit }) {
            return StatisticService.getStatistics().then(
                statistic => {
                    commit('setStatistics', statistic);
                    return Promise.resolve(statistic);
                }
            );
        }
    },
    mutations: {
        setStatistics(state, statistics) {
            state.statistics = statistics;
        }
    },
    getters:{
        statistics(state){
            return state.statistics;
        }
    }
};