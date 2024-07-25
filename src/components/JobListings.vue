<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { reactive, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

import JobListing from '@/components/JobListing.vue'

defineProps({
    limit: {
        type: Number
    },
    showButton: {
        type: Boolean,
        default: false,
    },
})

/**
 * - reactive() :: Unicamente recibe objetos
 * - ref() :: Puede recibir objetos o primitivos
 * ** ref() tiene una propiedad value para reasignar su valor, reactive() no usa dicha propiedad y su valor no se puede reasignar.
 */
const state = reactive({
    jobs: [],
    isLoading: true,
})

onMounted(async () => {
    try {
        const response = await axios.get('/api/jobs')
        state.jobs = response.data
    } catch (error) {
        console.error(`Error fetching jobs: ${error.message}`)
    } finally {
        state.isLoading = false
    }
})
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div v-if="state.isLoading" class="text-center test-gray-500 py-6">
                <PulseLoader />
            </div>
            <div class="grid grid-cols-3 gap-6">
                <JobListing
                    v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
                    :key="job.id"
                    :job="job"
                />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink
            to="/jobs"
            class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >View All Jobs
        </RouterLink>
    </section>
</template>
