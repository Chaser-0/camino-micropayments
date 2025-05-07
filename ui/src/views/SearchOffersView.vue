<template>
  <MainLayout headline="Search offers">
    <RegularContainer>
      <p class="font-medium mb-2">We found these offers for your search:</p>

      <ul class="flex flex-col gap-4">
        <OfferListEntry v-for="offer, id in offerStore.offers" :offer="offer" :id="id"></OfferListEntry>
      </ul>
    </RegularContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import OfferListEntry from '@/components/OfferListEntry.vue'
import { useOfferStore } from '@/stores/offer.ts';
import RegularContainer from '@/components/containers/RegularContainer.vue';

const offerStore = useOfferStore();
</script>
