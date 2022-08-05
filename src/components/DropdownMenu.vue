<template>
  <select
    class="border px-10 py-3 mx-10 my-3 rounded text-slate-600 cursor-pointer"
  >
    <option value="" disabled selected>Filter by Region</option>
    <option v-for="region in regions" :key="region">{{ region }}</option>
  </select>
</template>

<script setup>
const regions = ["Africa", "America", "Asia", "Europe", "Oceania", "Pacific"];
</script>
