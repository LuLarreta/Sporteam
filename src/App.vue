<script>
export default {
    name: "App"
};
</script>

<template>
    <!-- Nav -->

    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
                <a class="navbar-brand" href="#">Sporteam</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/Products" class="nav-link">Productos</router-link>
                        </li>
                        
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <font-awesome-icon :icon="['fas', 'user']" />
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link to="/login" class="dropdown-item">Iniciar Sesión</router-link>
                                <router-link to="/signin" class="dropdown-item">Registrarse</router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
    <!-- Contenido -->
    <div>
        <router-view></router-view>
    </div>
</template>

<style>

body {
    background-color: rgb(249 166 80 / 35%)!important;
}

nav {
    background-color: #f9a650;
    padding: 15px 0!important;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 24%);
}

</style>