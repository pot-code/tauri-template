<script setup lang="ts">
import { lightTheme, GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {}
</script>

<template>
  <n-config-provider :theme="lightTheme" :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>
