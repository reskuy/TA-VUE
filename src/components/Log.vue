<template>
<v-simple-table>
  <template v-slot:default>
    <thead>
      <tr>
        <th>Username</th>
        <th>Password</th>
        <th>Opsi</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="akun in akun" :key="akun.id">
          <td>{{ akun.username }}</td>
          <td>{{ akun.password }}</td>
          <td>Edit | Delete</td>
        </tr>
      </tbody>
  </template>
</v-simple-table>
      </template>
<script>
import PostService from '@/service/PostService'

export default {
    name : "Log",
    data() {
        return {
      akun: []
    }
  },
  mounted () {
    this.getAkun()
  },
  methods: {
    async getAkun () {
      const response = await PostService.fetchPosts()
      this.akun = response.data.akun
    }
  }
}
</script>