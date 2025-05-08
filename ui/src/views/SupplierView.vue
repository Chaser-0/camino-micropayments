<template>
  <MainLayout headline="Supplier dashboard">
    <div class="flex justify-end">
      <SecondaryButton @click="fetchBalance">
        <svg-icon type="mdi" :path="mdiRefresh"></svg-icon>
        <span>Refresh</span>
      </SecondaryButton>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <RegularContainer v-for="fund in fundsData" class="flex flex-col gap-4 items-center">
        <span class="text-4xl">{{ fund.balance }} CAM</span>
        <code>{{ fund.address }}</code>
      </RegularContainer>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import SecondaryButton from '@/components/SecondaryButton.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { BrowserProvider } from 'ethers/providers';
import { onMounted, ref, watch } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiRefresh } from '@mdi/js';
import { formatEther } from 'ethers/utils';
import RegularContainer from '@/components/containers/RegularContainer.vue';

const addresses = ref<string[]>([
  '0xcf4c43CeC323966833Ea85DaF0020479F84f620E'
]);
const fundsData =ref<{address: string, balance: string}[]>([]);

const fetchBalance = async () => {
  const ret: {address: string, balance: string}[] = [];

  for (let i = 0; i < addresses.value.length; i++) {
    try {
      const address = addresses.value[i];
      const provider = new BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      const convertedBalance = formatEther(balance);
      ret.push({address, balance: convertedBalance});
    }
    catch (error) {
      console.error(error);
    }
  }

  fundsData.value = ret;
};

watch(addresses, fetchBalance);
onMounted(fetchBalance);
</script>
