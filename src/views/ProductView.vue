<template>
    <main>
        <div class="text-center">
            <div class="badge badge-argentina mb-3 mx-auto">🇦🇷 Industria Argentina desde 1964</div>
        </div>

        <!-- Gallery and main info -->
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-6 col-lg-8 my-2">
                    <Carousel v-bind="carouselConfig" v-if="true">
                        <Slide v-for="(image_path,i) in product.gallery" :key="i">
                            <img class="product-gallery-image rounded" :src="image_path" :alt="'Imagen ' + (i+1) + ' de la galeria de incubadoras de huevos automatica de la marca adami. El mejor precio y calidad de incubadoras de aves en argentina'">
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
                <div class="col my-2">
                    <div class="bg-primary-subtle text-primary-emphasis rounded p-3 border border-primary-emphasis">
                        <h1 class="fs-2 fw-bold">Incubadora de huevos automática {{product.name}}</h1>
                        <p>Incubadora y nacedora profesional para todo tipo de huevos. Con capacidad de {{product.capacity}} huevos.</p>
                        <div class="fs-1 fw-bold text-primary" itemprop="price">{{product_price}}</div>
                        <ul class="list-unstyled small mt-2">
                            <li>En efectivo o depósito bancario</li>
                            <li><IconTruckFilled size="14"/> Enviamos con normalidad a todo el país.</li>
                        </ul>
                        <a class="btn btn-primary w-100 mt-2" :href="whatsapp_url" target="_blank">Consultar por Whatsapp ahora</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Advice -->
        <div class="container my-4">
            <div class="grid-wrapper">
                <div class="bg-danger-subtle text-danger-emphasis p-3 pt-4 text-center-md-left">
                    <h3 class="fs-5 mb-3">No todas las incubadoras dan buenos resultados</h3>
                    <ul class="list-none fs-6-md-5 text-center-md-left">
                        <li><IconCircleXFilled size="22" style="vertical-align: center;" class="me-1"/> <span>Animales que pican el huevo y no pueden nacer</span></li>
                        <li><IconCircleXFilled size="22" style="vertical-align: center;" class="me-1"/> <span>Embriones que no se desarrollan</span></li>
                        <li><IconCircleXFilled size="22" style="vertical-align: center;" class="me-1"/> <span>Nacimientos desparejos</span></li>
                        <li><IconCircleXFilled size="22" style="vertical-align: center;" class="me-1"/> <span>Animales que caminan mal y no logran sobrevivir</span></li>
                    </ul>
                </div>
                <div class="bg-success-subtle text-success-emphasis p-3 pt-4 text-center-md-left">
                    <h3 class="fs-5 mb-3">Con ADAMI, los resultados son distintos</h3>
                    <ul class="list-none fs-6-md-5 text-center-md-left">
                        <li><IconCircleCheckFilled size="22" style="vertical-align: center;" class="me-1"/> <span>Temperatura siempre precisa</span></li>
                        <li><IconCircleCheckFilled size="22" style="vertical-align: center;" class="me-1"/> <span>Humedad controlada</span></li>
                        <li><IconCircleCheckFilled size="22" style="vertical-align: center;" class="me-1"/> <span>Funcionamiento confiable</span></li>
                        <li><IconCircleCheckFilled size="22" style="vertical-align: center;" class="me-1"/> <span>Le enseñamos todo lo que necesite</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-6 my-2">
                    <img
                        class="w-100 rounded"
                        :src="controller_image_path"
                        alt="termostato automatico digital adami precio incubadora"
                        loading="lazy"
                    />
                </div>
                <div class="col my-2">
                    <h2>{{product.name}}</h2>
                    <h3>Incubadora de Huevos Automática</h3>
                    <ul class="list-none mt-3">
                        <li><IconEgg size="16" style="vertical-align: center;"/> Capacidad de {{ product.capacity }} huevos.</li>
                        <li v-if="product.type=='full'"><IconTemperature size="16" style="vertical-align: center;"/> Pantalla LCD muestra días, temperatura, humedad y mucho más.</li>
                        <li><IconRuler size="16" style="vertical-align: center;"/> Medidas: 52cm x 45cm x 28cm.</li>
                        <li><IconRefresh size="16" style="vertical-align: center;"/> Rotación de huevos automática cada 1 o 2 horas.</li>
                        <li><IconBellRinging size="16" style="vertical-align: center;"/> Alarma inteligente que suena si está fuera de rango.</li>
                        <li v-if="product.type=='automatica'"><IconTemperature size="16" style="vertical-align: center;"/> Control de temperatura por termómetro de vidrio.</li>
                        <li><IconDroplet size="16" style="vertical-align: center;"/> Carga de agua automática por botella.</li>
                        <li><IconShield size="16" style="vertical-align: center;"/> Protección contra picos de tensión.</li>
                        <li class="fw-bold"><IconCircleCheck size="16" style="vertical-align: center;"/> Unicas con ajuste de temperatura cada 0.1°C.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container mt-2">
            <h2 class="fs-2 fw-bold mb-2">Características únicas incorporadas en Incubadoras A.DAMI</h2>
            
            <p v-if="product.type=='industrial'">El modelo A{{ product.capacity }} cuenta con {{product.eggs_tray}} bandejas de 100 huevos más una nacedora de 140. Todas sus bandejas son de chapa perforada galvanizada. Su ventilador es de aluminio y calienta a través de una resistencia de micrón, armada en un gabinete de madera impermeabilizado capaz de funcionar las 24 hs sin parar. <br><br> Sus {{product.eggs_tray}} bandejas permiten el cargado de huevos semanalmente y tener nacimientos escalonados semanalmente, teniendo animales para vender cada 40 días. </p>
            <ol class="ps-3" v-else>
                <li class="mb-2"><strong>Control de temperatura y humedad automáticas</strong>: Ajustables con precisión de 0.1 grados por medio de un sistema sin relé que permite configuraciones extremadamente precisas. Ideal, por ejemplo, para alcanzar los 37.8°, temperatura perfecta para nacimientos impecables, logrando hasta un 95% de éxito.</li>
                <li class="mb-2"><strong>Térmica y fácil de limpiar</strong>: Fabricada con el mismo plástico y sistema de aislamiento que se utiliza en heladeras, lo que la hace altamente térmica y muy fácil de limpiar con detergente, alcohol o agua.</li>
                <li class="mb-2"><strong>Cuidada en cada detalle</strong>: La tapa transparente permite observar todos los nacimientos, mientras que sus puntas redondeadas aseguran una circulación de calor uniforme (un factor clave). Además, el piso perforado donde se apoyan los huevos permite un <strong>control de humedad perfecto</strong>.</li>
                <li class="mb-2"><strong>Sistema de calefacción de bajo consumo energético</strong>: Equipada con una resistencia de nicrom inoxidable y un ventilador de aluminio de 4 pulgadas con rulemanes (220V), que garantizan una circulación eficiente de calor y humedad con un consumo muy reducido.</li>
            </ol>
        
        </div>

        <BirthTable v-if="product.capacity==70||product.capacity==120" :machine_capacity="product.capacity"/>

        <ReviewSection/>




    </main>
