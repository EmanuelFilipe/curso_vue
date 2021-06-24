<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <!-- :key="task.name" informa pro Vue que vc não vai aceitar tasks com o mesmo nome -->
            <Task v-for="(task, i) in tasks" :key="task.name" 
             :task="task" @taskDeleted="$emit('taskDeleted', i)"
             @taskStateChanged="$emit('taskStateChanged', i)" />
        </template>
        <p v-else class="no-task">Sua vida está em dia :)</p>
    </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap; /* permite quebrar linha */    
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>
