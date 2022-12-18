// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// 引入ui库
import "./plugins/elementUi.js";
// 样式
import 'normalize.css';
import "element-ui/lib/theme-chalk/index.css";
import 'element-ui/lib/theme-chalk/display.css';
import './assets/css/incoFont.css';
import 'jquery'
// 使用less语法
import less from 'less';
import animated from 'animate.css';
import axios from 'axios'
Vue.use(less)
Vue.use(animated)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
