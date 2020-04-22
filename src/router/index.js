import Vue from 'vue';
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index'
Vue.use(VueRouter);


export const routes = [{
    path: '/user',
    component: Layout,
    meta: {
        title: '用户管理',
        icon: 'example'
    },
}]


export default new VueRouter({
    routes: routes,
    scrollBehavior:()=>({y:0}),
})