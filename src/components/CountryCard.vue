<template>
  <div class="pb-12 max-w-xs bg-[#FFFFFF] shadow">
    <img
      :src="country.flags.png"
      alt="country.name.common"
      class="max-h-40 w-[250px] min-h-[150px]"
    />
    <div class="p-4">
      <h1 class="font-bold my-5">
        {{ country.name.common }}
      </h1>
      <p class="font-semibold">
        Population: <span class="font-normal">{{ country.population }}</span>
      </p>
      <p class="font-semibold">
        Region: <span class="font-normal">{{ country.region }}</span>
      </p>
      <p class="font-semibold">
        Capital: <span class="font-normal">{{ country.capital[0] }}</span>
      </p>
    </div>
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
