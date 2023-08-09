export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.hasCoaches && state.coaches.length>0;
    }
};