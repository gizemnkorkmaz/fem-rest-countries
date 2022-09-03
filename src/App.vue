<template>
  <div :class="theme">
    <HeaderComponent />
    <router-view />
    <div v-if="isLoading" class="flex justify-center">
      <span class="text-center text-xl font-semibold dark:text-[#fafafa]"
        >Loading...</span
      >
      <Icon
        name="loading"
        :size="17"
        class="m-[5px] ml-3 dark:text-[#fafafa]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, provide } from "@vue/runtime-core";
import Lookie from "lookie";

import HeaderComponent from "./components/Header.vue";
import CountryBoard from "./components/CountryBoard.vue";
import Icon from "./components/Icon.vue";

const countries = ref([]);
const theme = ref(Lookie.get("theme") || "dark");
const isLoading = ref(true);

onMounted(() => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      countries.value = data.sort((firstCountry, secondCountry) =>
        firstCountry.name.common.localeCompare(secondCountry.name.common)
      );

      isLoading.value = false;
    });
});

provide("countries", countries);
provide("theme", theme);
</script>

<style scoped>
.dark {
  height: 100vh;
  background: #202c37;
}
</style>
