<template>
  <section
    class="flex flex-wrap justify-center md:justify-between items-center my-5"
  >
    <SearchBox />
    <DropdownMenu @update:region="regionUpdate" />
  </section>
  <section class="flex flex-wrap justify-center gap-20">
    <CountryCard
      :country="country"
      v-for="country in selectedRegion
        ? regionalCountryList
        : orderedCountryList"
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

const selectedRegion = ref("");

const props = defineProps({
  countries: {
    type: Array,
    required: true,
  },
});

const regionUpdate = (e) => (selectedRegion.value = e.target.value);

const orderedCountryList = computed(() => {
  return props.countries.sort((firstCountry, secondCountry) =>
    firstCountry.name.common.localeCompare(secondCountry.name.common)
  );
});

const regionalCountryList = computed(() => {
  return props.countries.filter((country) =>
    selectedRegion.value === "All"
      ? orderedCountryList
      : country.region === selectedRegion.value
  );
});
</script>
