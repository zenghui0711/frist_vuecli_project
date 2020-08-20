import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./store";
//第三方 UI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.css'
import VueComposition from "@vue/composition-api"; //vue3.0 的使用，可以不用
import './permission' //路由拦截
import './utils/mockdata'

Vue.use(ElementUI);
Vue.use(VueComposition);
Vue.config.productionTip = false;//阻止启动生产消息 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app'); //创建并挂载到 #app