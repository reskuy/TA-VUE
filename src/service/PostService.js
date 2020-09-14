import Api from '@/service/Api'

export default{
    fetchUser() {
        return Api().get('api/user')
    },
    addUser (params) {
        return Api().post('api/user/',params)
    },
    updateUser (params) {
        return Api().put('api/user/' + params.id, params)
      },
    
      getUser (params) {
        return Api().get('api/user/' + params.id)
      },
      deleteUser (id) {
        return Api().delete('api/user/' + id)
      },
      loginUser (params) {
          return Api().post('api/user/login/' , params)
      }
}
