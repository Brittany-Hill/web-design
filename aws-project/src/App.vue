<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/views/NavBarView.vue'
import FooterView from '@/views/FooterView.vue'
</script>

<template>
  <nav-bar/>
  <RouterView/>
  <footerView/>
</template>

<style scoped>
</style>
