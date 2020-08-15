import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/products',
        name: 'ProductsList',
        component: () => import('../views/ProductsList.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: '/payment',
        name: 'Payment',
        component: () => import('../views/Payment.vue'),
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('../views/Order.vue'),
      },
    ],
  },
  // 登入
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  // 後臺路徑
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/ProductsList.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/admin/Coupon.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue'),
      },
      {
        path: 'imageStorage',
        component: () => import('../views/admin/ImageStorage.vue'),
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
