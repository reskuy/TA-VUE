<template>
<v-simple-table v-if="user.length > 0">
  <template v-slot:default>
    <thead>
      <tr>
        <th>Username</th>
        <th>Password</th>
        <th>Opsi</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="user in user" :key="user._id">
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td><v-btn><router-link class="routerlink" v-bind:to="{ name: 'EditUser', params: { id: user._id } }">Edit
          </router-link></v-btn>
            <v-btn @click="deleteUser(user._id)">Hapus</v-btn></td>
        </tr>
      </tbody>
  </template>
</v-simple-table>
<v-card v-else>
  <v-card-text>
  Data User tidak ada
  </v-card-text>
</v-card>
      </template>
<script>
import PostService from '@/service/PostService'

export default {
    name : "Log",
    data() {
        return {
      user: []
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      const response = await PostService.fetchUser()
      this.user = response.data.user
    },
    async deleteUser (id) {
      await PostService.deleteUser(id)
      this.getUser()
    }
  }
}
</script>