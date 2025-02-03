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

export default defineComponent({
  name: "Navbar",
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
  left: 0;
  width: 100%;
  background: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.menu-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
   /* Hide menu button on larger screens */
}

.menu {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: #444;
  display: none;
  flex-direction: column;
  text-align: center;
  padding: 10px 0;
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

@media (min-width: 768px) {
  .menu {
    position: static;
    width: auto;
    background: transparent;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}
@media (min-width: 768px) {
  .menu-button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: none;/* Hide menu button on larger screens */
  }
}
</style>
