import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "@/components/About"
import Log from "@/components/Log"
import Register from "@/components/Register"
import User from '@/components/User'
import EditUser from '@/components/EditUser'


Vue.use(VueRouter);

//const router = new VueRouter({
  export default new VueRouter({
    routes : [
      {path:'/',name:'User',component: User},
      {path:'/Index',name:'Index',component: User},
      {path:'/About',name:'About',component: About},
      {path:'/Log',name:'Log',component: Log},
      {path:'/Register',name:'Register',component: Register},
      {path:'/User',name:'User',component: User},
      {path:'/Log/:id',name:'EditUser',component: EditUser}
    ],
    mode: 'history'
  });

  
