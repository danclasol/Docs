# Asynchronous

In Node.js we can manage promise in these three ways:

## then..catch

Same as in Javascript

```js
const start = () => {
  asynchronousFn()
    .then((value) => console.log(value))
    .catch((error) => console.error(error));
};
```

## 2. async..await

Same as in Javascript

```js
const start2 = async () => {
  const value = await asynchronousFn();
  console.log(value);
};
```

## 3. callback error first

Only for Node.js

```js
const start3 = () => {
  asynchronousFn((err, value) => {
    if (!err) console.log(value);
    else console.error(err);
  });
};
```
