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
                title: "首页",
                icon: 's-home'
            },
        }]
    },
    {
        path: '/tag',
        component: Layout,
        mate: {
            title: "用户标签管理",
            icon: "price-tag"
        },
        children: [{
            path: '/taglist',
            component: () => import('../views/tag/list.vue'),
            mate: {
                title: "标签管理",
                icon: "price-tag"
            },
        }, ]
    },
    {
        path: '/user',
        component: Layout,
        mate: {
            title: "用户管理",
            icon: "user"
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
                    title: "上报情况"
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
        path: '/test',
        component: Layout,
        mate: {
            title: "测试",
            onlyOne: true,
        },
        children: [{
            path: '/testpage',
            component: () => import('../views/test/index.vue'),
            mate: {
                title: "测试页1",
                icon: 'tickets'
            },
        }]
    },
    {
        path: '/test2',
        component: () => import('../views/tag/list.vue'),
        mate: {
            title: "测试页2",
            icon: 'tickets'
        },
        children: []
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