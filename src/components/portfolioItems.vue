<template>
  <div class="project-card">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <a :href="project.link" target="_blank" class="project-link">View Project</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object as PropType<{ id: number; title: string; description: string; link: string }>,
      required: true,
    },
  },
});
</script>

<style scoped>
.project-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.project-card h2 {
  margin-top: 0;
  color: #333;
}

.project-card p {
  color: #666;
}

.project-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.project-link:hover {
  background-color: #0056b3;
}
</style>

