<template>
  <header>
    <div class="wrapper">
      <nav class="flex items-center gap-2 text-gray-300 p-2">
        <RouterLink
          v-for="label, name in menuEntries"
          :to="{name}"
          :class="`hover:text-cyan-500 border-b-2 ${route.name === name ? 'border-b-cyan-700' : 'border-b-transparent'} hover:border-b-cyan-500 transition-colors duration-300`"
          >
          {{ label }}
        </RouterLink>

        <wallet-button class="ml-auto"></wallet-button>
				<primary-button class="" @click="testMyContractGetBalance">Get Contract Balance</primary-button>
				<primary-button class="" @click="wallet.testMyContractAddFunds(1)">Add funds to Contract</primary-button>
      </nav>
    </div>
  </header>
	
  <div class="flex flex-col gap-2">
		<h1 class="text-xl">{{ headline }}</h1>
		<span class="text-gray-100">Balance: {{ contractBalance }}</span>
    <main :class="`container mx-auto ${innerClass ?? ''}`">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup>
import WalletButton from '@/components/WalletButton.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { useWalletStore } from '@/stores/wallet';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

defineProps<{
  headline: string;
  innerClass?: string;
}>();

const menuEntries = ref<Record<string, string>>({
  searchOffers: 'Search Offers'
});

const route = useRoute();
const wallet = useWalletStore();
const contractBalance = ref("");
const testMyContractGetBalance = async () => {
	const balance = await wallet.testMyContractGetBalance();
	contractBalance.value = balance.toString();
};

</script>
