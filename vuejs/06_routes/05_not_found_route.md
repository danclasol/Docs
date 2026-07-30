## 404 Not found Route

We can create the not found route using the catch-all route.

This route should be the last route in your router configuration.

```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/books',
      component: () => import('@/views/BooksView.vue')
    },
    {
      path: '/authors',
      component: () => import('@/views/AuthorsView.vue')
    },

    // Must be last
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
```

```html
<template>
  <div>
    <h1>404 - Page Not Found</h1>

    <p>
      Sorry, the page you're looking for doesn't exist.
    </p>

    <RouterLink to="/">
      Go back home
    </RouterLink>
  </div>
</template>
```