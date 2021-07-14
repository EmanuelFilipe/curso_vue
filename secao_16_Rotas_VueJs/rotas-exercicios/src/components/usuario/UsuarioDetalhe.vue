<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código: </strong>{{id}}</p>
        <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">
          Editar
        </router-link> -->
        <router-link tag="button" primario :to="{ name: 'editarUsuario', params: { id },
          query: { completo: false, lingua: 'pt'}, hash: '#rodape' }">
          Editar
        </router-link>
    </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   // to é o atributo com o valor novo -- from é o atributo com valor antigo
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log("dentro do componente -> usuario detalhe");
    console.log("to:", to);
    console.log("from:", from);
    next();
  },
};
</script>

<style>
</style>
