<template>
    <!-- Nav -->
    <div class="hero pb-4">
        <Nav/>
        <Carousel class="" v-bind="carouselConfig" v-if="true" :transition="600" transition-easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)">
            <Slide v-for="(image_path,i) in carousel" :key="i">
                <img class="home-gallery-image" :src="image_path" :alt="de_slugify(image_path.replace('.webp',''))">
            </Slide>
        </Carousel>
    </div>

    <!-- Header -->

    <HeaderSection
        h2="Lográ nacimientos exitosos" 
        h1="La mejor incubadora de huevos del país" 
        subheading="Acompañamiento personalizado para que logres resultados reales."
    >
        <template v-slot:cta>
            <ul class="list-none">
                <li>Envíos a todo el país.</li>
                <li>Para todo tipo de huevos.</li>
            </ul>
            <div class="d-flex justify-content-center gap-3"><a href="#incubadoras" class="btn btn-primary btn-lg">Ver precios</a><a href="https://api.whatsapp.com/send?phone=5491168066775&amp;text=Hola Adami! Estoy interesado en las incubadoras" target="_blank" class="btn btn-outline-primary btn-lg">Consultar</a></div>
        </template>
    </HeaderSection>

    <!-- Content -->

    <div class="container my-4">
        <div class="grid-wrapper">
            <div class="bg-danger-subtle text-danger-emphasis p-3 pt-4 text-center-md-left" style="background: rgb(255, 247, 233) !important">
                <div class="fs-2 fw-bold">Atención</div>
                    <h3 class="fs-5 mb-3">No todas las incubadoras dan buenos resultados</h3>
                    <p>
                        Hemos visto
                        <b>incubadoras baratas o chinas</b>
                        que fallan en temperatura y humedad. Los animales mueren y usted pierde dinero, tiempo y aprendizaje.
                    </p>
                </div>
                <div class="bg-success-subtle text-success-emphasis p-3 pt-4 text-center-md-left">
                    <h3 class="fs-4 mb-3">Eligiendo incubadoras ADAMI</h3>
                    <div class="bg-white rounded p-2">
                        <p class="my-2 mb-3">
                        No solo está comprando una incubadora con todos sus repuestos, sino también una incubadora testeada con
                        cientos de incubaciones exitosas y un asesoramiento personalizado por Damian Masdeu.
                        </p>
                        <div class="d-flex-center-center">
                        <img
                            class="sqr-96 rounded-circle me-3"
                            src="@/assets/damian_masdeu_incubadoras_de_aves_automaticas_adami.webp"
                            alt="Damian Masdeu Dueño de incubadoras ADAMI"
                        />
                        <div class="text-start">
                            <div class="fs-4">Damian Masdeu</div>
                            <div class="text-muted">Director General</div>
                            <div>
                            WhatsApp:
                            <a
                                class="text-reset"
                                href="https://api.whatsapp.com/send?phone=5491168066775&amp;text=Hola Adami! Estoy interesado en las incubadoras"
                                target="_blank"
                            >
                                11 6806-6775
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section class="bg-light-subtle text-light-emphasis my-5">
        <div class="container py-3 text-center">
            <h2>Tecnología Argentina</h2>
            <p>
            Aficionados y expertos eligen incubadoras ADAMI por sus exitosos nacimientos.
            <br />
            Escuelas, zoologicos, reservas naturales, ciraderos particulares y más.
            </p>
            <p class="fw-bold">Gracias por confiar en nuestra pasión, damos lo mejor todos los días.</p>
            <h2 class="my-3 fs-4">La incubadora automática elegida por los que saben</h2>
            <div class="row">
                <div class="col-12 col-lg-4 order-0 order-lg-1">
                    <img class="w-100" src="@/assets/partners/incubadoras_adami_partners_a.webp" alt="Ecoparque, Temaiken, Guira Oga compran incubadoras adami"/>
                </div>
                <div class="col-12 col-lg-12 order-1 order-lg-4">
                    <p class="my-3 bg-light-subtle text-light-emphasis p-2 rounded">
                    <b>+60 años trabajando</b>
                    junto a criaderos en toda la Argentina 🇦🇷
                    </p>
                </div>
                <div class="col-12 col-lg-4 order-2 order-lg-2">
                    <img class="w-100" src="@/assets/partners/incubadoras_adami_partners_b.webp" alt="Aves Argentinas, Habiaunaves, La Santa Codorniz compran incubadoras adami" />
                </div>
                <div class="col-12 col-lg-4 order-4 order-lg-3">
                    <img class="w-100" src="@/assets/partners/incubadoras_adami_partners_c.webp" alt="El Arte de incubar, Palenque Ramirez, +500 el último año" />
                </div>
            </div>
        </div>
    </section>


    <section class="container my-5 text-center">
        <h2>
            Sabemos cómo incubar
            <br />
            <span class="text-primary">aves en los distintos climas de la gran Argentina</span>
        </h2>
        <p>Lo ayudamos a incubar para que consigas hasta un 95% de nacimientos desde el primer día.</p>
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
            <div class="h-100 bg-primary-subtle text-primary-emphasis p-3 rounded">
                <div class="text-start">
                <div class="text-primary"></div>
                <p class="review-content">"Me explicaron muy bien, estoy muy agradecido."</p>
                <small>Alta Gracia, Córdoba</small>
                </div>
            </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
            <div class="h-100 bg-primary-subtle text-primary-emphasis p-3 rounded">
                <div class="text-start">
                <div class="text-primary"></div>
                <p class="review-content">"Humedad estable, temperatura estable: La mejor inversión que hice."</p>
                <small>9 de Julio, Misiones</small>
                </div>
            </div>
            </div>
        </div>
        <router-link to="opiniones-incubadoras-de-huevos">Ver todos los comentarios</router-link>
    </section>

    <section class="bg-light my-5 py-4 text-center">
        <div class="container">
            <h2>
            Le enseñamos a incubar
            <br />
            <span class="text-primary">Paso a Paso</span>
            </h2>
            <p>Aprenda a usar su incubadora de huevos automática desde el primer día.</p>
            <ul class="list-group text-start">
            <li class="list-group-item">Guías y videos paso a paso.</li>
            <li class="list-group-item">Resolvemos dudas reales</li>
            <li class="list-group-item">Soporte por WhatsApp.</li>
            <li class="list-group-item">Sabemos como incubar en cada clima de la gran Argentina.</li>
            </ul>
            <div class="d-flex-center-start ps-2 mt-3 text-success-emphasis">
            <div></div>
            <p class="text-start mb-0 ms-2 fw-bold">
                Esto es lo que hace la diferencia entre fallar o lograr buenos nacimientos.
            </p>
            </div>
        </div>
    </section>


    <section class="container my-5" style="overflow: hidden">
        <h2 class="text-center mb-3 d-block d-md-none">Desarrollo tecnológico Argentino</h2>
        <div class="row position-relative">
            <div class="col order-0 order-md-1">
                <h2 class="mb-3 d-none d-md-block">
                    Por qué elegir
                    <span class="text-primary">Incubadoras de huevos ADAMI</span>
                </h2>
                <ul class="list-none fs-6-md-5">
                    <li class="d-flex-center-start"><span>Temperatura y humedad configurable</span></li>
                    <li class="d-flex-center-start"><span>Visualice temperatura y humedad</span></li>
                    <li class="d-flex-center-start"><span>Volteo automático de huevos (configurable)</span></li>
                    <li class="d-flex-center-start"><span>Alarma inteligente</span></li>
                    <li class="d-flex-center-start"><span>Contador de días de incubación</span></li>
                </ul>
                <p class="d-none d-md-block bg-success-subtle text-success-emphasis p-3 rounded mt-3 text-center fs-6-md-5">
                    Unicas con ajuste de temperatura cada 0.1°C real medido
                </p>
            </div>
            <div class="col-5 col-md-3 order-1 order-md-0">
                <img
                    class="h-100 w-100 object-fit-contain"
                    src="/images/home_carousel/termostato_adami_incubadora_aves_mejor_precio.webp"
                    alt="termostato digital lcd incubadoras de huevos adami"
                />
            </div>
        </div>
        <p class="d-block d-md-none bg-success-subtle text-success-emphasis p-3 rounded mt-3 text-center fs-6-md-5">
            Unicas con ajuste de temperatura cada 0.1°C real medido
        </p>
    </section>






</template>
<script setup>
import Nav from './template/Nav.vue';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { de_slugify } from '../utils.js';
import { ref } from 'vue';
import HeaderSection from './template/HeaderSection.vue';

const carouselConfig = {
  itemsToShow: 1,
  autoplay:3000,
  wrapAround:true
}

const carousel = ref([
  '/images/home_carousel/incubadora_aves_adami_mejor_precio_repuestos_argentina.webp',
  '/images/home_carousel/termostato_adami_incubadora_aves_mejor_precio.webp',
  '/images/home_carousel/incubadora_huevos_adami_aves_mejor_precio_argentina.webp'
])

</script>