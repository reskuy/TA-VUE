<template>
<v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <p v-if="auth=='loggedin'">Hi {{username}}</p>
      </div>

      <v-spacer></v-spacer>

      <router-link class="routerlink" to="/"><v-btn text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn></router-link>


      <v-btn text v-show="auth=='loggedin'" @click="logout" href="/">
        <span class="mr-2">Logout</span>
        <v-icon>mdi-alert-circle</v-icon>
      </v-btn>

      <v-btn
        href="#"
        text
      >
        <span class="mr-2">Service</span>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn
        href="#"
        text
      >
        <span class="mr-2">Client</span>
        <v-icon>mdi-account-heart-outline</v-icon>
      </v-btn>
      <v-btn
        href="#"
        text
      >
        <span class="mr-2">Contact</span>
        <v-icon>mdi-contacts-outline</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import EventBus from './EventBus'

EventBus.$on('Logged-in',test =>{
    console.log(test)
})
export default {
    data() {
        return {
            auth : '',
            username : ''
        }
    },methods: {
        logout(){
            localStorage.removeItem('usertoken')
        }
    },mounted() {
        EventBus.$on('Logged-in', status => {
            this.auth = status
        })
    },
}
</script>