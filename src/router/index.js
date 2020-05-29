import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'

Vue.use(VueRouter);
//array of routes in web application.
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name:'login',
        // lazy-loaded
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/user',
        component: User
    }
];

const router = new VueRouter({
    routes
});

export default router
