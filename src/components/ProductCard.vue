<template>
    <div class="bg-primary-subtle text-primary-emphasis rounded p-3">
        <router-link :to="product_url">

            <img
            class="product-article-image rounded"
            :src="props.thumbnail"
            alt="incubadora de aves automatica para 50 huevos"
            />
        </router-link>
        <div class="fs-4 fw-bold">{{ props.name }}</div>
        <h3 class="fs-6">Incubadora de {{props.capacity}} huevos</h3>
        <h4 class="fs-6" v-if="props.legend">{{ props.legend }}</h4>
        <router-link :to="product_url" class="btn btn-sm btn-primary">Ver modelo y precio</router-link>
    </div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps(['name','slug','capacity','thumbnail','legend'])

const product_url = computed(()=>{
    return '/incubadora/'+props.slug
})
</script>
