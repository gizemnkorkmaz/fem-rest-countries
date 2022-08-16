<template>
  <select
    class="border px-10 py-3 mx-10 my-3 rounded text-slate-600 cursor-pointer"
  >
    <option v-for="region in REGIONS" :key="region">{{ region }}</option>
  </select>
</template>

<script setup>
const REGIONS = [
  "All",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
  "Pacific",
];
</script>
