<template>
  <v-app>
  <Navbar/>
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
import Navbar from './components/Navbar'
export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
