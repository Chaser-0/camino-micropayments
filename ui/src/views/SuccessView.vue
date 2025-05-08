<template>
  <MainLayout headline="Success!">
    <RegularContainer class="flex flex-col gap-2 text-center">
      <h2 class="font-bold text-xl">Your purchase was successful!</h2>
      <p>Thanks for using our travel agency.</p>

      <PrimaryButton class="mb-4 mx-auto" @click="router.push({name: 'searchOffers'})">Back to search page</PrimaryButton>
    </RegularContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import RegularContainer from '@/components/containers/RegularContainer.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>