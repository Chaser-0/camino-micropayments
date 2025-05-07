<template>
  <header>
    <div class="wrapper">
      <nav class="flex items-center gap-2 text-gray-300 p-2">
        <!-- <RouterLink :to="{name: 'searchOffers'}" class="hover:text-purple-500 transition-colors duration-300">Search offers</RouterLink> -->
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

defineProps<{
  headline: string;
  innerClass?: string;
}>();

const wallet = useWalletStore();
const contractBalance = ref("");
const testMyContractGetBalance = async () => {
	const balance = await wallet.testMyContractGetBalance();
	contractBalance.value = balance.toString();
};

</script>
