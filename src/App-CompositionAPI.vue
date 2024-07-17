<script setup>
import { onMounted, ref } from 'vue'

const newTask = ref('')
const status = ref(true)
const name = ref('John Doe')
const tasks = ref(['Task1', 'Task2', 'Task3'])

const toggleStatus = () => {
    status.value = !status.value
}

const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value)
        newTask.value = ''
    }
}

const deleteTask = (id) => {
    tasks.value.splice(id, 1)
}

onMounted(async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        tasks.value = data.map(task => task.title)
    } catch (error) {
        console.log(error.message)
    }
})
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status">User is active</p>
    <p v-else>User is inactive</p>

    <form @submit.prevent="addTask">
        <label for="newTask">Add Task</label>
        <input type="text" id="newTask" name="newTask" v-model="newTask" />
        <button type="submit">Add Task</button>
    </form>

    <h3>Tasks:</h3>
    <ul>
        <li v-for="(task, index) in tasks" :key="task">
            <span>{{ task }}</span>
            <button @click="deleteTask(index)">X</button>
        </li>
    </ul>

    <button @click="toggleStatus">Change Status</button>
</template>

<style scoped>
h1 {
    color: lightcoral;
}
</style>
