<template>
  <CountryBoard :countries="countries" />
</template>

<script setup>
import { inject } from "@vue/runtime-core";
import CountryBoard from "../components/CountryBoard.vue";

const countries = inject("countries");
</script>
