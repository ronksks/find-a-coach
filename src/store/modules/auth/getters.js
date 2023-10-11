export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token
    },
    // returns true is there is a token
    isAuthenticated(state) {
        return !!state.token
    }

}