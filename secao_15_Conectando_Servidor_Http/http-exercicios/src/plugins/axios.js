import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = 'https://curso-vue-4e672-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = Axios
    }

})

Vue.prototype.$http.interceptors.response.use(res => {
    const array = []
    for (let chave in res.data) {
        array.push({ id: chave, ...res.data[chave]})
    }

    res.data = array
    return res
}, error => Promise.reject(error))