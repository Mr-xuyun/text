import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSteps from 'a-vue-steps'
import 'a-vue-steps/dist/vue-steps.min.css'
import VueImageCutting from 'vue-image-cutting'
import 'vue-image-cutting/lib/VueImageCutting.css'

// 引入滑动
import vueSideslip from 'vue-fkl-sideslip'
import 'vue-fkl-sideslip/lib/vue-fkl-sideslip.css'
Vue.use(vueSideslip);




Vue.use(VueImageCutting)
Vue.use(VueSteps)
Vue.config.productionTip = false


Vue.prototype.getLocalStorage = function (key){
  let obj = JSON.parse(localStorage.getItem(key))
  let now = new Date().getTime();
  if (now-obj.createTime>obj.expire){
      localStorage.removeItem(key);
      return null;
  }
  return JSON.parse(obj.data);
}
Vue.prototype.setLocalStorage = function (key,value,expire){
  let obj = {
      data:JSON.stringify(value),
      createTime:new Date().getTime(),
      expire:expire
  }
  localStorage.setItem(key,JSON.stringify(obj));
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
