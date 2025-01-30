import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import PortfolioView from "@/views/PortfolioView.vue";
import ContactView from "@/views/ContactView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView,
    },
    {
      path: '/portfolio',
      name: 'projects',
      component: PortfolioView,
    },
    {
      path: '/contact',
      name: 'Contact me',
      component: ContactView,
    },
  ],
})

export default router
