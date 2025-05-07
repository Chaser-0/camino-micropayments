<template>
  <MainLayout v-if="!offer" headline="Error">
    <div class="text-red-500">Invalid offer id!</div>
  </MainLayout>

  <HeroLayout v-else :headline="offer.name" :src="offer.heroImage">
    <p class="mb-4">{{ offer.description }}</p>

    <p>Additional Offers:</p>
    <ul>
      <li v-for="addon in offer.addons">{{ addon.name }}</li>
    </ul>
  </HeroLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { useOfferStore } from '@/stores/offer.ts';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { TTravelOffer } from '@/dummyOffers';
import HeroLayout from '@/layouts/HeroLayout.vue';

const route = useRoute();

const offerStore = useOfferStore();
const offer = ref<TTravelOffer | null>(null);

onMounted(() => {
  if (route.params.id && typeof route.params.id === 'string')
    offer.value = offerStore.offers[route.params.id]
});
</script>
