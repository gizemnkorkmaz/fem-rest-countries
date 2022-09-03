<script setup>
import router from '../router'
import ThemeSwitcher from './ThemeSwitcher.vue'

const returnHome = () => {
    router.push({ path: '/' })
}
</script>

<template>
    <div class="flex justify-between bg-white p-8 shadow dark:bg-dark-blue">
        <h1 class="cursor-pointer text-xl font-bold dark:text-white" @click="returnHome">Where in the world?</h1>
        <div>
            <ThemeSwitcher />
        </div>
    </div>
</template>
