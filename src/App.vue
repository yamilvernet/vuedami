<script setup>
import Nav from "@/views/template/Nav.vue";
import Footer from "@/views/template/Footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <!-- Header -->
  <Nav v-if="route.name!='home'"/>
  <!-- Main -->
  <RouterView />
  <!-- Footer -->
  <Footer/>
</template>