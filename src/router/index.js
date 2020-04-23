import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//导入路由组件
import Layout from '../views/layout/index.vue';
// import theone from '../components/one.vue';
// import thetwo from '../components/two.vue';
// import user from '../views/user/list';

//创建VueRouter对象
const routes = [
    {
        path:'',
        redirect:'/layout'
    },
    {
        path:'/layout',
        component:Layout
    }
    // {
    //     path:'',
    //     //重定向
    //     redirect:'/theone'
    // },
    // {
    //     path: '/theone',
    //     component: theone
    // },
    // {
    //     path: '/thetwo',
    //     component: thetwo
    // },
    // {
    //     path:'/user/:userId',
    //     component:user
    // }
]

//创建路由实例
const router = new VueRouter({
    // mode:'history',
    // linkActiveClass:'active'
    routes: routes,
});


//导出
export default router;