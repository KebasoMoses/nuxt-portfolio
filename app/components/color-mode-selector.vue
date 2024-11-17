<template>
    <div class="flex items-center space-x-4">
        <div v-show="showNextModelLabel">
            Change Mode to {{ nextMode }}
        </div>
        <div>
            <button @click="toggleNextMode" @mouseenter="showNextModelLabel = true" @mouseleave="showNextModelLabel = false" class="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-4xl md:text-base">
                {{ nextModeIcon }}
            </button>
        </div>
    </div>
</template>


<script setup>
const colorMode = useColorMode()
const showNextModelLabel = ref(false)

const modes = [
    'system',
    'light',
    'dark'
]

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference)
    let nextModeIndex = null
    if (currentModeIndex + 1 === modes.length){
        nextModeIndex = 0
    }else{
        nextModeIndex = currentModeIndex + 1
    }

    return modes[nextModeIndex]
})

const nextModeIcon = computed(()=>nextModeIcons[nextMode.value])


function toggleNextMode() {
    colorMode.preference = nextMode.value
}


</script>