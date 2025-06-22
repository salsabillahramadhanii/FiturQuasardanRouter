// src/router/routes.js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Ini akan menjadi Home/Landing Page
      { path: 'product', component: () => import('pages/ProductPage.vue') }, // Halaman Produk, jika Anda ingin terpisah
      { path: 'contact', component: () => import('pages/ContactPage.vue') } // Halaman Kontak
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes