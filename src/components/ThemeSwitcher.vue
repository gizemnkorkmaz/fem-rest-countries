<template>
  <div
    class="flex cursor-pointer items-center font-semibold hover:opacity-60 dark:text-white"
    @click="switchTheme"
  >
    <icon name="dark" :size="25" v-if="theme == 'light'" />
    <icon name="light" :size="25" v-if="theme == 'dark'" />
  </div>
</template>

<script setup>
import { inject } from "@vue/runtime-core";
import Lookie from "lookie";

import Icon from "./Icon.vue";

const theme = inject("theme");

const switchTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  Lookie.set("theme", theme.value);
};
</script>
