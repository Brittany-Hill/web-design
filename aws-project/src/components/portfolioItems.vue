<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  link: string;
}>();

const openProject = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <div
    class="project-card"
    @click="openProject(link)"
  >
    <div class="project-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: grey;

}
.project-card:hover {
  transform: scale(1.05);
}
.project-content {
  padding: 10px;
}
</style>

