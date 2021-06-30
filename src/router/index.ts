import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),
    redirect: '/articles',
    children: [
      {
        path: '/articles',
        name: 'Articles',
        component: () => import('../views/Article/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Login/register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
