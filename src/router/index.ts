import { createRouter, createWebHashHistory } from 'vue-router'
import * as VueRouter from 'vue-router'
import { RouteRecordRaw } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: 'discover',
        name: 'discover',
        component: () => import('../views/discover/index.vue')
      }
    ]
  }
]




const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as any
})

export default router 