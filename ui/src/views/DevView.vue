<template>
  <MainLayout headline="Developer area">
    <RegularContainer class="flex flex-col gap-2">
      <div class="flex flex-wrap justify-start gap-2">
        <primary-button class="" @click="testMyContractGetBalance">Get Contract Balance</primary-button>
				<primary-button class="" @click="wallet.testMyContractAddFunds(1)">Add funds to Contract</primary-button>
      </div>

		  <span class="text-gray-100">Balance: {{ contractBalance }}</span>
    </RegularContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import RegularContainer from '@/components/containers/RegularContainer.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import { useWalletStore } from '@/stores/wallet';
import { ref } from 'vue';

const wallet = useWalletStore();
const contractBalance = ref('?');
const testMyContractGetBalance = async () => {
	const balance = await wallet.testMyContractGetBalance();
	contractBalance.value = balance.toString();
};
</script>
