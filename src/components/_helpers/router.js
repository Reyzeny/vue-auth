import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../home/Homepage'
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes:[
        { path: '/', component: HomePage },
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage },

        { path: '*', redirect: '/' }
    ]
})

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    const publicPages = ['/login', '/register']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')

    if (authRequired && !loggedIn) {
        return next('/login')
    }
    next()
})