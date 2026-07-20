<template>
    <div class="container">
        <p>Las incubadoras ADAMI pueden incubar distintas especies al mismo tiempo sin parar durante años, los que la tienen lo saben.</p>
        <p>Algunos ejemplos de su capacidad cambiando el tamaño de los huevos.</p>
        <table class="table">
            <thead>
                <tr>
                    <td></td>
                    <td>Capacidad</td>
                    <td>Tiempo (días)</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(capacity,index) in capacity_bird[machine_capacity]" :key="index">
                    <td>{{ bird_index_and_time[index]['b'] }}</td>
                    <td>{{ capacity }}</td>
                    <td>{{ bird_index_and_time[index]['t'] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
const props = defineProps(['machine_capacity'])

const capacity_bird = {
    '70':[70, 210, 45, 60, 55, 50, 85, 6],
    '120':[110, 300, 80, 80, 75, 80, 100, 12]
}

const bird_index_and_time = [
    {b:"Gallina",t:"21"},
    {b:"Codorniz",t:"17"},
    {b:"Ganzo",t:"28 a 35"},
    {b:"Pavo",t:"28"},
    {b:"Pavo real",t:"28 a 30"},
    {b:"Pato",t:"28"},
    {b:"Faisan",t:"23 a 25"},
    {b:"Ñandu",t:"35 a 40"}
]
</script>