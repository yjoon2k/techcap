import Vue from 'vue'
import Router from 'vue-router'
import helloworld from '@/components/HelloWorld.vue';

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'helloworld',
            component: helloworld
        }
    ]
})