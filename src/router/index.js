import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page from '@/components/Page'
import GameList from '@/components/GameList'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/page',
            name: 'Page',
            component: Page
        }, {
            path: '/gamelist',
            name: 'GameList',
            component: GameList
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/signup',
            name: 'Signup',
            component: SignUp
        }
    ]
})
