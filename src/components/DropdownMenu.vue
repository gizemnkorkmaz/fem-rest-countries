<script setup>
const REGIONS = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Pacific']
</script>

<template>
    <select
        :class="[
            'outline-inherit mx-10 my-3 w-[300px] cursor-pointer rounded border',
            'border-dark-gray px-5 py-3 text-dark-gray shadow-xl',
            'dark:bg-darker-blue dark:text-white dark:outline-dark-gray sm:w-[350px] sm:w-[300px]',
        ]"
    >
        <option v-for="region in REGIONS" :key="region">{{ region }}</option>
    </select>
</template>
