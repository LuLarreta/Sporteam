<template >
   
        <div class="my-5">

                    <BaseH1 class="font-bold pb-5">Administrador de Productos</BaseH1>

                    <div id="salida">

                    <BaseH2 class="text-xl text-center m-2 p-2 underline">Productos</BaseH2>
                <BaseP class=" text-blue-700 mx-4">*Editar Nombre</BaseP>
                <div>
                    <template v-if="!isLoading">
                        <div class="grid grid-cols-2 gap-3">

                        <div class="bg-blue-100 m-1 p-1" v-for="producto in productos" :key="producto.id">

                            <div class="font-bold pb-2"><router-link :to="`/productos/${producto.id}/editar`"
                                    class="text-orange-550 underline">Nombre: {{ producto.nombre }}</router-link></div>
                                    <BaseP class="text-center font-light h-20">Descripcion: {{ producto.descripcion }}</BaseP>
                            <BaseP class="text-green-600 font-bold text-right">Precio: {{ producto.precio }}</BaseP>

                        </div>
                    </div>
                    </template>

            <template v-else>
                        <Carga />
                    </template>
                    <div class="my-2">
                    <router-link :to="`/NuevoProducto`"
                        class="text-orange-550 border border-indigo-600 rounded bg-white-300 p-2 m-2 ">Crear
                        Producto</router-link>
                    </div>
                </div>
            </div>

            
        </div>
    
</template>
<script>







export default {
    name: "adminProductos",
    components: { BaseButton, BaseLabel, BaseInput, BaseTextArea, Carga, BaseH1 , BaseH2 , BaseP  },
    data() {

        return {
            isLoading: true,
            productos: [],
            nuevoProducto: {
                id: '',
                nombre: '',
                precio: '',
                descripcion: ''

            },

            user: {

                id: null,
                email: null

            },
            unsuscribe: () => { },
            productosUnsuscribe: () => { },
        }

    },

    methods: {

    },

    mounted() {
        this.isLoading = true;
        this.productosUnsuscribe = MostrarProductos(productos => {
            this.productos = productos;
            this.isLoading = false;
            console.log(this.productosUnsuscribe);
        });


        this.unsuscribe = subscribeToAuth(newUser => this.user = { ...newUser });

    },
    unmounted() {
        this.productosUnsuscribe();
        this.unsuscribe();

    }
}
</script>
<style ></style>