import UserService from '../services/userService';


export const user = {
    namespaced: true,
    state: null,
    actions: {
        getUser({ commit }, user) {
            UserService.getUserDetail(user.id).then(
                user => {
                    commit('loginSuccess', user);
                }
            )
        }

    },
    mutations: {

    }
};