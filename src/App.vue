<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex flex-1">
      <Navbar class="w-64" />
      <main class="flex-1 p-4">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Navbar,
    RouterView
  }
})
</script>