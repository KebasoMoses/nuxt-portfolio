<template>
    <div class="not-prose">
        <section v-if="error"> Something truly went wrong!</section>
    <section v-else>
        <ul class="grid grid-cols-1 gap-4">
            <li v-for="repository in data" :key="repository.id" @click="openLink(repository)"
                class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:gray-100 dark:hover:bg-gray-800 font-mono hover:bg-gray-200 cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110">
                <div class="flex items-center justify-between">
                    <div>
                        <a :href="repository.html_url" target="_blank" class="text-blue-500 font-semibold">{{
                            repository.name }}</a>
                    </div>
                    <div>
                        <span class="text-gray-500">{{ repository.stargazers_count }} ⭐</span>
                    </div>
                </div>
                <p class="mt-3">{{ repository.description ? repository.description : 'This repository do not have a description, check back some other time.' }}</p>
            </li>
        </ul>
    </section>
    </div>
</template>

<script setup>
const { error, pending, data } = await useFetch('https://api.github.com/users/kebasomoses/repos');

// console.log(data.value, "Test.............");

const openLink = (repository) => {
    window.open(repository.html_url, '_blank');
}

</script>