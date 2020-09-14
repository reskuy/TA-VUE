<template>
<v-main>
<v-row class="text-center">
    <v-card class="mx-auto" width="500" v-if="register">
    <v-card-text>
    
<v-icon class="display-2">mdi-account</v-icon>
    <p class="display-1 text--primary">Register</p>
    </v-card-text>
 <Registerform/>
 <v-btn class="ma-2" tile outlined color="primary" v-on:click="register = !register">Login</v-btn>
</v-card>
<v-card class="mx-auto" width="500" v-else>
    <v-card-text>
    <v-icon class="display-2">mdi-account</v-icon>
    <p class="display-1 text--primary">Login</p>
    </v-card-text>

   <Loginform/>
    <v-btn class="ma-2" tile outlined color="success" v-on:click="register = !register">Register</v-btn>
    
    

</v-card>
</v-row>
</v-main>
</template>

<script>
import Registerform from '../views/Registerform.vue'
import Loginform from '../views/Loginform.vue'
export default {
    name : "User",
    components: {
        Registerform,
        Loginform,
  },data() {
      return {
          register:false,
      }
  },
}
</script>