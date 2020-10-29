import { createRouter, createWebHistory } from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
import Login from '../views/Login/Login.vue'

const routes = [
  {
    path: '/msite',
    name: 'Msite',
    component: Msite,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/msite' // 重定向，也就是页面初始打开的组件
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
