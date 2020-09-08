import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Login from "@/components/Login"
import About from "@/components/About"
import Log from "@/components/Log"
import Register from "@/components/Register"
import User from '@/components/User'

Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
    routes : [
      {path:'/',name:'Login',component: Login},
      {path:'/About',name:'About',component: About},
      {path:'/Log',name:'Log',component: Log},
      {path:'/Register',name:'Register',component: Register},
      {path:'/User',name:'User',component: User}
    ],
    mode: 'history'
  });

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
