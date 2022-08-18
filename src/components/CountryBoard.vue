<template>
  <section
    class="flex flex-wrap justify-center md:justify-between items-center my-5"
  >
    <SearchBox @clearSearch="clearSearch" v-model="searchedCountry" />
    <DropdownMenu @change="regionUpdate" />
  </section>
  <section class="flex flex-wrap justify-center gap-20">
    <CountryCard
      :country="country"
      v-for="country in searchedCountry
        ? searchedCountryList
        : regionalCountryList"
      :key="country.name.common"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "@vue/runtime-core";

import SearchBox from "./SearchBox.vue";
import CountryCard from "./CountryCard.vue";
import DropdownMenu from "./DropdownMenu.vue";

const props = defineProps({
  countries: {
    type: Array,
    required: true,
  },
});

const selectedRegion = ref("All");
const searchedCountry = ref("");

const regionUpdate = (e) => (selectedRegion.value = e.target.value);
const clearSearch = () => (searchedCountry.value = "");

const regionalCountryList = computed(() => {
  return props.countries.filter((country) =>
    selectedRegion.value === "All"
      ? props.countries
      : country.region === selectedRegion.value
  );
});

const searchedCountryList = computed(() => {
  return regionalCountryList.value.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(searchedCountry.value.toLowerCase())
  );
});
</script>
