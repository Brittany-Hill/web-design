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
  min-height: 100vh;
}
.main-content {
  flex: 1;
  background-color: black;
}

</style>

