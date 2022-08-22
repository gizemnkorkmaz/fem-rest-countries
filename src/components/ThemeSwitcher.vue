<template>
  <div
    class="flex items-center font-semibold dark:text-white cursor-pointer"
    @click="switchTheme"
  >
    <icon :name="theme" :size="18" />
    <span class="px-2 text-md"> {{ _.capitalize(theme) }} Mode</span>
  </div>
</template>

<script setup>
import { inject } from "@vue/runtime-core";
import _ from "lodash";

import Icon from "./Icon.vue";

const theme = inject("theme");

const switchTheme = () =>
  (theme.value = theme.value === "dark" ? "light" : "dark");
</script>
