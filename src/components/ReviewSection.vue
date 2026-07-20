<script setup lang="ts">
import { IconMapPinFilled, IconStarFilled } from '@tabler/icons-vue';

</script>

<template>
    <section class="container my-5 text-center">
        <h2>Sabemos cómo incubar <br /> <span class="text-primary">aves en los distintos climas de la gran Argentina</span> </h2>
        <p>Lo ayudamos a incubar para que consigas hasta un 95% de nacimientos desde el primer día.</p>
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
            <div class="h-100 bg-primary-subtle text-primary-emphasis p-3 rounded">
                <div class="text-start">
                <div class="text-primary d-flex-center-start mb-2">
                    <IconStarFilled size="16" v-for="a in 5"/>
                </div>
                <p class="review-content">"Me explicaron muy bien, estoy muy agradecido."</p>
                <small><IconMapPinFilled size="14" style="vertical-align: center;"/>  Alta Gracia, Córdoba</small>
                </div>
            </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
            <div class="h-100 bg-primary-subtle text-primary-emphasis p-3 rounded">
                <div class="text-start">
                <div class="text-primary d-flex-center-start mb-2">
                    <IconStarFilled size="16" v-for="a in 5"/>
                </div>
                <p class="review-content">"Humedad estable, temperatura estable: La mejor inversión que hice."</p>
                <small><IconMapPinFilled size="14" style="vertical-align: center;"/> 9 de Julio, Misiones</small>
                </div>
            </div>
            </div>
        </div>
        <router-link to="opiniones-incubadoras-de-huevos">Ver todos los comentarios</router-link>
    </section>
</template>