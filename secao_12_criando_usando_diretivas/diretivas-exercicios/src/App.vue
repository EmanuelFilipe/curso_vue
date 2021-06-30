<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'USando diretiva <strong>v-text</strong>'"></p>
		<hr>
		<p v-destaque>Usando diretiva customizada</p>

		<!-- por parametro -->
		<p v-destaque="'red'">Usando diretiva customizada</p>
		<p v-destaque="cor">Usando diretiva customizada</p>

		<!-- com argumento -->
		<p v-destaque.fundo.atrasar="'orange'">Usando diretiva customizada</p>
		<hr>
		<p v-destaque-local="'red'">Usando diretiva customizada</p>
		<p v-destaque-local="cor">Usando diretiva customizada</p>

		<!-- com argumento -->
		<p v-destaque-local.fundo.atrasar="'purple'">Usando diretiva customizada</p>

	</div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
        const aplicaCor = (cor) => {
          el.style.backgroundColor = "lightgreen";

          // recebendo cor como parâmetro
          el.style.backgroundColor = binding.value;

          if (binding.arg === "fundo") {
            el.style.color = binding.value;
          }
        };

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = 3000;

        setTimeout(() => {
          aplicaCor(binding.value);
        }, atraso);
      },
    },
  },
  data() {
    return {
      cor: "yellow",
    };
  },
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

p {
  font-size: 20px;
}
</style>
