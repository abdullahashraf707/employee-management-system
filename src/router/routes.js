
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: 'employ', component: () => import('pages/Add_Employ.vue') },
      { path: 'company', component: () => import('pages/View_Allcompanys.vue') },
      { path: 'viewemploy', component: () => import('pages/View_Allemploys.vue') },
      //  { path: 'create', component: () => import('pages/Create_Account.vue') },
      //  { path: 'login', component: () => import('pages/Login.vue') },
    ]
    },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/create',
    component: () => import('pages/Create_Account.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
