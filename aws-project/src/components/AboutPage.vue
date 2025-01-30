<template>
  <div class="page-container">
    <div class="container">
      <div class="center-section">
        <h1>Welcome</h1>
        <p>Meet Brittany Bunbury-Milton</p>
      </div>

      <!-- Regular Box section if needed -->
      <div class="box">
        <h2>About me:</h2>
        <div class="box">
          <h3>Education: </h3>
          <ul>
            <li>
              Bachelors in Software Design and Development - From The University of West Florida
            </li>
          </ul>
          <h3>Extracurriculars:</h3>
          <ul>
            <li>
              2015-2016: FRC - FIRST Robotics - Team 3959 - MechTech - Vision Programming
            </li>
            <li>
              2015-2016: FTC - FIRST Robotics - Team 9833 - Fun-gineers - Lead Programmer
            </li>
            <li>
              2013-2016: FFA - Somerville, Alabama Chapter
            </li>
            <li>
              UWF Gaming Club - MOBA organizer/helper
            </li>
          </ul>

        </div>
      </div>
      <h2>
        Technical Skills:
      </h2>
      <div class="columns">
        <div class="column">
          <h3>
            Programming Languages:
          </h3>
          <div class="progress-list">
            <div v-for="item in programmingItems" :key="item.label" class="progress-container">
              <span class="label">{{ item.label }}</span>
              <div class="progress-bar">
                <div v-for="n in 5" :key="n"
                     class="segment"
                     :class="{ filled: n <= item.filledSegments }"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <h3>
            Technical Knowledge:
          </h3>
          <div class="progress-list">
            <div v-for="item in knowledgeItems" :key="item.label" class="progress-container">
              <span class="label">{{ item.label }}</span>
              <div class="progress-bar">
                <div v-for="n in 5" :key="n"
                     class="segment"
                     :class="{ filled: n <= item.filledSegments }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';

const knowledgeItems = ref([
  {label: 'Web Development', filledSegments: 3},
  {label: 'Database Management', filledSegments: 3},
  {label: 'Problem Solving', filledSegments: 4},
  {label: 'Source Control Systems', filledSegments: 3},
  {label: 'Unit Testing', filledSegments: 2},
  {label: 'Microsoft Office Suite', filledSegments: 5}
]);

const programmingItems = ref([
  {label: 'Java', filledSegments: 4},
  {label: 'JavaScript', filledSegments: 3},
  {label: 'C++', filledSegments: 3},
  {label: 'SQL', filledSegments: 3},
  {label: 'Python', filledSegments: 2},
  {label: 'AWS', filledSegments: 2}

]);
</script>

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

/* Regular Box Styling */
.box {
  background-color: grey;
  margin: 10px 0;
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
}

.progress-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.label {
  margin-bottom: 5px;
}

.progress-bar {
  display: flex;
  gap: 4px;
}

.segment {
  width: 20px;
  height: 8px;
  background-color: #ddd;
  border-radius: 2px;
}

.segment.filled {
  background-color: #b00;
}

.columns {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
}

.column {
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Responsive Design for Small Screens */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>
