<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		
		<!-- <transition name="fade" appear>
			<b-alert show v-if="exibir">{{ msg }}</b-alert>
		</transition> -->

		<!-- type - é quem vai mandar na transição, caso um dos elementos for maior que o outro -->
		<!-- appear - usa para o vue carregar animaçao do componente quando ele for exibido no carregamento da tela -->
		<!--          sem ele o elemento será exibido sem nenhuma animação -->
		<!-- <transition name="slide" type="animation" appear>
			<b-alert show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition enter-active-class="animated bounce" 
			leave-active-class="animated shake" appear>
			<b-alert show v-if="exibir">{{ msg }}</b-alert>
		</transition> -->

		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<!-- quando um elemento que tem animação possui dentro de si mais de um elemento para exibir
		tem que usar o atributo 'key' 
        'mode' - primeiro o elemento sai, depois entra-->
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
		</transition>

		<hr>
		<b-button variant="secondary" @click="exibir2 = !exibir2">Alternar</b-button>

    <!-- :css="false" || desabilita o css da transition -->
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa"></div>
		</transition>

    <hr>
    <div class="mb-4">
      <b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
      <b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>

    <hr>
    <h3><strong>Lista de Alunos</strong></h3>

    <b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>

    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, indice) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(indice)">{{aluno}}</b-list-group-item>
      </b-list-group>
    </transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";

export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      alunos: ["Roberto", "Julia", "Tereza", "Paulo"],
      msg: "Uma mensagem de informação para o usuário",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      componenteSelecionado: "AlertaInfo",
    };
  },
  methods: {
    adicionarAluno() {
      let str = Math.random()
        .toString(36)
        .substring(2);
      this.alunos.push(str);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        let novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;

        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      // console.log("enter");
      // done();
      this.animar(el, done, false);
    },
    // afterEnter() {
    //   console.log("afterEnter");
    // },
    // enterCancelled() {
    //   console.log("enterCancelled");
    // },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    // afterLeave() {
    //   console.log("afterLeave");
    // },
    // LeaveCancelled() {
    //   console.log("LeaveCancelled");
    // },
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
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
/* classes Transition */

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 2s;
}

.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
  position: absolute;
  width: 100%;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}
</style>
