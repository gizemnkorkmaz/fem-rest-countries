<template>
  <HeaderComponent />
  <CountryBoard :countries="countries" />
</template>

<script setup>
import { ref } from "@vue/reactivity";

import HeaderComponent from "./components/Header.vue";
import CountryBoard from "./components/CountryBoard.vue";

const countries = ref([]);

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    countries.value = data;
  });
</script>

<style scoped></style>
