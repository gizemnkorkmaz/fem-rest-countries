<script setup>
import Icon from './Icon.vue'

defineProps(['modelValue'])
defineEmits(['update:modelValue', 'clearSearch'])
</script>

<template>
    <div class="relative mx-10">
        <Icon name="search" :size="20" class="absolute bottom-[60px] left-6 text-gray" />
        <input
            type="text"
            :class="[
                'outline-inherit mx-4 my-12 w-[300px] rounded-sm py-3 pl-10 text-sm',
                'shadow-md dark:bg-darker-blue dark:text-white dark:outline-dark-gray sm:w-[350px]',
            ]"
            placeholder="Search for a country..."
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <Icon
            name="clear"
            :size="18"
            class="absolute bottom-[60px] right-6 cursor-pointer text-white"
            @click="$emit('clearSearch')"
        />
    </div>
</template>
