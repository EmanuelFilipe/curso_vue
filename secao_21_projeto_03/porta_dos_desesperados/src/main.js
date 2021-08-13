import Vue from 'vue'
import App from '../src/App'

new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App)
    }
})