import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode) {

		let atraso = 0
		if (binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {

			el.style.backgroundColor = "lightgreen"
			
			// recebendo cor como parâmetro
			el.style.backgroundColor = binding.value
			
			if (binding.arg === 'fundo') {
				el.style.color = binding.value
			}
			
		}, atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
