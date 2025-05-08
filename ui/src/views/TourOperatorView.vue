<template>
  <MainLayout headline="Tour operator dashboard">
    <div class="bg-gray-900">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
            <p class="text-sm/6 font-medium text-gray-400">{{ stat.name }}</p>
            <p class="mt-2 flex items-baseline gap-x-2">
              <span class="text-4xl font-semibold tracking-tight text-white">{{ stat.value }}</span>
              <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-900">
      <div class="mx-auto max-w-7xl">
        <div class="bg-gray-900 py-10">
          <div class="px-4 sm:px-6 lg:px-8">
            <div class="mt-8 flow-root">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table class="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">Address</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Amount (Demo only)</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Available payout</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-800">
                      <tr v-for="recipient, i in wallet.receivers" :key="recipient.address">
                        <td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">{{ recipient.address }}</td>
                        <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-300">{{ recipient.withdrawAmount }}/{{ recipient.amount }} CAM</td>
                        <td v-if="withdrawEdit.length >= i+1" class=" inline-flex flex-nowrap gap-2 px-3 py-4 text-sm whitespace-nowrap text-gray-300">
                          <input type="number" v-model="withdrawEdit[i]" :min="recipient.withdrawAmount" :max="recipient.amount" step=".00001">
                          <button class="cursor-pointer" @click="onWithdrawUpdate(i)">
                            <svg-icon v-if="withdrawEdit[i] !== recipient.withdrawAmount" class="text-green-500 hover:text-teal-300 transition-colors duration-100" type="mdi" :path="mdiCheck"></svg-icon>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useWalletStore } from '@/stores/wallet';
import { computed, onMounted, ref, watch } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCheck } from '@mdi/js';


const wallet = useWalletStore();
const stats = computed(() => {
  const ret: {name: string, value: number, unit?: string}[] = [
    {name: 'Funds', unit: 'CAM', value: wallet.funds},
    {name: 'Recipients', value: wallet.receivers.length}
  ];

  return ret;
});

const withdrawEdit = ref<number[]>([]);
const refreshEditWithdraws = (v: typeof wallet.receivers) => {
  const ret: number[] = [];

  for (let i = 0; i < v.length; i++) {
    const r = v[i];
    ret.push(r.withdrawAmount);
  }

  withdrawEdit.value = ret;
}

watch(wallet.receivers, refreshEditWithdraws);
onMounted(() => {
  refreshEditWithdraws(wallet.receivers);
});

const onWithdrawUpdate = (index: number) => {
  const address = wallet.receivers[index].address;
  const newWithdraw = withdrawEdit.value[index];
  wallet.updateWithdrawAmount(address, newWithdraw);
}
</script>
