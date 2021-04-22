import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/vuex',
        component: Vuex,
        name: 'Vuex'
    },
    {
        path: '/axios',
        component: () => import ('@/views/axios.vue'), // 懒加载
        name: 'Axios'

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router