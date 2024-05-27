import { createStore } from 'vuex';

const authModule = {
    namespaced: true,
    state: {
        isLoggedIn: false,
        username: null
    },
    mutations: {
        setLoggedIn(state, value) {
            state.isLoggedIn = value;
        },
        setUsername(state, username) {
            state.username = username;
        }
    }
};

export default createStore({
    modules: {
        auth: authModule
    }
});
