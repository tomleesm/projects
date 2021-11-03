import routes from './routes.js'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
