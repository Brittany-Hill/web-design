<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
import FooterView from './views/FooterView.vue';
</script>

<template>
  <div class="app-container">
    <NavBar/>
    <div class="main-content">
      <RouterView/>
    </div>
    <FooterView/>
  </div>
</template>

<style scoped>
.app-container {
  background-color: black;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  
}
NavBar, FooterView {
  flex-shrink: 0;
}
.main-content {
  padding-top: 15px;
  flex-grow: 1; /* Ensure main content takes up remaining space */
  background-color: black;
  
}
</style>

