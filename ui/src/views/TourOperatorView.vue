<template>
  <MainLayout headline="Tour operator dashboard">
    <!-- <div class="bg-gray-900">
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
    </div> -->

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
                        <th scope="col" class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">Name</th>
                        <th scope="col" class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-0">Address</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">Available payout</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-800">
                      <tr v-for="supplier, i in supplierDefinitions" :key="supplier.publicKey">
                        <td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">{{ supplier.name }}</td>
                        <td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-white sm:pl-0">{{ supplier.publicKey }}</td>
                        <td v-if="withdrawEdit.length >= i+1" class=" inline-flex flex-nowrap gap-2 px-3 py-4 text-sm whitespace-nowrap text-gray-300">
                          <input type="number" v-model="withdrawEdit[i]" step=".00001">
                          <button class="cursor-pointer" @click="onWithdrawUpdate(i)">
                            <svg-icon v-if="withdrawEdit[i] !== 0" class="text-green-500 hover:text-teal-300 transition-colors duration-100" type="mdi" :path="mdiCheck"></svg-icon>
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
import { computed, onMounted, ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCheck } from '@mdi/js';
import { supplierDefinitions } from '@/utils/SupplierDefinition';
import { SupplierEscrowCaller } from '@/utils/contracts/SupplierEscrowCaller';

const stats = computed(() => {
  const ret: {name: string, value: number, unit?: string}[] = [
    {name: 'Funds', unit: 'CAM', value: 0},//TODO
    {name: 'Recipients', value: supplierDefinitions.length}
  ];

  return ret;
});

const withdrawEdit = ref<number[]>([]);

const onWithdrawUpdate = (index: number) => {
  SupplierEscrowCaller.addAllowedAmount(supplierDefinitions[index].publicKey, withdrawEdit.value[index]);
}

onMounted(() => {
  setEditArrayLength();
});

const setEditArrayLength = () => {
  if (withdrawEdit.value.length > supplierDefinitions.length)
    withdrawEdit.value.length = supplierDefinitions.length;

  for (let i = withdrawEdit.value.length; i < supplierDefinitions.length; i++)
    withdrawEdit.value.push(0);
}
</script>
