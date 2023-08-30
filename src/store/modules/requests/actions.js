export default {
    async contactCoach(context, payload) {
        const newRequest = {
            // id: new Date().toISOString(),
            // coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        };
        const response = await fetch(
            `https://find-a-coach-70c75-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
            {
                method: 'POST',
                body: JSON.stringify(newRequest)
            }
        );
        const responseData = await response.json()

        console.log(responseData)

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request.')
            throw error
        }
        newRequest.id = responseData.name
        newRequest.coachId = payload.coachId

        context.commit('addRequest', newRequest);
    },

    async fetchRequests(context) {
        const coachId = context.rootGetters.userId
        const response = await fetch(`https://find-a-coach-70c75-default-rtdb.firebaseio.com/requests/${coachId}.json`)
        const responseData = await response.json()

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests.')
            throw error
        }
        const requests = []
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }
            requests.push(request)

        }
        context.commit('setRequests', requests)

    },


    // async loadRequests(context) {
    //     const response = await fetch(
    //         `https://find-a-coach-70c75-default-rtdb.firebaseio.com/requests/${this.contactCoach()}.json`
    //     );
    //     const responseData = await response.json();
    //
    //     if (!response.ok) {
    //         const error = new Error(responseData.message || 'Failed to fetch!');
    //         throw error;
    //     }
    //
    //     const requests = []
    //
    //     // const coaches = [];
    //     //
    //     // for (const key in responseData) {
    //     //   const coach = {
    //     //     id: key,
    //     //     firstName: responseData[key].firstName,
    //     //     lastName: responseData[key].lastName,
    //     //     description: responseData[key].description,
    //     //     hourlyRate: responseData[key].hourlyRate,
    //     //     areas: responseData[key].areas
    //     //   };
    //     //   coaches.push(coach);
    //     // }
    //
    //     context.commit('setCoaches', coaches);
    // }
};
