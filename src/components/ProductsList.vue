<script setup>
import ProductCard from '../components/ProductCard.vue';
import products from '@/products.js'
</script>

<template>
    <section class="container mt-5">
        <h2 class="fs-3">Incubadora de Huevos <span class="text-primary">Automática Digital</span></h2>
        <div class="row mb-5">
            <article class="col-6 col-lg-4 mb-3" v-for="product in products.filter((p)=>p.type=='automatica')">
                <ProductCard :name="product.name" :slug="product.slug" :capacity="product.capacity" :thumbnail="product.cover_image"/>
            </article>
        </div>

        <h2 class="fs-3">Incubadoras de Huevos <span class="text-primary">Automática FULL LCD Digital</span></h2>
        <div class="row mb-5">
            <article class="col-6 col-lg-4 mb-3" v-for="product in products.filter((p)=>p.type=='full')">
                <ProductCard legend="Con pantalla LCD" :name="product.name" :slug="product.slug" :capacity="product.capacity" :thumbnail="product.cover_image"/>
            </article>
        </div>

        <h2 class="fs-3">Incubadoras de Huevos Industriales <span class="text-primary">Automática Digital</span></h2>
        <div class="row mb-5">
            <article class="col-6 col-lg-4 mb-3" v-for="product in products.filter((p)=>p.type=='industrial')">
                <ProductCard :name="product.name" :slug="product.slug" :capacity="product.capacity" :thumbnail="product.cover_image"/>
            </article>
        </div>
    </section>
</template>