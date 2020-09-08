import Api from '@/service/Api'

export default{
    fetchPosts() {
        return Api().get('akun')
    },
    addPost (params) {
        return Api().post('akun',params)
    }
}