# Nested routes

With Vue Router, you can express this relationship using nested route configurations.
- useful when multiple pages share the same layout
- but only part of the page changes

## Configuration

- `component`: Parent component that every child will render
- `children`: list of child routes

```js
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // UserProfile will be rendered inside User's <RouterView>
        // when /user/:id/profile is matched
        path: 'profile',
        component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <RouterView>
        // when /user/:id/posts is matched
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```
## Parent component

In the parent comnponent is important to add the `RouterView` where the child route will be rendered.

```js
<template>
  <h1>Books</h1>

  <nav>
    <!-- list of books -->
  </nav>

  <RouterView />
</template>
```


## Nested Named Routes
When dealing with Named Routes, you usually name the children routes:

```js
const routes = [
  {
    path: '/user/:id',
    component: User,
    // notice how only the child route has a name
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
```