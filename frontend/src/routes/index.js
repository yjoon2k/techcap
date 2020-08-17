import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '../main.vue';

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainpage',
            component: mainpage
        }
    ]
})