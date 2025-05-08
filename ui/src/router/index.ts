import { createRouter, createWebHistory } from 'vue-router'
import SearchOffersView from '../views/SearchOffersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'searchOffers',
      component: SearchOffersView,
    },
    {
      path: '/offer/:id',
      name: 'offerDetails',
      component: () => import('../views/OfferDetailsView.vue'),
    },
    {
      path: '/dev',
      name: 'dev',
      component: () => import('../views/DevView.vue'),
    },
    {
      path: '/tour-operator-dashboard',
      name: 'tourOperatorDashboard',
      component: () => import('../views/TourOperatorView.vue'),
    },
  ],
})

export default router
