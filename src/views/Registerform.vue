<template>
    <v-form>
<v-text-field class="ma-3" label="Username" v-model="username"></v-text-field>
    <v-text-field class="ma-3" label="Password" type="Password" v-model="password"></v-text-field>
    <v-text-field class="ma-3" label="Ulangi Password" type="Password"></v-text-field>
<v-btn class="ma-2" tile outlined color="success" @click="addPost">Buat Akun</v-btn>
   </v-form>
</template>
    
<script>
import PostService from '@/service/PostService'
export default {
    name : "Registerform",
    data() {
        return {
            username: [],
            password: []
        }
    },
    methods: {
        async addPost() {
            await PostService.addPost({
                username: this.username,
                password: this.password
            })
            this.$router.push({ path: '/Log'})
        }
    },
}
</script>