<template>
    <v-form>
<v-text-field class="ma-3" label="Username" v-model="username"></v-text-field>
    <v-text-field class="ma-3" label="Password" type="Password" v-model="password"></v-text-field>
    <v-text-field class="ma-3" label="Ulangi Password" type="Password" v-model="passwordcheck"></v-text-field>
<v-btn class="ma-2" tile outlined color="success" @click="addUser">Buat Akun</v-btn>

   </v-form>
</template>
    
<script>
import PostService from '@/service/PostService'
export default {
    name : "Registerform",
    data() {
        return {
            username: '',
            password: '',
            passwordcheck: ''
        }
    },
    methods: {
        async addUser() {
            await PostService.addUser({
                username: this.username,
                password: this.password,
                passwordcheck: this.passwordcheck
            }).then(response => {
                this.username = '',
                this.password = '',
                this.passwordcheck = ''
                 alert(JSON.stringify(response.data))
                    return response    
        })
           // this.$router.go(0)
        }
    },
}
</script>