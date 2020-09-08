<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-card class="mx-auto text-center" width="500">
      <v-card-text>
      <div>
      <p class="display-1 text--primary">Silahkan Login</p></div><center><hr width="250px"></center>
      </v-card-text>
      <v-text-field label="Username" class="ma-3"></v-text-field>
      <v-text-field label="Password" class="ma-3" type="password"></v-text-field>
      <router-link class="routerlink" to="Log"><v-btn class="ma-2" tile outlined color="primary">Login</v-btn></router-link>
      <router-link class="routerlink" to="User"><v-btn class="ma-2" tile outlined color="success">Register</v-btn></router-link>
      </v-card>

     <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
        
        </h2>

        <v-row justify="center">
          <a
            
          >
            
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          
        </h2>

        <v-row justify="center">
          <a
           
          >
            
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          
        </h2>

        <v-row justify="center">
          <a>
            
          
           
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
  }
</script>
