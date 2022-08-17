<template>
  <select
    class="shadow-sm border px-5 py-3 mx-10 my-3 rounded text-slate-600 cursor-pointer sm:w-[300px] w-[280px]"
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
