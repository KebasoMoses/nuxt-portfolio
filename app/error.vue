<template>
    <NuxtLayout>
        <section class="flex flex-col justify-center h-80 items-center">
            <!-- {{ error }} -->
            <h1 class="text-8xl">Oops! {{ error.statusCode }}</h1>
            <p class="m-3 p-4 text-xl">{{ error.statusMessage }}</p>
        </section>
    </NuxtLayout>
</template>

<script setup>
defineProps({
  error: Object
})
</script>