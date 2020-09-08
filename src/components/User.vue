<template>
<v-main>
<v-row class="text-center">
    <v-card class="mx-auto" width="500">
    <v-card-text>
    <v-icon class="display-2">mdi-account</v-icon>
<p class="display-1 text--primary">Register Akun</p>
    </v-card-text>
    <Registerform/>
</v-card>
</v-row>
</v-main>
</template>

<script>
import Registerform from '../views/Registerform.vue'
export default {
    name : "Register",
    components: {
        Registerform,
  },
}
</script>