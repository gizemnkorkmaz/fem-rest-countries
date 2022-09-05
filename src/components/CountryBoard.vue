<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

import SearchBox from './SearchBox.vue'
import CountryCard from './CountryCard.vue'
import DropdownMenu from './DropdownMenu.vue'

const props = defineProps({
    countries: {
        type: Array,
        required: true,
    },
})

const selectedRegion = ref('All')
const searchedCountry = ref('')

const regionUpdate = (e) => (selectedRegion.value = e.target.value)
const clearSearch = () => (searchedCountry.value = '')

const regionalCountryList = computed(() => {
    return props.countries.filter((country) =>
        selectedRegion.value === 'All' ? props.countries : country.region === selectedRegion.value
    )
})

const searchedCountryList = computed(() => {
    return regionalCountryList.value.filter((country) =>
        country.name.common.toLowerCase().includes(searchedCountry.value.toLowerCase())
    )
})

const filteredCountryList = computed(() => {
    if (searchedCountry.value) {
        return searchedCountryList.value
    } else {
        return regionalCountryList.value
    }
})
</script>

<template>
    <section class="dark:bg-darker flex flex-wrap items-center justify-center py-5 md:justify-between">
        <SearchBox v-model="searchedCountry" @clearSearch="clearSearch" />
        <DropdownMenu @change="regionUpdate" />
    </section>
    <section
        v-if="!regionalCountryList.length || !searchedCountryList.length"
        class="flex justify-center p-10 dark:bg-darker-blue"
    >
        <span class="text-md text-center dark:text-white">No countries to show</span>
    </section>
    <section class="flex flex-wrap justify-center gap-20 dark:bg-darker-blue">
        <CountryCard v-for="country in filteredCountryList" :key="country.name.common" :country="country" />
    </section>
</template>
