<template>
    <nav class="font-mono">
        <ul class="flex md:space-x-4 flex-col md:flex-row">
            <li class="link">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="link">
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li class="link">
                <NuxtLink to="/projects">Projects</NuxtLink>
            </li>
            <li class="link">
                <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.link {
    @apply hover:bg-gray-200 p-1  dark:hover:bg-gray-800 rounded-md text-2xl md:text-base
}
</style>