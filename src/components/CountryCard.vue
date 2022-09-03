<template>
  <div
    class="max-h-[380px] max-w-xs cursor-pointer rounded-lg bg-[#FFFFFF] pb-12 shadow dark:bg-[#2B3945] dark:text-white"
    @click="showDetails"
  >
    <img
      :src="country.flags.png"
      :alt="country.name.common"
      class="max-h-40 min-h-[150px] w-[320px] rounded-lg sm:w-[250px]"
    />
    <div class="p-4">
      <h1 class="my-5 text-center font-bold">
        {{ country.name.common }}
      </h1>
      <p
        v-for="(detail, key) in countryDetails"
        :key="key"
        class="text-center font-semibold"
      >
        {{ _.capitalize(key) }}: <span class="font-normal">{{ detail }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import _ from "lodash";
import router from "../router";

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

const showDetails = (e) => {
  const currentCountry = props.country.name.common.toLowerCase();
  router.push({ path: `/${currentCountry}` });
};
</script>
