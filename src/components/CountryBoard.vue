<template>
  <section class="flex items-center justify-between px-10 mx-5">
    <SearchBox />
    <DropdownMenu />
  </section>
  <section class="flex flex-wrap">
    <CountryBox
      :country="country"
      v-for="country in countries"
      :key="country"
    />
  </section>
</template>

<script setup>
import SearchBox from "./SearchBox.vue";
import CountryBox from "./CountryBox.vue";
import DropdownMenu from "./DropdownMenu.vue";

defineProps({
  countries: {
    type: Array,
    required: true,
  },
});
</script>
