export default {
    async registerCoach(contex, data) {
        const userId = contex.rootGetters.userId

        const coachData = {
            // id: new Date().toISOString(),
            // id: contex.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }
        const response = await fetch(`https://find-a-coach-70c75-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        })
        // const responsData = await response.json()
        if (response.ok) {
            //error
        }
        contex.commit('registerCoach', {
            ...coachData,
            id: userId
        })

    },
    async loadCoaches(contex) {
        const response = await fetch(`https://find-a-coach-70c75-default-rtdb.firebaseio.com/coaches.json`)
        const responseData = await response.json()
        if (response.ok) {
            //error
        }
        const coaches = []
        for (const key in responseData) {
            const coach = {
                is: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }
            coaches.push(coach)
        }
        contex.commit('setCoaches', coaches)
    }
};