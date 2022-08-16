<template>
  <HeaderComponent />
  <CountryBoard :countries="countries" />
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import HeaderComponent from "./components/Header.vue";
import CountryBoard from "./components/CountryBoard.vue";

const countries = ref([]);

onMounted(() => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      countries.value = data.sort((firstCountry, secondCountry) =>
        firstCountry.name.common.localeCompare(secondCountry.name.common)
      );
    });
});
</script>

<style scoped></style>
