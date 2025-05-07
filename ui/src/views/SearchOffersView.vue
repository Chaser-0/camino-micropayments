<template>
  <MainLayout headline="Search offers">
    <p class="font-medium mb-2">We found these offers for your search:</p>

    <ul class="flex flex-col gap-4">
      <OfferListEntry v-for="offer in offerStore.offers" :offer="offer"></OfferListEntry>
  </ul>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import OfferListEntry from '@/components/OfferListEntry.vue'
import { useOfferStore } from '@/stores/offer.ts';

const offerStore = useOfferStore();
</script>
