<script setup>
import JobListings from '@/components/JobListings.vue'
import HomeCards from '@/components/HomeCards.vue'
import Hero from '@/components/Hero.vue'
</script>

<template>
    <Hero />
    <HomeCards />
    <JobListings :showButton="true" limit="3" />
</template>
