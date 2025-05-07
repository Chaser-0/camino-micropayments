<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{name: 'searchOffers'}">Search offers</RouterLink>
      </nav>
    </div>
  </header>

  <div class="flex flex-col gap-2">
    <h1>{{ headline }}</h1>
    <main class="container mx-auto bg-gray-950 rounded-2xl">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  headline: string;
}>();
</script>
