<template>
  <div class="flex justify-between p-6 px-8 shadow bg-white dark:bg-[#2B3945]">
    <h1
      class="font-bold text-xl dark:text-[#fafafa] cursor-pointer"
      @click="returnHome"
    >
      Where in the world?
    </h1>
    <div>
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup>
import router from "../router";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const returnHome = () => {
  router.push({ path: "/" });
};
</script>
