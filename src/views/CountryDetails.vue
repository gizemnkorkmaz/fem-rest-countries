<template>
  <div class="dark:bg-[#202C37] dark:text-white pt-10">
    <button
      @click="returnHome"
      class="w-[120px] p-3 mt-[100px] mx-16 shadow bg-white flex justify-center dark:bg-[#2B3945] dark:text-white"
    >
      <Icon name="arrow" :size="20" class="mt-[2px]" /><span class="pl-2"
        >Back</span
      >
    </button>
  </div>
  <div
    class="flex justify-evenly flex-wrap gap-5 p-5 h-full dark:bg-[#202C37] dark:text-white"
  >
    <img
      :src="currentCountryDetails[0].flags.png"
      alt=""
      class="sm:w-[500px] w-[300px] max-h-80"
    />
    <div>
      <h2 class="font-bold text-3xl pb-5">{{ _.capitalize(countryName) }}</h2>
      <p
        v-for="(detail, key) in countryDetails"
        :key="key"
        class="font-semibold pt-2"
      >
        <span class="font-bold">{{ _.capitalize(key) }}: </span>
        <span class="font-normal">{{ detail }}</span>
      </p>
      <p v-if="borders">
        <span class="font-semibold pt-2">Border Countries:</span>
        <button
          v-for="(border, key) in borders"
          :key="key"
          class="p-2 m-1 text-xs shadow bg-white dark:bg-[#2B3945] dark:text-white"
        >
          {{ border }}
        </button>
      </p>
    </div>
  </div>
</template>
<script setup>
import router from "../router";
import { inject } from "@vue/runtime-core";

import _ from "lodash";

import Icon from "../components/Icon.vue";

const countries = inject("countries");

const countryName = router.currentRoute.value.params.countryName;
const currentCountryDetails = countries._rawValue.filter(
  (country) => country.name.common.toLowerCase() === countryName
);
const currentCountry = currentCountryDetails[0];
const borders = currentCountry?.borders;

const countryDetails = {
  nativeName: currentCountry?.altSpellings[1],
  population: currentCountry?.population,
  region: currentCountry?.region,
  subRegion: currentCountry?.subregion,
  capital: currentCountry?.capital?.[0],
  topLevelDomain: currentCountry?.tld?.[0],
  currencies: Object.keys(currentCountry?.currencies).join(", "),
  languages: Object.values(currentCountry?.languages).join(", "),
};

const returnHome = () => {
  router.push({ path: "/" });
};
</script>
