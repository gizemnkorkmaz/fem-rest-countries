<template>
  <section
    class="flex flex-wrap justify-center md:justify-between items-center my-5"
  >
    <SearchBox />
    <DropdownMenu />
  </section>
  <section class="flex flex-wrap justify-center gap-20">
    <CountryCard
      :country="country"
      v-for="country in orderedCountryList"
      :key="country.name.common"
    />
  </section>
</template>

<script setup>
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

const orderedCountryList = computed(() => {
  return props.countries.sort((firstCountry, secondCountry) =>
    firstCountry.name.common.localeCompare(secondCountry.name.common)
  );
});
</script>
