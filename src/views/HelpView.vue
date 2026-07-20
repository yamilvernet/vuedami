<script setup lang="ts">
import { IconFileTypePdf } from '@tabler/icons-vue';
import HeaderSection from './template/HeaderSection.vue';
import { get_whatsapp_url } from '../utils.js';
import { ENV } from '../env.js';
import educational_videos from '../educational_videos.js';
import { ref } from 'vue';

const currentVideo = ref(null);

const handlePlay = (event) => {
  const video = event.target;

  if (currentVideo.value && currentVideo.value !== video) {
    currentVideo.value.pause();
  }

  currentVideo.value = video;
};

const handleEnded = (event) => {
  if (currentVideo.value === event.target) {
    currentVideo.value = null;
  }
};



</script>

<template>
    <main>
        <HeaderSection h1="Como incubar huevos" h2="Lográ nacimientos exitosos" subheading="🐣 Le ayudamos en toda la incubación."/>
        <!-- Manuales -->
        <section class="container my-5">
            <h2>Descargá los manuales <span class="text-primary">en forma de texto</span></h2>
            <p>
                Los manuales incluyen información sobre como incubar, cuales son los huevos aptos y sobre como configurar la
                incubadora.
            </p>
            <div class="row">
                <div class="col">
                <div class="d-flex-center-start bg-primary-subtle text-primary-emphasis p-3 rounded">
                    <div>
                    <h4>
                        <span class="text-primary"><IconFileTypePdf/></span>
                        Manual de modelos LCD
                    </h4>
                    <p>Aprenda a utilizar el controlador LCD para incubadoras automáticas de aves.</p>
                    <a href="/manuales/manual_modelos_full_lcd_incubadoras_adami.pdf" target="_blank" class="btn btn-primary">
                        Descargar manual en PDF
                    </a>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="d-flex-center-start bg-primary-subtle text-primary-emphasis p-3 rounded">
                    <div>
                    <h4>
                        <span class="text-primary"><IconFileTypePdf/></span>
                        Manual de modelos AP
                    </h4>
                    <p>Aprenda a utilizar el controlador AP para incubadoras automáticas de aves.</p>
                    <a href="/manuales/manual_modelos_ap_incubadoras_adami.pdf" target="_blank" class="btn btn-primary">
                        Descargar manual en PDF
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <!-- videos -->
         <section id="opiniones" class="container my-5">
            <h2 class="mb-2">Asesoramiento rápido <span class="text-primary">con videos</span></h2>
            <p>También estamos en WhatsApp, podés llamarnos al <a :href="get_whatsapp_url(ENV.PHONE_NUMBER,'Hola Adami! Tengo algunas dudas')" target="_blank" rel="noopener noreferrer">{{ ENV.WPP_PHONE_NUMBER_FORMATTED }}</a> o escibinos haciendo <a :href="get_whatsapp_url(ENV.PHONE_NUMBER,'Hola Adami! Tengo algunas dudas')" target="_blank" rel="noopener noreferrer">click acá</a></p>

            <div class="row">
                <div class="col-12 col-lg-6 mb-3" v-for="video in educational_videos">
                <div  class="rounded bg-primary-subtle text-primary-emphasis p-3">
                    <h3 class="fs-5 mb-3">{{ video.title }}</h3>
                    <div class="video-container rounded d-flex-center-center">
                        <video
                            :src="video.src"
                            class="rounded w-100"
                            controls
                            @play="handlePlay"
                            @ended="handleEnded"
                            @pause="currentVideo === $event.target && (currentVideo = null)"
                        ></video>
                    </div>
                </div>
                </div>
            </div>

            <div class="rounded bg-primary-subtle text-primary-emphasis p-3">
                <p class="fs-5 fw-bold">¿Querés enviarnos tus comentarios?</p>
                <p>Envianos un audio o video al Whatsapp, así compartimos el amor por incubar huevos.</p>
                <a target="_blank" class="btn btn-lg btn-primary w-100" :href="get_whatsapp_url(ENV.WPP_PHONE_NUMBER,'Hola quiero dejar un comentario para el sitio web')">
                Enviar un comentario
                </a>
            </div>
        </section>

    </main>
</template>