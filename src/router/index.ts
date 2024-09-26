import { createRouter, createWebHistory } from 'vue-router'
import WeatherWidget from '@/views/WeatherWidget.vue'
import TodoList from '@/views/TodoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: WeatherWidget
    },
    {
      path: '/todo',
      name: 'Todo',
      component: TodoList
    }
  ]
})

export default router
