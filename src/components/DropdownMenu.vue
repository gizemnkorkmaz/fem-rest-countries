<template>
  <select
    class="border px-10 py-3 mx-10 my-3 rounded text-slate-600 cursor-pointer"
    @change="selectRegion"
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

const emit = defineEmits(["update:region"]);

const selectRegion = (value) => {
  emit("update:region", value);
};
</script>
