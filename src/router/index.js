import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import CountryDetails from '../views/CountryDetails.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/:countryName',
        name: 'CountryDetails',
        component: CountryDetails,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
