import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '../main.vue';
import mypage from '../mypage.vue';
import mainbutton from '../components/mainbutton.vue';

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainpage',
            component: mainpage
        },
        {
            path: '/mypage',
            name: 'mypage',
            component: mypage
        },
        {
            path: '/mainbutton',
            name: 'mainbutton',
            component: mainbutton
        }
    ]
})