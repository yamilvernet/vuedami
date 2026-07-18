<template>
    <header class="bg-primary-subtle py-4 text-center">
        <div class="badge badge-argentina mb-3">🇦🇷 Industria Argentina desde 1964</div>
        <h2 class="fs-4 mb-1">{{ props.h2 }}</h2>
        <h1 class="text-primary">{{ props.h1 }}</h1>
        <p>{{ props.subheading }}</p>
    </header>
</template>
<script setup>
const props = defineProps(['h1','h2','subheading'])
</script>
