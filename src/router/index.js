import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('../views/Project.vue')
    },
    {
      path: '/SignPage',
      name: 'SignPage',
      component: () => import('../views/SignPage.vue')
    },
    {
      path: '/verify_email',
      name: 'VerifyEmail',
      component: () => import('../views/VerifyEmail.vue')
    },
    {
      path: '/admin/projects',
      name: 'admin-projects',
      component: () => import('../views/admin/Projects.vue')
    },
    {
      path: '/admin/project',
      name: 'admin-project',
      component: () => import('../views/admin/Project.vue')
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/admin/Users.vue')
    },
  ]
})

export default router
