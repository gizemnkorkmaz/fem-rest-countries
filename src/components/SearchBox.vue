<template>
  <div>
    <Icon name="search" :size="12" class="relative left-10 text-slate-400" />
    <input
      type="text"
      class="mx-4 my-12 py-3 pl-8 shadow-md rounded-sm text-sm w-72"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
</script>
