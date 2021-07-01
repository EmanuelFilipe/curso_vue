<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
    <p>{{ usuarioLogado }}</p>
		<!-- aplica um filtro com o pipeline '|' seguido do nome  -->
		<p>{{ cpf | cpfMask | inverter}}</p>

		<input type="text" :value="cpf | cpfMask">
		<hr>
		<Frutas />
	</div>
</template>

<script>
import Frutas from "./Frutas.vue";
import FrutasMixin from './FrutasMixin.js'
import UsuarioMixin from './UsuarioMixin.js'

export default {
  components: { Frutas },
  mixins: [FrutasMixin, UsuarioMixin],
  filters: {
    cpfMask(valor) {
      const arr = valor.split("");
      // o 0 significa que não vai remover ninguém
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "12345678905",
    };
  },
  created() {
        console.log('Created - App.vue')
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 1.5rem;
}
</style>
