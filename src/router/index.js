import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import MovieDetail from '/src/components/MovieDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/movie/:id',
        name: 'Movie Detail',
        component: MovieDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router