# Lifecycle

Vue provides lifecycle hooks, which are special functions that run at different moments in this process.

## Init

Before the template is mounted

- define reactive variables, import functions, and prepare logic
- hook
  - beforeCreate
  - created

## Mounted

Before DOM Mounted

```js
onBeforeMount(() => {});
```

After DOM mount

```js
onMounted(() => {});
```

## Updated

Before Updated

```js
onBeforeUpdate(() => {});
```

After updated

```js
onUpdated(() => {});
```

## Destroyed

Before Unmount

```js
onBeforeUnmount(() => {});
```

After unmount

```js
onUnmounted(() => {});
```
