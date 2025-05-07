<template>
  <li class="relative w-full h-64 rounded-md overflow-hidden">
    <img :src="offer.heroImage" class="absolute top-0 left-0 w-full h-full object-cover">
    <div class="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/80 to-transparent"></div>

    <RouterLink
      class="absolute top-0 left-0 w-full h-full p-2 | flex flex-col gap-2 justify-end"
      :to="{name: 'offerDetails', params: {id: id}}"
      >
      <span class="text-white text-3xl font-medium">{{ offer.name }}</span>
      <span class="text-gray-300">{{ offer.shortDescription }}</span>
      <span class="text-gray-200">Starting from <span class="font-bold">{{ offer.price }} CAM</span></span>
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
