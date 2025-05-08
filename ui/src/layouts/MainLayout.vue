<template>
  <header>
    <div class="wrapper">
      <nav class="flex items-center gap-4 text-gray-300 p-2">
        <RouterLink
          v-for="label, name in menuEntries"
          :to="{name}"
          :class="`hover:text-cyan-500 border-b-2 ${route.name === name ? 'border-b-cyan-700' : 'border-b-cyan-950/80'} hover:border-b-cyan-500 transition-colors duration-300`"
          >
          {{ label }}
        </RouterLink>

        <wallet-button class="ml-auto"></wallet-button>
      </nav>
    </div>
  </header>
	
  <div class="flex flex-col gap-2">
		<h1 class="text-xl">{{ headline }}</h1>
    <main :class="`container mx-auto ${innerClass ?? ''}`">
      <slot></slot>
    </main>
  </div>
</template>


<script lang="ts" setup>
import WalletButton from '@/components/WalletButton.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

defineProps<{
  headline: string;
  innerClass?: string;
}>();

const menuEntries = ref<Record<string, string>>({
  searchOffers: 'Search Offers',
  tourOperatorDashboard: 'Tour operator dashboard (demo)',
	dev: 'Dev tools',
});

const route = useRoute();
</script>
