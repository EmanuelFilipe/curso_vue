<template>
    <div class="teste1">
        <Rotulo nome="Nome">
            <input type="text" @input="alterarNome" :value="value.nome">
        </Rotulo>
    </div>
    <!-- <div class="teste2">
        <Rotulo nome="Sobrenome">
            <input type="text" :value="value.sobrenome">
        </Rotulo>
    </div> -->
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
  components: { Rotulo },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    alterarNome(event) {
      this.$emit("input", { nome: event.target.value });
    },
  },
};
</script>

<style scoped>
.nomeCompleto {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0px;
  font-size: 1.4rem;
}

.elemento {
  display: flex;
  align-self: stretch;
  margin: 10px 0px;
}

input,
textarea,
select {
  flex: 1;
  font-size: 1.4rem;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
}

input:focus {
  border: 1px solid #bbb;
}
</style>
