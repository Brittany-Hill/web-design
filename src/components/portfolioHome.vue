<script setup lang="ts">
import ProjectCard from './portfolioItems.vue';
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: "Portfolio Website",
    description: "A Vue 3 & TypeScript-based portfolio.",
    link: "https://your-portfolio.com"
  },
  {
    id: 2,
    title: "WIP: Moon Scraper",
    description: "A Vue3, Express, Nodejs & TypeScript-based web scraper to assist in DMCA take downs with the use of a headless browser API called Puppeteer",
    link: "https://github.com"
  }
]);
</script>

<template>
  <div class="page-container">

  <div class="portfolio-home">
    <h1>My Projects</h1>
    <div class="projects">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
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
  /* padding: 20px; */
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

.portfolio-home {
  padding: 20px;
  color: white;
  background-color: black;
  min-height: 100vh;
  text-align: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

h1 {
  margin-bottom: 20px;
  
}

.project {
  background-color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.project:hover {
  transform: translateY(-10px);
}

.project h2 {
  margin-top: 0;
}

.project p {
  color: #666;
}
</style>
