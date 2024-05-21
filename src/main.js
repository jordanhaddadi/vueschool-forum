import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome.vue'
import * as VueRouter from 'vue-router'

const routes = [
    { 
        path: '/',
        component: PageHome
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const forumApp = createApp(App)
forumApp.use(router)
forumApp.mount('#app')
