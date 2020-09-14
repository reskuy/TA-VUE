<template>
    <v-container>
    <v-card class="mx-auto text-center" width="500">
      <v-card-text>
      <div>
      <p class="display-1 text--primary">Edit User</p></div><center><hr width="250px"></center>
      </v-card-text>
      <v-form>
      <v-text-field label="Username" class="ma-3" v-model="username"></v-text-field>
      <v-text-field label="Password"
       class="ma-3"
       v-model="password"
       name="password"
      :append-icon="tampilkanpw ? 'mdi-eye' : 'mdi-eye-off'"
      :type="tampilkanpw ? 'text' : 'password'"
      @click:append="tampilkanpw = !tampilkanpw"
    ></v-text-field>
      <v-btn @click="updateUser">Update</v-btn>
      </v-form>
      </v-card>
    </v-container>
</template>
<script>
import PostService from '@/service/PostService'
export default {
  name: 'EditUser',
  data () {
    return {
      username: '',
      password: '',
      tampilkanpw: false,
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      const response = await PostService.getUser({
        id: this.$route.params.id
      })
      this.username = response.data.username
      this.password = response.data.passwordcheck
    },
    async updateUser () {
      await PostService.updateUser({
        id: this.$route.params.id,
        username: this.username,
        password: this.password
      })
      this.$router.push({ path: '/Log' })
    }
  }
}
</script>