<template>
  <nav class="bg-gray-200 p-4">
    <ul>
      <li class="mb-2">
        <RouterLink to="/" class="text-blue-500 hover:text-blue-700">Weather Widget</RouterLink>
      </li>
      <li>
        <RouterLink to="/todo" class="text-blue-500 hover:text-blue-700">Todo List</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {RouterLink} from 'vue-router'

export default defineComponent({
  name: 'Navbar',
  components: {
    RouterLink
  }
})
</script>