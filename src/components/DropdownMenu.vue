<template>
  <select
    class="mx-10 my-3 w-[300px] cursor-pointer rounded border border-slate-600 px-5 py-3 text-slate-600 shadow-xl outline-inherit dark:bg-[#202C37] dark:text-white dark:outline-slate-600 sm:w-[350px] sm:w-[300px]"
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
