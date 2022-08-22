<template>
  <button
    @click="returnHome"
    class="w-[120px] p-3 mt-[100px] mx-16 shadow bg-white flex justify-center"
  >
    <Icon name="arrow" :size="20" class="mt-[2px]" /><span class="pl-2"
      >Back</span
    >
  </button>
</template>
<script setup>
import router from "../router";
import Icon from "../components/Icon.vue";

const returnHome = () => {
  router.push({ path: "/" });
};
</script>
