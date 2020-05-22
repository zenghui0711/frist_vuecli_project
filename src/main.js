import Vue from 'vue';
import App from './App.vue';
import router from './router';

//第三方 UI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.css'
Vue.use(ElementUI);
  
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');//创建并挂载到 #app



