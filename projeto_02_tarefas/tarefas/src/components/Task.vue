<template>
 <!-- @click.stop é para parar a propagação do evento.
      pois sem ele o outro emit seria executado e gerando erro no formulario -->
    <div @click="$emit('taskStateChanged', task)" class="task" :class="stateClass">
        <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
        <p>{{task.name}}</p>
    </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style>
.task {
  /* sem ele o position absolute de close nao funciona*/
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none; /* não deixa selecionar o texto */
  display: flex;
  justify-content: center;
  align-items: center;
}

.pending {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}

.done {
  color: #ddd;
  border-left: 12px solid #0a8f08;
  background-color: #4caf50;
  text-decoration: line-through;
}

.pending .close {
  background-color: #b73229;
}
.done .close {
  background-color: #0a8f08;
}

.close {
  position: absolute; /* para posicionar o x no lugar que quiser */
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
</style>
