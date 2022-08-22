<template>
  <div
    class="pb-12 max-w-xs bg-[#FFFFFF] shadow cursor-pointer dark:bg-[#2B3945] dark:text-white"
    @click="showDetails"
  >
    <img
      :src="country.flags.png"
      :alt="country.name.common"
      class="max-h-40 sm:w-[250px] w-[320px] min-h-[150px]"
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

const showDetails = () => router.push({ path: "/CountryDetails" });
</script>
