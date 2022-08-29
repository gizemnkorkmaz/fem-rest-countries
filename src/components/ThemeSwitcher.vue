<template>
  <div
    class="flex items-center font-semibold dark:text-white cursor-pointer"
    @click="switchTheme"
  >
    <icon name="dark" :size="18" v-if="theme == 'light'" />
    <icon name="light" :size="18" v-if="theme == 'dark'" />
  </div>
</template>

<script setup>
import { inject } from "@vue/runtime-core";

import Icon from "./Icon.vue";

const theme = inject("theme");

const switchTheme = () =>
  (theme.value = theme.value === "dark" ? "light" : "dark");
</script>
