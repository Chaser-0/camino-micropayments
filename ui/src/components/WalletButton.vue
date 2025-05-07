<template>
  <input
    v-if="!wallet.connected"
    type="button"
    value="Connect wallet"
    @click="wallet.connectWallet()"
    class="border border-purple-500 hover:border-purple-700 rounded-lg | text-gray-100 bg-gray-800 hover:bg-gray-700 | px-4 py-2 | transition-colors duration-500"
    >
  <span
    class="border border-purple-500 rounded-lg | text-gray-100 bg-gray-800 | px-4 py-2"
    v-else
    >Selected wallet: {{ wallet.selectedProvider }}
  </span>
</template>

<script lang="ts" setup>
import { useWalletStore } from '@/stores/wallet.ts';

const wallet = useWalletStore();
</script>
