<template>
    <div class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                Início
            </router-link>
            <router-link to="/usuario" tag="li" active-class="active">
                Usuário</router-link>
        </ul>
    </div>
</template>

<script>
export default {};
</script>
