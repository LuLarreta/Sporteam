<template >
    
    <button 
    class=" text-center text-lg leading-6 text-yellow font-extrabold inline-block max-h-11 transition w-full border p-2 border-gray-800 rounded-lg bg-orange-500 hover:bg-orange-300 disabled:bg-orange-200 motion-reduce:transition-none " 
    type="submit" :disabled="cargando">
    

    <!-- inline-block w-full py-4 px-6 mb-6 text-center text-l leading-4 text-yellow font-bold bg-green-800 hover:bg-indigo-900 border-2 border-green-900 shadow rounded transition duration-300 -->

    <template v-if="!cargando">
    
        <slot/>
    

    </template>    
    <template v-else>
        <Cargar class="scale-40 max-h-0" />
    </template>
    

</button>

</template>

<script>
import Carga from './Cargar.vue';


export default {
    name: 'BaseButton',
    props: {
        cargando: {
            type: Boolean,
            default: false,
        }
    },
    components: { Cargar }
}

</script>

<style >
    
</style>