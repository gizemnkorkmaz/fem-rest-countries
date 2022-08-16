<template>
  <div class="mx-10 relative">
    <Icon
      name="search"
      :size="14"
      class="absolute bottom-16 left-6 text-slate-400"
    />
    <input
      type="text"
      class="mx-4 my-12 py-3 pl-8 shadow-md rounded-sm text-sm w-72"
      placeholder="Search for a country..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <Icon
      name="clear"
      :size="14"
      class="absolute bottom-16 right-6 text-slate-400"
      @click="$emit('clearSearch')"
    />
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";

defineProps(["modelValue"]);
defineEmits(["update:modelValue", "clearSearch"]);
</script>
