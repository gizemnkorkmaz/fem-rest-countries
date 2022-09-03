<script setup>
import capitalize from 'lodash.capitalize'
import router from '../router'

const props = defineProps({
    country: {
        type: Object,
        required: true,
    },
})

const countryDetails = {
    population: props.country.population.toLocaleString(),
    region: props.country.region,
    capital: props.country.capital?.[0],
}

const showDetails = () => {
    const currentCountry = props.country.name.common.toLowerCase()
    router.push({ path: `/${currentCountry}` })
}
</script>

<template>
    <div
        :class="[
            'max-h-[380px] max-w-xs cursor-pointer rounded-lg bg-white pb-12 shadow-lg',
            ' hover:opacity-80 dark:bg-dark-blue dark:text-white',
        ]"
        @click="showDetails"
    >
        <img
            :src="country.flags.png"
            :alt="country.name.common"
            class="max-h-40 min-h-[150px] w-[320px] rounded-t-lg sm:w-[250px]"
        />
        <div class="p-4">
            <h1 class="my-5 text-center text-xl">
                {{ country.name.common }}
            </h1>
            <p v-for="(detail, key) in countryDetails" :key="key" class="text-center text-sm font-semibold leading-8">
                {{ capitalize(key) }}:
                <span class="font-normal">{{ detail }}</span>
            </p>
        </div>
    </div>
</template>