</template>
<script setup>
import { computed } from 'vue';
import { ENV } from '../env';
import { get_whatsapp_url } from '../utils';
import products from '@/products';
import { useRoute } from 'vue-router';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import BirthTable from '../components/BirthTable.vue';
import { IconBellRinging, IconCircleCheck, IconCircleCheckFilled, IconCircleXFilled, IconDroplet, IconEgg, IconRefresh, IconRuler, IconShield, IconTemperature, IconTruckFilled } from '@tabler/icons-vue';
import ReviewSection from '../components/ReviewSection.vue';


// get product
const route = useRoute()
const product = computed(() =>
  products.find(p => p.slug === route.params.slug)
)

// data
const whatsapp_url = computed(()=>
  get_whatsapp_url(ENV.WPP_PHONE_NUMBER,"Hola Adami! Me interesa la incubadora " + product.value.name)
)
const product_price = computed(()=>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS",maximumSignificantDigits: 3 }).format(
    parseInt(product.value.price)
  )
)
const controller_image_path = computed(()=>{
    if(product.value.type=='industrial') return '/images/controllers/controlador_automatico_temperatura_incubadoras_huevos_industriales_adami.webp'
    if(product.value.type=='automatica') return '/images/controllers/controlador_automatico_temperatura_incubadoras_huevos_adami.webp'
    return '/images/controllers/controlador_automatico_display_lcd_temperatura_incubadoras_huevos_adami.webp'
})

// gallery
const carouselConfig = {
  // itemsToShow: 1,
  autoplay:5000,
  wrapAround:true
}
</script>