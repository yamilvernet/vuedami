<script setup lang="ts">
import { IconStarFilled } from '@tabler/icons-vue';
import HeaderSection from './template/HeaderSection.vue';
import { get_whatsapp_url } from '../utils.js';
import { ENV } from '../env.js';
import reviews from '../reviews.js';
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
        <HeaderSection h1="La Mejor Incubadoras de Huevos" h2="Videos de nuestros clientes" subheading="🐣 Los ayudamos en toda la incubación."/>
        <!-- Manuales -->
        <section class="container my-5">
            
        </section>
        
        <!-- videos -->
        <section id="opiniones" class="container my-5">
             <h2>Comentarios reales que dejan <span class="text-primary">nuestros clientes</span></h2>
             <p>Acompañamos a nuestros clientes por whatsapp para lograr la mejor incubación, también lo podemos asesorar sin compromiso antes de la compra, <a :href="get_whatsapp_url(ENV.PHONE_NUMBER,'Hola Adami! Tengo algunas dudas')" target="_blank" rel="noopener noreferrer">Haga click acá o llame al número {{ ENV.WPP_PHONE_NUMBER_FORMATTED }}</a> y lo asesoramos sin compromiso.</p>
            
            <div class="row">
                <div class="col-12 col-lg-6 mb-3" v-for="review in reviews">
                    <div  class="rounded bg-primary-subtle text-primary-emphasis p-3">
                        <div class="text-primary d-flex-center-start mb-2">
                            <IconStarFilled size="16" v-for="a in 5"/>
                        </div>
                        <h3 class="fs-5 mb-1">{{ review.title }}</h3>
                        <p><IconMapPinFilled size="16" style="vertical-align: center;"/> {{ review.location }}</p>
                        <div class="video-container rounded d-flex-center-center">
                            <video
                                :src="review.video_url"
                                class="rounded w-100"
                                controls
                                @play="handlePlay"
                                @ended="handleEnded"
                            ></video>
                        </div>
                        <p class="mt-3 fw-bold">👌 {{ review.recommend.client }} recomienda la <router-link :to="'/incubadoras/'+review.recommend.product_slug">incubadora de huevos {{ review.recommend.product }}</router-link></p>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>