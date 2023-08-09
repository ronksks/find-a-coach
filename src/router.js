import {createRouter, createWebHistory} from 'vue-router'
import coachesList from "@/pages/coaches/CoachesList.vue";
import contactCoach from "@/pages/requests/ContactCoach.vue";
import requestsReceived from "@/pages/requests/requestsReceived.vue";
import notFound from "@/pages/NotFound.vue";
import coachesDetail from "@/pages/coaches/CoachesDetail.vue";
import coachRegistration from "@/pages/coaches/CoachRegistration.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: coachesList},
        {
            path: '/coaches/:id', component: coachesDetail, children: [

                {path: '/contact', component: contactCoach}, // /coaches/c1/contact
            ]
        },
        {path: '/register', component: coachRegistration},
        {path: '/requests', component: requestsReceived},
        {path: '/:notFound(.*)', component: notFound},
        // {path :'/contact', component:null},

    ],
});

export default router