import Vue from 'vue'
export default new Vue({
    alterarIdade(idade) {
        this.$emit('mudouIdade', idade)
    },
    quandoIdadeMudar(callback) {
        this.$on('mudouIdade', callback)
    }
})