<template>
  <li class="group relative w-full h-64 rounded-md">
    <div ref="antroposEl" class="atropos w-full h-full">
      <div class="atropos-scale">
        <div class="atropos-rotate">
          <div class="atropos-inner">
            <img data-atropos-offset="0" :src="offer.heroImage" class="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-125 transition-[filter] duration-500 rounded-md">
            <div data-atropos-offset="0" class="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/80 to-transparent"></div>

            <RouterLink
              data-atropos-offset="1"
              class="absolute top-0 left-0 w-full h-full p-2 | flex flex-col gap-2 justify-end"
              :to="{name: 'offerDetails', params: {id: id}}"
              >
              <span class="text-white text-3xl font-medium">{{ offer.name }}</span>
              <span class="text-gray-300">{{ offer.shortDescription }}</span>
              <span class="text-gray-200">Starting from <span class="font-bold">{{ offer.price }} CAM</span></span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { TTravelOffer } from '@/dummyOffers.ts';
import Atropos from 'atropos';
import { onMounted, ref } from 'vue';

defineProps<{
  offer: TTravelOffer;
  id: string;
}>();

const antroposEl = ref<HTMLElement>();

onMounted(() => {
  const myAtropos = Atropos({
    el: antroposEl.value,
    rotateXMax: 5,
    rotateYMax: 5,
    activeOffset: 20
  });
});
</script>
