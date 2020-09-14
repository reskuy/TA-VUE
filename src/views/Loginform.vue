<template>
    <v-form>
      <v-text-field label="Username" class="ma-3" v-model="username" required></v-text-field>
      <v-text-field label="Password" class="ma-3" type="password" v-model="password" required></v-text-field>
     <v-btn class="ma-2" tile outlined color="primary" @click="loginUser">Login</v-btn>
   </v-form>
</template>

<script>
import PostService from '@/service/PostService'
import EventBus from '@/components/EventBus'
export default {
    name: "Loginform",
    data() {
        return {
            username : '',
            password : '',

        }
    },methods: {
        async loginUser(){
            if (this.username && this.password) {
                await PostService.loginUser({
                username: this.username,
                password: this.password
            }).then(res =>{
                if(res) {
                localStorage.setItem('usertoken', JSON.stringify(res.data))
                this.username = ''
                this.password = ''
                alert(JSON.stringify(res.data))
                }
                this.$router.push({path : '/Log'})
            }).catch(err =>{
                console.log(err)
            })
            this.emitMethod()
      }else{
            alert('username atau password kosong')
      }
            
        },
        emitMethod() {
        EventBus.$emit('Logged-in', 'loggedin')
    },
    }
}
</script>