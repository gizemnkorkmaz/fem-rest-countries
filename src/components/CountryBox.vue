<template>
  <div class="m-4 px-12 text-center">
    <h1 class="font-bold m-5">{{ country.name.common }}</h1>
    <img :src="country.flags.png" alt="" />
  </div>
</template>

<script setup>
defineProps({
  country: {
    type: Object,
    required: true,
  },
});
</script>
