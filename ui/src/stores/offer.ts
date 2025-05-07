import { ref } from 'vue'
import { defineStore } from 'pinia'
import { exampleData } from '@/dummyOffers.ts';

export const useOfferStore = defineStore('offer', () => {
  const offers = ref(exampleData)

  return { offers }
})
