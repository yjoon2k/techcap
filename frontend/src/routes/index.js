import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '../main.vue';
import mypage from '../mypage.vue';
import aim from '../aim.vue';
import select from '../select.vue';
import example from '../example.vue';
import file from '../file.vue';
import info from '../info.vue';
import studentApply from '../studentApply.vue';
import teacherApply from '../teacherApply.vue';
import match from '../match';

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/studentApply',
            name: 'studentApply',
            component: studentApply
        },
        {
            path: '/teacherApply',
            name: 'teacherApply',
            component: teacherApply
        },
        {
            path: '/match',
            name: 'match',
            component: match
        },
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
            path: '/aim',
            name: 'aim',
            component: aim
        },
        {
            path: '/select',
            name: 'select',
            component: select
        },
        {
            path: '/example',
            name: 'example',
            component: example
        },
        {
            path: '/file',
            name: 'file',
            component: file
        },
        {
            path: '/info',
            name: 'name',
            component: info
        }
    ]
})