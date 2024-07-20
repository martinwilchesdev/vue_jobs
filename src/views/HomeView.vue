<script setup>
import JobListings from '@/components/JobListings.vue'
import HomeCards from '@/components/HomeCards.vue'
import Hero from '@/components/Hero.vue'
</script>

<template>
    <!-- App Header -->
    <Hero />

    <!-- App Body -->
    <HomeCards />
    <JobListings :showButton="true" />
</template>
