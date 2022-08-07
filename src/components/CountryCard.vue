<template>
  <div class="pb-12 max-w-xs bg-[#FFFFFF] shadow">
    <img
      :src="country.flags.png"
      :alt="country.name.common"
      class="max-h-40 w-[250px] min-h-[150px]"
    />
    <div class="p-4">
      <h1 class="font-bold my-5">
        {{ country.name.common }}
      </h1>
      <p
        v-for="(detail, key) in countryDetails"
        :key="key"
        class="font-semibold"
      >
        {{ _.capitalize(key) }}: <span class="font-normal">{{ detail }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import _ from "lodash";

const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
});

const countryDetails = {
  population: props.country.population,
  region: props.country.region,
  capital: props.country.capital?.[0],
};
</script>
