<template>
  <MainLayout v-if="!offer" headline="Error">
    <RegularContainer>
      <div class="text-red-500">Invalid offer id!</div>
    </RegularContainer>
  </MainLayout>

  <MainLayout v-else :headline="offer.name" inner-class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <HeroContainer class="col-span-2"  :src="offer.heroImage">
      <p class="mb-4">{{ offer.description }}</p>

      <p>Additional Offers:</p>
      <ul>
        <li v-for="addon, i in offer.addons" @click="toggleAddon(i)" class="cursor-pointer">{{ addon.name }}</li>
      </ul>
    </HeroContainer>

    <RegularContainer class="flex flex-col">
      <ul role="list" class="mt-6 divide-y divide-gray-800 text-sm font-medium text-gray-500">
        <BillListEntry :name="offer.name" :price="offer.price"></BillListEntry>
        <BillListEntry v-for="addon in billAddons" :name="addon.name" :price="addon.price"></BillListEntry>
      </ul>

      <dl class="space-y-6 border-t border-gray-800 pt-6 text-sm font-medium text-gray-400">
        <div class="flex items-center justify-between text-gray-100">
          <dt class="text-base">Total</dt>
          <dd class="text-base">{{ total }} CAM</dd>
        </div>
      </dl>

      <PrimaryButton class="ml-auto mt-6">Checkout</PrimaryButton>
    </RegularContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { useOfferStore } from '@/stores/offer.ts';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { TTravelOffer } from '@/dummyOffers';
import RegularContainer from '@/components/containers/RegularContainer.vue';
import HeroContainer from '@/components/containers/HeroContainer.vue';
import BillListEntry from '@/components/BillListEntry.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

const route = useRoute();

const offerStore = useOfferStore();
const offer = ref<TTravelOffer | null>(null);

const selectedAddons = ref<number[]>([]);

onMounted(() => {
  if (route.params.id && typeof route.params.id === 'string')
    offer.value = offerStore.offers[route.params.id];
});

const toggleAddon = (index: number) => {
  if (!selectedAddons.value.includes(index))
    return selectedAddons.value.push(index);

  selectedAddons.value.splice(selectedAddons.value.indexOf(index), 1);
}

const billAddons = computed(() => {
  if (!offer.value)
    return [];

  return offer.value.addons
    .filter((v, i) => selectedAddons.value.includes(i))
    .map(v => {
      return {
        name: v.name,
        price: v.price + (v.price * v.supplierPercent)
      }
    });
});

const total = computed(() => {
  if (!offer.value)
    return 0;
  
  let price = offer.value.price;
  for (let i = 0; i < billAddons.value.length; i++)
    price += billAddons.value[i].price
    
  return price;
});
</script>
