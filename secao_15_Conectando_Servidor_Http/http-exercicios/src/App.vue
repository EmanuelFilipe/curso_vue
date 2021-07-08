<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" 
			:key="mensagem.texto" :variant="mensagem.tipo">{{mensagem.texto}}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome" placeholder="Informe o Nome">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email" placeholder="Informe o E-mail">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button variant="primary" @click="salvar" size="lg">Salvar</b-button>
			<b-button variant="success" class="ml-2" @click="obterUsuarios" size="lg">Obter Usuarios</b-button>
			<hr>
			<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
					<strong>ID:</strong> {{ usuario.id }} <br>
					<strong>Nome: </strong> {{usuario.nome}} <br>
					<strong>E-mail: </strong> {{usuario.email}} <br>

					<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
					<b-button variant="danger" class="ml-2" size="lg" @click="excluir(id)">Excluir</b-button>
				</b-list-group-item>
			</b-list-group>
		</b-card>
	</div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      mensagens: [],
      usuarios: [],
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
      this.mensagens = [];
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    excluir(id) {
      this.$http
        .delete(`/usuarios/${id}.json`)
        .then(() => this.limpar())
        .catch(() => {
          this.mensagens.push({
            texto: "Problema ao excluir!",
            tipo: "danger",
          });
        });
    },
    salvar() {
      this.$http.post("usuario.json", this.usuario).then(() => {
        this.limpar();
        this.mensagens.push({
          texto: "Operação realizada com sucesso!",
          tipo: "success",
        });
      });
    },
    obterUsuarios() {
      this.$http.get("usuario.json").then((res) => {
        this.usuarios = res.data;
      });
    },
  },
  //   created() {
  //     this.$http
  //       .post("usuarios.json", {
  //         nome: "Maria",
  //         email: "maria@gmail.com",
  //       })
  //       .then((res) => console.log(res));
  //   },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
