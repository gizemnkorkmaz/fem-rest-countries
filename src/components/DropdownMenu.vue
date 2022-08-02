<template>
  <select class="border p-3 rounded text-slate-600">
    <option value="" disabled selected>Filter by Region</option>
    <option v-for="region in regions" :key="region">{{ region }}</option>
  </select>
</template>

<script setup>
const regions = ["Africa", "America", "Asia", "Europe", "Oceania", "Pacific"];
</script>
