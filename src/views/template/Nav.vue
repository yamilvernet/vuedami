<template>
    <div class="container py-3">
        <div class="bg-white rounded p-3">
            <div class="row g-0 align-items-center">
                <div class="col-12 col-sm-6 col-lg-4 order-0 my-1">
                    <a href="/" class="d-flex-center-center-md-start text-decoration-none">
                        <img class="header-logo-img" src="@/assets/logo.webp" alt="Incubadoras Adami">
                        <h2 class="header-text-logo">Incubadoras ADAMI <img src="@/assets/bandera_argentina.svg" alt="bandera argentina" style="vertical-align: center;"></h2>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 flex-button-nav order-1 order-lg-2 my-1">
                    <a :href="get_whatsapp_url(ENV.WPP_PHONE_NUMBER,'Hola ADAMI!')" class="header-nav-wpp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" size="22" style="vertical-align: center;" class="tabler-icon tabler-icon-brand-whatsapp me-1"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg>
                        <span class="">{{ ENV.WPP_PHONE_NUMBER_FORMATTED }}</span>
                    </a>
                    &nbsp;
                    &nbsp;
                    <a :href="'tel:'+ENV.PHONE_NUMBER" class="header-nav-wpp d-inline d-md-none d-lg-inline" style="color: rgb(60, 68, 184);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" size="18" style="vertical-align: center;" class="tabler-icon tabler-icon-phone me-1"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
                        <span class="">{{ ENV.PHONE_NUMBER_FORMATTED }}</span>
                    </a>
                </div>
                <div class="col col-lg-5 order-2 order-lg-1 my-1">
                    <nav class="flex-button-nav flex-wrap gap-2">
                        <router-link class="btn btn-sm border ms-2" to="/" v-if="route.name != 'home'">Inicio</router-link>
                        <router-link class="btn btn-sm border ms-2" to="/incubadoras" v-if="route.name != 'products'">Incubadoras</router-link>
                        <router-link class="btn btn-sm border ms-2" to="/como-incubar" v-if="route.name != 'help'">Como incubar</router-link>
                        <router-link class="btn btn-sm border ms-2" to="/opiniones-incubadoras-de-huevos" v-if="route.name != 'reviews'">Comentarios</router-link>
                    </nav>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ENV } from '../../env';
import { get_whatsapp_url } from '../../utils';

import { useRoute } from 'vue-router';
const route = useRoute()
</script>