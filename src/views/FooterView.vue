<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="footer-view">
    <Footer/>
  </div>
</template>

<style scoped>
.footer-view {
  padding-top: 60px; 
  background-color: black;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  margin: 0; /* Remove any default margin */
  width: 100vw; /* Ensure the view takes the full width of the viewport */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}
</style>
