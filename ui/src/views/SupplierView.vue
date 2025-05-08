<template>
  <MainLayout headline="Supplier dashboard" inner-class="flex flex-col gap-4">
    <div class="flex justify-end gap-2">
      <SecondaryButton @click="checkSupplierBalance">
        <svg-icon type="mdi" :path="mdiRefresh"></svg-icon>
        <span>Check available funds</span>
      </SecondaryButton>
      <span class="border border-cyan-500 rounded-lg inline-flex items-center justify-center px-4 py-2 mr-2">Current balance: {{ supplierBalance }}</span>
      <SecondaryButton @click="withdrawSupplierBalance" class="mr-auto">
        <svg-icon type="mdi" :path="mdiRefresh"></svg-icon>
        <span>Withdraw funds</span>
      </SecondaryButton>

      <SecondaryButton @click="fetchBalance">
        <svg-icon type="mdi" :path="mdiRefresh"></svg-icon>
        <span>Refresh</span>
      </SecondaryButton>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <RegularContainer v-for="fund in fundsData" class="flex flex-col items-center">
        <span class="text-4xl mb-4">{{ fund.balance }} CAM</span>
        <code>{{ fund.address }}</code>
        <span v-if="fund.name" class="text-gray-300 text-sm">({{ fund.name }})</span>
      </RegularContainer>
      <RegularContainer class="flex flex-col gap-4 items-center">
        <span>Monitor wallet</span>
        <div class="w-full relative">
          <input
            type="text"
            v-model="addressInput"
            pattern="0x[0-9a-fA-F]{40}"
            class="peer col-start-1 row-start-1 block w-full rounded-md bg-gray-900 py-1.5 pr-10 pl-3 text-base invalid:text-red-300 outline-1 -outline-offset-1 invalid:outline-red-800 invalid:placeholder:text-red-700 focus:outline-2 focus:-outline-offset-2 invalid:focus:outline-red-400 sm:pr-9 sm:text-sm/6"
            @keypress.enter="onAddAddress"
            />
          <svg-icon type="mdi" :path="mdiAlertCircle" class="absolute right-0 top-2.5 peer-invalid:visible invisible pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"></svg-icon>
        </div>
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
import { mdiRefresh, mdiAlertCircle } from '@mdi/js';
import { formatEther } from 'ethers/utils';
import RegularContainer from '@/components/containers/RegularContainer.vue';
import { SupplierEscrowCaller } from '@/utils/contracts/SupplierEscrowCaller';
import { supplierDefinitions } from '@/utils/SupplierDefinition';

const addresses = ref<string[]>(supplierDefinitions.map(v => v.publicKey));
const fundsData = ref<{address: string, balance: string, name?: string}[]>([]);
const addressInput = ref('');
const supplierBalance = ref<number>(0);

const fetchBalance = async () => {
  const ret: {address: string, balance: string, name?: string}[] = [];

  for (let i = 0; i < addresses.value.length; i++) {
    try {
      const address = addresses.value[i];
      const provider = new BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      const convertedBalance = formatEther(balance);

      const tmp: (typeof ret)[n] = {address, balance: convertedBalance};
      const sup = supplierDefinitions.find(v => v.publicKey === address);
      if (sup)
        tmp.name = sup.name;

      ret.push(tmp);
    }
    catch (error) {
      console.error(error);
    }
  }

  fundsData.value = ret;
};

watch(addresses, fetchBalance, {deep: true});
onMounted(fetchBalance);

const onAddAddress = (e: KeyboardEvent) => {
  if ((<HTMLInputElement>e.target).checkValidity()) {
    addresses.value.push(addressInput.value);
    addressInput.value = '';
  }
}
const checkSupplierBalance = async () => {
	supplierBalance.value = await SupplierEscrowCaller.checkSupplierBalance();
}
const withdrawSupplierBalance = async () => {
	await SupplierEscrowCaller.supplierWithdraw();
	await checkSupplierBalance();
}
</script>
