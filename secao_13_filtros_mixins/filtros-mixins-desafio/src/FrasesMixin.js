export default {
    computed: {
        fraseComVirgulas() {
        return this.mensagem.split(" ").join(",");
        },
        fraseComTamanho() {
            return this.texto.split(' ').map(p => `${p} (${p.length})`).join(' ')
	}
  },
}