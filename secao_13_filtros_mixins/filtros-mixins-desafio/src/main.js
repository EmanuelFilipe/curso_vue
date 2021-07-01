import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaTamanhoLetras', function (texto){
	let mensagemRetorno = ''
	let str = texto.split(' ')

	str.forEach(element => {
		mensagemRetorno += ` ${element} (${element.length})`
	});

	return mensagemRetorno

	//outra possibilidade
	//return texto.split(' ').map(p => `${p} (${p.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
