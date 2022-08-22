<template>
  <div :class="theme">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, provide } from "@vue/runtime-core";

import HeaderComponent from "./components/Header.vue";
import CountryBoard from "./components/CountryBoard.vue";

const countries = ref([]);
const theme = ref("dark");

onMounted(() => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      countries.value = data.sort((firstCountry, secondCountry) =>
        firstCountry.name.common.localeCompare(secondCountry.name.common)
      );
    });
});

provide("countries", countries);
provide("theme", theme);
</script>

<style scoped></style>
