<template>
  <SecondaryButton
    v-if="!wallet.connected"
    @click="wallet.connectWallet()"
    >
    <svg-icon type="mdi" :path="mdiWalletPlusOutline"></svg-icon>
    <span>Connect wallet</span>
  </SecondaryButton>
  <span
    v-else
    class="border border-teal-500 rounded-lg | text-gray-100 bg-gray-800 | px-4 py-2 | inline-flex gap-2"
    >
    <svg-icon type="mdi" :path="mdiWalletOutline"></svg-icon>
    <span>Selected wallet: {{ wallet.selectedProvider }}</span>
  </span>
</template>

<script lang="ts" setup>
import { useWalletStore } from '@/stores/wallet.ts';
import SecondaryButton from './SecondaryButton.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiWalletPlusOutline, mdiWalletOutline } from '@mdi/js';

const wallet = useWalletStore();
</script>
