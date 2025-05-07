<template>
  <header>
    <div class="wrapper">
      <nav class="flex items-center gap-2 text-gray-300 p-2">
        <RouterLink :to="{name: 'searchOffers'}" class="hover:text-purple-500 transition-colors duration-300">Search offers</RouterLink>
        <wallet-button class="ml-auto"></wallet-button>
      </nav>
    </div>
  </header>

  <div class="flex flex-col gap-2">
    <h1 class="text-xl">{{ headline }}</h1>
    <main class="container mx-auto bg-gray-950 rounded-2xl p-4">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup>
import WalletButton from '@/components/WalletButton.vue';

defineProps<{
  headline: string;
}>();
</script>
