<template>
    <div class="my-5 p-10">
        <BaseH1 class="text-center">Hora de ejercitarse</BaseH1>
        <div class="flex p-3 justify-center items-center">
            <img class="m-5 h-auto max-w-full rounded-l  " src="" alt="nosotros">
        </div>
        <BaseH2 class="">Bienvenido</BaseH2>
            <BaseP>
               Nuestra aplicación dedicada a facilitar la vida de los amantes del deporte y la actividad física tiene como 
               misión conectar a las personas con espacios deportivos adecuados para sus necesidades, permitiéndoles disfrutar 
               del juego en cualquier momento y lugar.
             </BaseP>

            <BaseP>
               Con unos pocos pasos, podrás descubrir canchas cercanas, conocer sus precios y disponibilidad en tiempo real, y 
               realizar tu reserva de manera rápida y segura. Además, nuestra aplicación te brinda la flexibilidad para reservar por horas 
               o incluso programar sesiones regulares, adaptándose completamente a tu agenda..
            </BaseP>

           
        <BaseH2 class="underline text-center">Salud</BaseH2>
            <BaseP class="text-center">
                Creemos que el deporte es esencial para la salud y el bienestar de todos, y queremos eliminar las barreras que 
                impiden que las personas participen en actividades físicas. Con nuestra app, no importa si eres un aficionado 
                casual o un atleta dedicado, estamos aquí para ayudarte a encontrar el espacio perfecto para liberar tu energía y 
                disfrutar del deporte como nunca antes. ¡Únete a nosotros y descubre un mundo de posibilidades deportivas justo en 
                la palma de tu mano!
            </BaseP>

            <div class="flex p-5 justify-center items-center">
                <img class="m-5" src="../../public/imgs/ServicePowerLogo.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import BaseH1 from "../components/H1.vue";
import BaseH2 from "../components/H2.vue";
import BaseP from "../components/P.vue";


export default {
    name: 'Home',
    components: { H1, H2, P }
}
</script>
<style ></style>