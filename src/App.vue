<script setup>
import HeaderComponent from "./components/Header.vue";
import CountryBoard from "./components/CountryBoard.vue";
import { ref } from "@vue/reactivity";

const countries = ref([]);

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    countries.value = data;
  });
</script>

<template>
  <HeaderComponent />
  <CountryBoard :countries="countries" />
</template>

<style scoped></style>
