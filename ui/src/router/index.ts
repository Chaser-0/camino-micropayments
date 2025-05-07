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
  ],
})

export default router
