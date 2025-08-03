import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/technical-support',
      name: 'technical-support',
      component: () => import('../views/TechnicalSupport.vue')
    },
    {
      path: '/app-development',
      name: 'app-development', 
      component: () => import('../views/AppDevelopment.vue')
    },
    {
      path: '/graphic-design',
      name: 'graphic-design',
      component: () => import('../views/GraphicDesign.vue')
    },
    {
      path: '/digital-marketing',
      name: 'digital-marketing',
      component: () => import('../views/DigitalMarketing.vue')
    },
    {
      path: '/models',
      name: 'models',
      component: () => import('../views/Models.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
    scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // redirige vers le début de la page
  }
})

export default router