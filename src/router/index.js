import vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Login from "@/components/Login"
import About from "@/components/About"
import Log from "@/components/Log"
import Register from "@/components/Register"

Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
      {path:'/',name:'Login',component: Login},
      {path:'/About',name:'About',component: About},
      {path:'/Log',name:'Log',component: Log},
      {path:'/Register',name:'Register',component: Register}
    ],
    mode: 'history'
  });