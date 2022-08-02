<template>
  <section class="query-section flex items-center justify-between px-10 mx-5">
    <SearchBox />
    <DropdownMenu />
  </section>

  <CountryBox />
</template>

<script setup>
import SearchBox from "./SearchBox.vue";
import CountryBox from "./CountryBox.vue";
import DropdownMenu from "./DropdownMenu.vue";
</script>
