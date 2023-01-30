# Set

The Set object lets you store unique values of any type, whether primitive values or object references.

```js
const set = new Set();
const set = new Set([1, 2, 3, 4, 5]);
```

## Properties

### `size`

Returns the number of elements in a Map object.

```js
set.size;
```

## Methods

### add

```js
set.add(5);
set.add("A");
set.add(5); // No se inserta, ya existe
```

### get

```js
set.get("b"); // 2
```

### has

```js
set.get("b"); // true
```

## delete

Removes the specified element from a Set object by key.

```js
set.delete("b");
```

## clear

Removes all elements from a Set object.

```js
set.clear();
```

## forEach

Iterate over each key/value pair in the Set object

```js
set.forEach((item) => console.log);
```

## entries

Returns a new iterator object that contains the [key, value] pairs for each element in the Set object in insertion order

```js
for (entry of set.entries()) {
}
```

## keys

Returns a new iterator object that contains the keys for each element in the Set object in insertion order.

```js
for (key of set.keys()) {
}
```

## values

Returns a new iterator object that contains the values for each element in the Set object in insertion order.

```js
for (value of set.values()) {
}
```

# Convert to array

We can convert a Set to array using destructuring.

Only makes an superficial copy.

```js
const set = new Set([5, 99, 10, 24]);
const array = [...set];
array; // [5, 99, 10, 24]
```

Use `structuredClone()` for deep clone.

```js
const set = new Set([5, 99, 10, 24]);
const array = [...structuredClone(set)];
array; // [5, 99, 10, 24]
```

We can use Set to remove duplicated items

```js
const set = new Set([5, 99, 10, 24, 24]);
const array = [...set];
array; // [5, 99, 10, 24] //duplicated 24 is omitted
```
