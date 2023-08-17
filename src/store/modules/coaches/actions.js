export default {
    registerCoach(contex, data) {
        const coachData = {
            // id: new Date().toISOString(),
            id: contex.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }
        contex.commit('registerCoach', coachData)

    }
};