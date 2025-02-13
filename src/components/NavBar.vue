<template>
  <nav class="navbar">
    <h2 class="logo">Portfolio</h2>
    <button @click="toggleMenu" class="menu-button">☰</button>
    <ul :class="{ 'menu-open': isMenuOpen }" class="menu">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/portfolio">Projects</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router"; // Add this line

export default defineComponent({
  name: "Navbar",
  components: {
    RouterLink, // Add this line
  },
  setup() {
    const isMenuOpen = ref<boolean>(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return { isMenuOpen, toggleMenu };
  }
});
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0; /* Ensure the navbar starts from the left edge */
  right: 0; /* Ensure the navbar goes to the right edge */
  width: 100%;
  background: #333;
  color: white;
  padding: 10px 0; /* Adjust padding to remove extra space */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
.logo {
  margin-left: 20px;
}
.menu-button {
  margin-right: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.menu {
  margin-right: 30px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  width: 100%;
  background: #444;
  display: none;
  flex-direction: column;
  text-align: center;
  padding: 10px 0;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.menu a {
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block;
}

.menu-open {
  display: flex;
}

/* Responsive Design for Larger Screens */
@media (min-width: 768px) {
  .menu {
    position: static;
    margin-right: 30px;
    width: auto;
    background: transparent;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .menu-button {
    display: none; /* Hide menu button on larger screens */
  }
}
</style>
