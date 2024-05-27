import { createStore } from 'vuex';

interface AuthState {
    isLoggedIn: boolean;
    username: string | null;
}

const authModule = {
    namespaced: true,
    state(): AuthState {
        return {
            isLoggedIn: false,
            username: null
        };
    },
    mutations: {
        setLoggedIn(state: AuthState, value: boolean) {
            state.isLoggedIn = value;
        },
        setUsername(state: AuthState, username: string) {
            state.username = username;
        }
    }
};

export default createStore({
    modules: {
        auth: authModule
    }
});
