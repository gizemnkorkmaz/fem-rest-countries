<template>
  <div class="mx-10 relative">
    <Icon
      name="search"
      :size="20"
      class="absolute bottom-[60px] left-6 text-slate-400"
    />
    <input
      type="text"
      class="mx-4 my-12 py-3 pl-10 shadow-md rounded-sm text-sm sm:w-[350px] w-[320px]"
      placeholder="Search for a country..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <Icon
      name="clear"
      :size="18"
      class="absolute bottom-[60px] right-6 text-slate-400 cursor-pointer"
      @click="$emit('clearSearch')"
    />
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue", "clearSearch"]);
</script>
