<script setup>
import { inject } from 'vue'
import Lookie from 'lookie'

import Icon from './Icon.vue'

const theme = inject('theme')

const switchTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    Lookie.set('theme', theme.value)
}
</script>

<template>
    <div class="flex cursor-pointer items-center font-semibold hover:opacity-60 dark:text-white" @click="switchTheme">
        <Icon v-if="theme == 'light'" name="dark" :size="25" />
        <Icon v-if="theme == 'dark'" name="light" :size="25" />
    </div>
</template>
