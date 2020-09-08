<template>
<v-container>
<v-row class="text-center">
    <v-card class="mx-auto" width="500">
    <v-card-text>
    <v-icon class="display-2">mdi-account</v-icon>
<p class="display-1 text--primary">Register Akun</p>
    </v-card-text>
    <v-form>
    <v-text-field class="ma-3" label="Username" v-model="username"></v-text-field>
    <v-text-field class="ma-3" label="Password" type="Password" v-model="password"></v-text-field>
    <v-text-field class="ma-3" label="Ulangi Password" type="Password"></v-text-field>
<v-btn class="ma-2" tile outlined color="success" @click="addPost">Buat Akun</v-btn>
    </v-form>
    </v-card>
</v-row>
</v-container>
</template>
<script>
import PostService from '@/service/PostService'
export default {
    name : "Register",
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