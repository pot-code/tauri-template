<script setup lang="ts">
import { lightTheme, dateZhCN, zhCN, GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {}
</script>

<template>
  <n-config-provider :theme="lightTheme" :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>
