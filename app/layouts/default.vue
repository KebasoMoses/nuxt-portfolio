<template>
    <div class="container mx-auto max-w-4xl mt-5">
        <header class="flex justify-between items-start md:items-center">
            <div class="flex items-start md:items-center md:space-x-12">
                <div class="hidden md:block">
                    <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">Kebaso Moses</NuxtLink>
                </div>
                <Menu />
            </div>
            <ClientOnly>
                <ColorModeSelector />
            </ClientOnly>
        </header>
        <div class="p-2 mt-10">
            <slot />
        </div>
    </div>

</template>


<script setup>

useHead({
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
            crossorigin: ''
        }
    ]
})
</script>

<style>
body {
    font-family: 'Roboto';
}

body {
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}

</style>

