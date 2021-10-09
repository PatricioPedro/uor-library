
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/MenuPage.vue') }
    ]
  },
  {
    path: '/location',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/LocationPage.vue') }
    ]
  },
  {
    path: '/restaurante',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/restaurantRegister.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashBoard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/menu.vue') }
    ]
  },
  {
    path: '/aluno',
    component: () => import('layouts/DashBoard.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/studentPage.vue') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('src/pages/dashboard/LoginPage.vue') }
    ]
  },
  {
    path: '/category',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/CategoryPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
