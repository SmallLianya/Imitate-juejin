import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
  // 首页
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  // 详情页
  {
    path: '/detail/:orderId',
    name: 'detail',
    component: () => import('@/views/Detail')
  },
  // 在这里添加新路由

  {
    path: '/404',
    name: 'page-not-found',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/404.vue'),
  }

]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
