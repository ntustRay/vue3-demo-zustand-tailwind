<template>
  <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Todo List</h2>

    <div class="flex mb-4">
      <!-- v-model binds the input to the newTask data property -->
      <!-- @keyup.enter calls the addTask method when the Enter key is pressed -->
      <input v-model="newTask" @keyup.enter="addTask" type="text" placeholder="Add a new task..."
        class="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      <button @click="addTask"
        class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Add Task
      </button>
    </div>

    <ul>
      <!-- v-for loops through the tasks array and renders a list item for each task -->
      <li v-for="task in tasks" :key="task.id" class="flex items-center mb-2">
        <input type="checkbox" :checked="task.completed" @change="toggleTask(task)" class="mr-2">
        <span :class="{'line-through text-gray-500': task.completed}" class="flex-grow">
          {{ task.text }}
        </span>
        <button @click="deleteTask(task)" class="text-red-500 hover:text-red-700 focus:outline-none">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default defineComponent({
  name: 'TodoList',
  data() {
    return {
      tasks: [] as Task[],
      newTask: '',
      nextId: 1
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          id: this.nextId++,
          text: this.newTask.trim(),
          completed: false
        })
        this.newTask = ''
      }
    },
    toggleTask(task: Task) {
      task.completed = !task.completed
    },
    deleteTask(taskToDelete: Task) {
      this.tasks = this.tasks.filter((task: {id: number}) => task.id !== taskToDelete.id)
    }
  }
})
</script>
