<template>
    <div class="citacao">
        <slot></slot>
        <!-- slot nomeado -->
        <slot name="fonte"></slot>
        <slot name="texto"></slot>
        <slot name="autor"></slot>
    </div>
</template>

<script>
export default {
  props: {
    //listaCitacoes: String,
  },
  
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}

h1 {
  color: red !important;
}
</style>
