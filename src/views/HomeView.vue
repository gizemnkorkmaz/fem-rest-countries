<script setup>
import { inject } from 'vue'
import CountryBoard from '../components/CountryBoard.vue'

const countries = inject('countries')
</script>

<template>
    <CountryBoard :countries="countries" />
</template>
