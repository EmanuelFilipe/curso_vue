new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('teste')
        },
        armazenarValor(e){
            this.valor = event.target.value;
            alert(this.valor)
        }
    },
})