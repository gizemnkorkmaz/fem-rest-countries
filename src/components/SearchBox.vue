<template>
  <div class="relative mx-10">
    <Icon
      name="search"
      :size="20"
      class="absolute bottom-[60px] left-6 text-slate-400"
    />
    <input
      type="text"
      class="mx-4 my-12 w-[320px] rounded-sm py-3 pl-10 text-sm shadow-md outline-inherit dark:bg-[#202C37] dark:text-white sm:w-[350px]"
      placeholder="Search for a country..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <Icon
      name="clear"
      :size="18"
      class="absolute bottom-[60px] right-6 cursor-pointer text-slate-400"
      @click="$emit('clearSearch')"
    />
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue", "clearSearch"]);
</script>
