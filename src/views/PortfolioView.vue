<script setup lang="ts">
import portfolio from '@/components/portfolioHome.vue';
</script>

<template>
  <div class="portfolio-view">
    <portfolio></portfolio>
  </div>
</template>

<style scoped>
.portfolio-view {
  padding-top: 60px; /* Adjust this value based on the height of your navbar */
  background-color: #f5f5f5;
  min-height: 100vh; /* Ensure the view takes up the full height of the screen */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  margin: 0; /* Remove any default margin */
  width: 100vw; /* Ensure the view takes the full width of the viewport */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}
</style>
