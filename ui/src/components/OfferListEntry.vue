<template>
  <li class="relative w-full h-64 class cursor-pointer">
    <img :src="offer.heroImage" class="absolute top-0 left-0 w-full h-full object-cover">
    <div class="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/80 to-transparent"></div>

    <RouterLink
      class="absolute top-0 left-0 w-full h-full | flex flex-col gap-2 justify-end"
      :to="{name: 'offerDetails', params: {id: id}}"
      >
      <span class="text-white text-3xl font-medium">{{ offer.name }}</span>
      <span class="text-gray-200">Starting from {{ offer.price }} CAM</span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import type { TTravelOffer } from '@/dummyOffers.ts';

defineProps<{
  offer: TTravelOffer;
  id: string;
}>();
</script>
