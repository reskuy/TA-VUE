<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="assets/logo.svg"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <router-link class="routerlink" to="/"><v-btn text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn></router-link>


      <router-link class="routerlink" to="About"><v-btn text>
        <span class="mr-2">About</span>
        <v-icon>mdi-alert-circle</v-icon>
      </v-btn></router-link>

      <v-btn
        href="http://trinityauto.id/#Services"
        target="_blank"
        text
      >
        <span class="mr-2">Service</span>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn
        href="http://trinityauto.id/#Clients"
        target="_blank"
        text
      >
        <span class="mr-2">Client</span>
        <v-icon>mdi-account-heart-outline</v-icon>
      </v-btn>
      <v-btn
        href="http://trinityauto.id/#Contact"
        target="_blank"
        text
      >
        <span class="mr-2">Contact</span>
        <v-icon>mdi-contacts-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
.routerlink{
  text-decoration:none;
}
</style>
<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
