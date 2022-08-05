<template>
  <div class="m-4 p-12 text-center max-h-52">
    <h1 class="font-bold m-5">{{ country.name.common }}</h1>
    <img :src="country.flags.png" alt="country.name.common" class="max-h-40" />
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
