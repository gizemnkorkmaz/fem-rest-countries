<template>
  <section class="flex items-center justify-between px-20">
    <SearchBox />
    <DropdownMenu />
  </section>
  <section class="flex flex-wrap justify-center gap-20">
    <CountryCard
      :country="country"
      v-for="country in countries"
      :key="country"
    />
  </section>
</template>

<script setup>
import SearchBox from "./SearchBox.vue";
import CountryCard from "./CountryCard.vue";
import DropdownMenu from "./DropdownMenu.vue";

defineProps({
  countries: {
    type: Array,
    required: true,
  },
});
</script>
