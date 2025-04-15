# Route Meta Fields

The meta property accepts an object of properties that can be accessed on the route location and navigation guards.

```js
{
    path: 'new',
    component: PostsNew,
    // only authenticated users can create posts
    meta: { requiresAuth: true },
}
```

### `meta.requiresAuth`

Protect Routes

```js
meta.requiresAuth: true;
```

### `meta.role`

Role-Based Access Control

```js
meta.roles = ["admin", "editor"];
```

### `meta.title`

Set Page Titles

```js
meta.title: 'Home';
```

### `meta.breadcrumb`

Breadcrumbs & Navigation Data

```js
meta.breadcrumb;
```
