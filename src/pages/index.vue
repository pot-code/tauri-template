<script setup lang="ts">
import CenterContentLayout from '@/layouts/CenterContentLayout.vue'
import { ArrowForwardSharp } from '@vicons/ionicons5'
</script>

<template>
  <center-content-layout>
    <div class="flex flex-col gap-4 items-center">
      <n-gradient-text :size="24" type="error">Tauri Starter Kit</n-gradient-text>
      <n-gradient-text :size="18" type="primary">Vue ❤️ Native UI</n-gradient-text>
      <div class="flex gap-4">
        <n-button type="info" icon-placement="right" @click="() => $router.push('/about')">
          开始
          <template #icon>
            <ArrowForwardSharp />
          </template>
        </n-button>
      </div>
    </div>
  </center-content-layout>
</template>
