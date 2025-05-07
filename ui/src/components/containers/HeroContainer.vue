<template>
  <div class="bg-gray-950 rounded-2xl overflow-hidden">
      <div class=" relative w-full">
        <img :src="src" class="w-full h-48 object-cover">
        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to transparent"></div>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  src: string;
}>();
</script>