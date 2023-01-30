# Blob

The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.

Blobs can represent data that isn't necessarily in a JavaScript-native format.

## Properties

The object `Blob` contains the following properties

- `size`: bytes of the data contained in the `Blob` object.
- `type`: string indicating the MIME type of the data contained in the `Blob`

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

# Methods

## arrayBuffer()

Returns a promise that resolves with an ArrayBuffer containing the entire contents of the Blob as binary data.

```js

```

## slice()

Returns a new Blob object containing the data in the specified range of bytes of the blob on which it's called.

```js

```

## stream()

Returns a ReadableStream that can be used to read the contents of the Blob.

```js

```

## text()

Returns a promise that resolves with a string containing the entire contents of the Blob interpreted as UTF-8 text.

```js
const text = await blob.text();
```
