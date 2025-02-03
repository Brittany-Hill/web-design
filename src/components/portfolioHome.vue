<script setup lang="ts">
import ProjectCard from './portfolioItems.vue';

const projects = [
  {
    title: "Portfolio Website",
    description: "A Vue 3 & TypeScript-based portfolio.",
    link: "https://your-portfolio.com"
  },
  {
    title: " WIP: Moon Scraper",
    description: "A Vue3, Express, Nodejs & TypeScript-based web scraper to assist in DMCA take downs with the use of a headless browser API called Puppeteer",
    link: "https://github.com"
  }

];
</script>

<template>
  <div class="page-container">
    <div class="container">
      <!-- Center Section -->
      <div class="center-section">
        <h1>Welcome to Vue!</h1>
      </div>

      <!-- Two Columns Section -->
      <div class="columns">
        <!-- Column 1 -->
        <div class="column">
          <div class="box">
            <ProjectCard v-bind="projects[0]" />
          </div>
        </div>

        <!-- Column 2 -->
        <div class="column">
          <div class="box">
            <ProjectCard v-bind="projects[1]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Full Page Layout */
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  padding: 0 20px;
}

/* Centered Content Container */
.container {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Center Section */
.center-section {
  text-align: center;
  margin-bottom: 30px;
  color: white;
}

/* Two Columns Section */
.columns {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Regular Box Styling */
.box {
  background-color: black;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Responsive Design for Small Screens */
@media (max-width: 768px) {
  .columns {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
