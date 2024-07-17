<script>
export default {
    data() {
        return {
            name: 'John Doe',
            status: false,
            tasks: ['Task 1', 'Task 2', 'Task 3'],
            link: 'https://google.com',
        }
    },
    methods: {
        toggleStatus() {
            if (this.status === false) {
                this.status = true
            } else {
                this.status = false
            }
        },
    },
}
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status">User is active</p>
    <p v-else>User is inactive</p>

    <h3>Tasks:</h3>
    <ul>
        <li v-for="task in tasks" :key="task">
            {{ task }}
        </li>
    </ul>

    <!-- <a v-bind:href="link">Google</a> -->
    <a :href="link">Google</a>

    <!-- <button v-on:click="toggleStatus">Change Status</button> -->
    <button @click="toggleStatus">Change Status</button>
</template>

<style scoped>
h1 {
    color: lightcoral;
}
</style>
