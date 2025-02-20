<script setup lang="ts">
import CenterContentLayout from '@/layouts/CenterContentLayout.vue'
</script>

<template>
  <center-content-layout>
    <div class="flex flex-col gap-4 items-center">
      <n-gradient-text :size="18" type="info">About Page</n-gradient-text>
      <n-button type="info" @click="() => $router.push('/')">Go back</n-button>
    </div>
  </center-content-layout>
</template>
