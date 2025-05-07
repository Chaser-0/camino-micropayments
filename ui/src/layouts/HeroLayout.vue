<template>
  <header>
    <div class="wrapper">
      <nav class="flex items-center gap-2 text-gray-300 p-2">
        <!-- <RouterLink :to="{name: 'searchOffers'}" class="hover:text-purple-500 transition-colors duration-300">Search offers</RouterLink> -->
        <wallet-button class="ml-auto"></wallet-button>
      </nav>
    </div>
  </header>

  <div class="flex flex-col gap-2">
    <h1 class="text-xl">{{ headline }}</h1>
    <main class="container mx-auto bg-gray-950 rounded-2xl overflow-hidden">
      <div class=" relative w-full">
        <img :src="src" class="w-full h-48 object-cover">
        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to transparent"></div>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import WalletButton from '@/components/WalletButton.vue';

defineProps<{
  headline: string;
  src: string;
}>();
</script>
