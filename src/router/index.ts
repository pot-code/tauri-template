import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/index.vue'
import AboutView from '@/pages/about.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})
