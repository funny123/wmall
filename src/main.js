import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios"
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';

import {
  CouponCell,
  CouponList,
  Popup,
  Toast
} from 'vant';

Vue.use(CouponCell).use(CouponList).use(Popup);
Vue.use(List).use(Cell).use(CellGroup).use(Toast);
Vue.use(NavBar).use(Toast).use(Swipe).use(SwipeItem).use(Lazyload);
Vue.use(Tabbar).use(TabbarItem);
Vue.config.productionTip = false
//将axios挂载到原型上
Vue.prototype.$axios = Axios;
// Vue.prototype.$ajax = Axios
// 引入mockjs
require('./mock.js');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
