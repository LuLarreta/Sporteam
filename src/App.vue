<script>
export default { 
    name: "App"
};
</script>

<template>
<!-- Nav -->
    <div>
        <h1>Este es mi nav</h1>
        <router-link to="/">Inicio</router-link>
        <router-link to="/Products">Productos</router-link>

    </div>
    <!-- Contenido -->
    <div>
        <h1>Este es mi body</h1>
        <router-view></router-view>
    </div>

</template>