<template>
<v-main>
     <Login/>
      <Register/>
     </v-main>
      </template>
<script>
import Login from './Login.vue'
import Register from './Register.vue'
export default {
    data() {
      return{}
    },
    components:{
      Login,Register,
    }
}
</script>