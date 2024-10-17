import Dashboard from '@/views/DashboardView.vue'
import Predictions from '@/views/PredictionsView.vue'
import UpcomingGames from '@/views/UpcomingGamesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: '/upcoming-games',
      name: 'upcomingGames',
      component: UpcomingGames
    },
    {
      path: '/predictions',
      name: 'predictions',
      component: Predictions
    }
  ]
})

export default router
