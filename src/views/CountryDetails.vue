<template>
  <div class="pt-10 dark:bg-[#202C37] dark:text-white">
    <button
      @click="returnHome"
      class="mx-16 mt-[100px] flex w-[120px] justify-center rounded bg-white p-3 shadow hover:opacity-80 dark:bg-[#2B3945] dark:text-white"
    >
      <Icon name="arrow" :size="20" class="mt-[2px]" /><span class="pl-2"
        >Back</span
      >
    </button>
  </div>
  <div
    class="flex max-h-full flex-wrap justify-evenly p-5 dark:bg-[#202C37] dark:text-white"
  >
    <img
      :src="currentCountryDetails[0].flags.png"
      alt=""
      class="max-h-80 w-[200px] rounded p-5 sm:w-[500px]"
    />
    <div>
      <h2 class="pb-5 text-center text-3xl font-bold">
        {{ _.capitalize(countryName) }}
      </h2>
      <p
        v-for="(detail, key) in countryDetails"
        :key="key"
        class="pt-2 text-center font-semibold"
      >
        <span class="font-bold" v-if="detail"
          >{{ _.capitalize(key.replace(/([A-Z])/g, " $1").trim()) }}:
        </span>
        <span class="font-normal">{{ detail }}</span>
      </p>
      <p v-if="borders" class="pt-5">
        <span class="pt-2 font-semibold">Border Countries:</span>
        <span
          v-for="(border, key) in borders"
          :key="key"
          class="m-1 bg-white p-2 text-xs shadow dark:bg-[#2B3945] dark:text-white"
        >
          {{ border }}
        </span>
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
  population: currentCountry?.population.toLocaleString(),
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
