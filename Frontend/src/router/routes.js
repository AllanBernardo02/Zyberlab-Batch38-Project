
const routes = [
  {
    path: '/Home',
    component: () => import('pages/batch38.vue'),
    // component: () => import('layouts/MainLayout.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Index.vue') }
    // ]
  },

  {
    path: '/Mainpage',
    component: () => import('pages/mainpage38.vue')
  },

  {
    path: '/employee_list',
    component: () => import('pages/list38.vue')
  },

  {
    path: '/about',
    component: () => import('pages/phase38.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
