import Articles from './components/Articles.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/articles/:title',
    component: Articles,
    name: 'articles',
    props: true
  },
  {
    path: '/',
    redirect: '/articles/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
