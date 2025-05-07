<template>
  <li class="flex space-x-6 py-6">
    <div class="flex-auto space-y-1">
      <h3 class="text-gray-100">{{ name }}</h3>
    </div>
    <p class="flex-none font-medium text-gray-100">{{ price }} CAM</p>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  name: string,
  price: number
}>();
</script>