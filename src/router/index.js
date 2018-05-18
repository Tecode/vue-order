import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Search from '@/components/Search'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
