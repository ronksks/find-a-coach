// Importing required modules for Vue Router setup
import { createRouter, createWebHistory } from 'vue-router';

// Importing Vue components for different pages
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

// Creating the Vue Router instance
const router = createRouter({
  history: createWebHistory(), // Using web history mode for routing
  routes: [
    { path: '/', redirect: '/coaches' }, // Redirecting the root URL to /coaches
    { path: '/coaches', component: CoachesList }, // Route for the coaches list
    {
      path: '/coaches/:id', // Dynamic route for coach details with ID
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // Child route for contacting a coach
      ]
    },
    { path: '/register', component: CoachRegistration }, // Route for coach registration
    { path: '/requests', component: RequestsReceived }, // Route for received requests
    { path: '/:notFound(.*)', component: NotFound } // Catch-all route for handling 404 errors
  ]
});

export default router;
