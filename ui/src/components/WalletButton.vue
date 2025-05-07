<template>
  <PrimaryButton
    v-if="!wallet.connected"
    @click="wallet.connectWallet()"
    >
    Connect wallet
  </PrimaryButton>
  <span
    class="border border-purple-500 rounded-lg | text-gray-100 bg-gray-800 | px-4 py-2"
    v-else
    >Selected wallet: {{ wallet.selectedProvider }}
  </span>
</template>

<script lang="ts" setup>
import { useWalletStore } from '@/stores/wallet.ts';
import PrimaryButton from './PrimaryButton.vue';

const wallet = useWalletStore();
</script>
