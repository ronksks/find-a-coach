export default {
    // Getter to retrieve the list of coaches from the state
    coaches(state) {
        return state.coaches;
    },
    // Getter to check if there are coaches available in the state
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    // Getter to check if the current user is also a coach
    isCoach(_, getters, _2, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id === userId);
    },
    // Getter to determine if coach data should be updated
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        // Check if data was fetched more than a minute ago
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};
