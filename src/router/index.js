import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//导入路由组件
import Layout from '../views/layout/index.vue';

//创建VueRouter对象
const routes = [{
        path: '',
        component: Layout,
        redirect: 'home',
        mate: {
            title: "首页"
        },
        children: [{
            path: '/home',
            component: () => import('../views/home/index.vue'),
            mate: {
                title: "首页"
            },
        }]
    },
    {
        path: '/tag',
        component: Layout,
        mate: {
            title: "用户标签管理"
        },
        children: [{
            path: '/taglist',
            component: () => import('../views/tag/list.vue'),
            mate: {
                title: "标签管理"
            },
        }, ]
    },
    {
        path: '/user',
        component: Layout,
        mate: {
            title: "用户管理"
        },
        children: [{
                path: '/userlist',
                component: () => import('../views/user/list.vue'),
                mate: {
                    title: "用户信息"
                },
            },
            {
                path: '/usercase',
                component: () => import('../views/user/case.vue'),
                mate: {
                    title: "上报案件情况"
                },
            },
            {
                path: '/usersigin',
                component: () => import('../views/user/sigin.vue'),
                mate: {
                    title: "用户签到"
                },
            }
        ]
    },
    {
        path: '/tag2',
        component: Layout,
        mate: {
            title: "用户标签管理2"
        },
        hidden: true,
        children: [{
            path: '/taglist',
            component: () => import('../views/tag/list.vue'),
            mate: {
                title: "标签管理"
            },
            hidden: true,
        }, ]
    },
    {
        path: '/test',
        component: Layout,
        mate: {
            title: "测试"
        },
        children: [{
            path: '/testlist',
            component: () => import('../views/tag/list.vue'),
            mate: {
                title: "测试"
            },
            hidden: true,
        }, ]
    },
]

//创建路由实例
const router = new VueRouter({
    mode: 'history',
    // linkActiveClass:'active'
    routes: routes,
});


//导出
export default router;