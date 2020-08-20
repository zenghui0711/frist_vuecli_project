import router from './router'
import store from './store'
/*\进度条/*/
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 进度条配置
NProgress.configure({
    showSpinner: false, // 关闭loading动画
    // trickle: false, // 关闭进度条步进
    // minimum: 0.1, // 最小百分比
    // ease: 'ease', // 过度动画
    // speed: 500, // 速度（毫秒）
    // trickleRate: 0.02, // 每次步进增长多少
    // trickleSpeed: 800 // 步进间隔
})

/*\进度条/*/

import {
    getToken
} from '@/utils/auth'


router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = "上海三高";
    if (getToken()) {
        /* 有 token */
        if (to.path === '/login') {
            console.log('有token111')
            next({
                path: '/'
            })
            NProgress.done();
        } else {
            console.log('有token222')
            next()
        }
    } else {
        /* 无 token */
        console.log('无token')
        if (to.path === '/login') { //解决跳出循环的关键
            next()
        } else {
            next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
            NProgress.done()
        }
    }

})

router.afterEach(() => {
    NProgress.done()
})