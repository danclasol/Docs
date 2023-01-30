# Map

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

```js
const map = new Map();
const map = new Map([
  [1, one],
  [2, two],
  [3, three],
]);
```

## Properties

### `size`

Returns the number of elements in a Map object.

```js
map.size;
```

## Methods

### set

```js
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
```

### get

```js
map.get("b"); // 2
```

### has

```js
map.get("b"); // true
```

## delete

Removes the specified element from a Map object by key.

```js
map.delete("b");
```

## clear

Removes all elements from a Map object.

```js
map.clear();
```

## forEach

Iterate over each key/value pair in the Map object

```js
map.forEach((item) => console.log);
```

## entries

Returns a new iterator object that contains the [key, value] pairs for each element in the Map object in insertion order

```js
for (entry of map.entries()) {
}
```

## keys

Returns a new iterator object that contains the keys for each element in the Map object in insertion order.

```js
for (key of map.keys()) {
}
```

## values

Returns a new iterator object that contains the values for each element in the Map object in insertion order.

```js
for (value of map.values()) {
}
```

# Convert to array

We can convert a Map to array using destructuring.

Only makes an superficial copy.

```js
const map = new Map([
  [1, one],
  [2, two],
  [3, three],
]);
const array = [...structuredClone(map)];
array; // [5, 99, 10, 24]
```
