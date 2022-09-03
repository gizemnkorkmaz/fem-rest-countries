<template>
  <div class="flex justify-between bg-white p-6 px-8 shadow dark:bg-[#2B3945]">
    <h1
      class="cursor-pointer text-xl font-bold dark:text-[#fafafa]"
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
