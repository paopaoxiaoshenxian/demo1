import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'
import ElementUI from 'element-ui';
import '@/assets/style/common.scss'
import "@/styles/theme/index.css"

Vue.config.productionTip = false

//全局引入·
Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
