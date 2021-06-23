<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{inverterNome()}}</strong></p>
        <p>Idade do usuário: <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  // recebe como parâmetro de quem esta utilizando
  //valida qual tipo esse parâmetro vai receber
  props: {
    //nome: [String, Array]
    nome: {
      type: String,
      //required: true,
      default: "anônimo",
      //   default: function () {
      //       return Array(10).fill(0).join(',')
      //   }
    },
    reiniciarFn: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      this.antigo = this.nome;
      this.nome = "Pedro";
      // emitir/dispara evento para o componente pai
      //this.$emit('nomeMudou', this.nome)
      this.$emit("nomeMudou", {
        novo: this.nome,
        antigo: this.antigo,
      });
    },
  },
  created() {
    // barramento.$on("mudouIdade", idade => {
    //   this.idade = idade
    // });
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
