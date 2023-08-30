export default {
    // Action to register a new coach
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        // Sending a PUT request to update coach data on Firebase
        const response = await fetch(
            `https://find-a-coach-70c75-default-rtdb.firebaseio.com/coaches/${userId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(coachData)
            }
        );

        const responseData = await response.json();

        // Handling errors if the response is not successful
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to register!');
            throw error;
        }

        // Committing the registered coach's data to the store
        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    // Action to load coaches from the Firebase database
    async loadCoaches(context, payload) {
        // Checking if data should be refreshed based on payload and store state
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }

        // Fetching coach data from Firebase
        const response = await fetch(
            `https://find-a-coach-70c75-default-rtdb.firebaseio.com/coaches.json`
        );
        const responseData = await response.json();

        // Handling errors if the response is not successful
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const coaches = [];

        // Iterating through the received data to create coach objects
        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            };
            coaches.push(coach);
        }

        // Committing the fetched coach data to the store and updating timestamp
        context.commit('setCoaches', coaches);
        context.commit('setFetchTimeStamp');
    }
};
