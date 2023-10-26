<template>
    <input class="px-2 disabled:bg-slate-300 inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-green-800 bg-white shadow border-1 border-green-800 rounded"  :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
</template>
<script>
export default {

    name: 'Ingresar',
    props: ['modelValue'],
    emits: ['update:modelValue'],

}
</script>
<style></style>