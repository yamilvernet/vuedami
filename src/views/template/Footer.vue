<script setup lang="ts">
import { IconBrandWhatsappFilled, IconMapPinFilled, IconTruckFilled } from '@tabler/icons-vue';
import { ENV } from '../../env';
import { get_whatsapp_url } from '../../utils';
import { computed } from 'vue';

const whatsapp_url = computed(()=>{
  return get_whatsapp_url(ENV.WPP_PHONE_NUMBER,"Hola Adami! Estoy interesado en las incubadoras")
});
</script>

<template>
    <div class="bg-light text-primary-emphasis mt-5 py-3">
        <div class="container text-center">
            <div class="row">
            <div class="col-12 col-md-12 col-lg-4 my-2 text-center">
                <a href="/" class="router-link-active router-link-exact-active d-flex-center-center text-decoration-none">
                <img src="@/assets/logo.webp" class="header-logo-img" alt="Incubadoras Adami" />
                <h2 class="header-text-logo text-primary-emphasis">Incubadoras ADAMI</h2>
                </a>
                <div class="mt-3">
                <b>Compre con confianza</b>
                <br />
                95% de nacimientos y asesoramiento total.
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 my-2 text-center">
                <h5 class="fs-bold">Contacto</h5>
                <a
                class="text-decoration-none d-block text-primary-emphasis"
                :href="whatsapp_url"
                target="_blank"
                >
                <IconBrandWhatsappFilled size="18" style="vertical-align: center;"/>
                {{ENV.WPP_PHONE_NUMBER_FORMATTED}}
                </a>
                <a
                class="text-decoration-none d-block text-primary-emphasis"
                :href="'tel:'+ENV.PHONE_NUMBER"
                target="_blank"
                >
                {{ENV.PHONE_NUMBER_FORMATTED}}
                </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4 my-2 text-center">
                <h5 class="fs-bold">Ubicación</h5>
                <div><IconMapPinFilled size="18" style="vertical-align: center;"/> Nogoya 5159, Capital Federal.</div>
                <div><IconTruckFilled size="18" style="vertical-align: center;"/> Envíos a todo el país.</div>
            </div>
            </div>
            <a
            :href="whatsapp_url"
            target="_blank"
            class="btn btn-primary my-2"
            >
            Hablar por WhatsApp ahora
            </a>
        </div>
        </div>

</template>