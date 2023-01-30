# IndexedDB

`IndexedDB` is a low-level API for client-side storage of significant amounts of structured data.

- Stores all types of data
- Uses indexes to enable high performance searches of this data.
- Allows to store larger amounts of structured data than DOM Storage.
- Support transactions.
- Each `IndexedDB` is unique to an origin.

# Browsers support

IndexedDB is almost universally supported, but the easiest way to check is:

```js
if (window.indexedDB) {
  console.log("This browser doesn't support IndexedDB");
  return;
}
```

# Connection database

Firstly, we need to open de connection to the database.

```js
const request = indexedDB.open(name, version);
```

This function returns a `openRequest` object, we can listen to the following events:

## success

The database is ready. Then property `request.result`

```js
request.onsuccess = () => {
  db = request.result;
  console.log("OPEN", db);
};
```

## upgradeneeded

The database is ready, but the current verion is deprecated or the database doesn't exists.

Theses databases are stored in the browser, so as a developer, we don't have constant access to users's databases. We need this event to control changes in the databases.

```js
request.onupgradeneeded = () => {
  db = request.result;
  console.log("CREATE", db);
};
```

## error

Error setting the database

```js
request.onerror = (error) => {
  console.log("ERROR", error);
};
```

# Creating store object

We need to create an object store, equivalent to the tables or collecionts.

```js
db.createObjectStore(name, optionalKey);
```

## Primary keys

We can defined the following parameters with the optional object:

- keyPath: sets the primary key
- autoIncrement: use a key generator

## Indexes

Indexes must be made when you create your object stores and can also be used to define a unique constraint on your data.

- indexName: sets an identifiying name
- property: indicates the data to index
- options: sets how the index operates
  - unique: if true the index doesn't allow duplicated values for a single key
  - multiEntry (for array properties): if true adds an entry in the index for each array element. Otherwise, it adds a single entry containing the array.

```js
objectStore.createIndex("indexName", "property", options);
```

# Working with data

All data operations must be made within a transaction in IndexedDB.

## Transactions

A transaction is a group of operations, that shouyld either all succedd of all fail.

- store: name of the store object. Can be an array of store objects
- type: transaction type
  - readonly: can only read
  - readwrite: can only read and write data, but not alter store objects
  - versionchange: manage the changes to the object store or index

```js
const transaction = db.transaction(store[, type]);
```

Once the transaction is set, we need to create an object store on the transaction

```js
const objectStore = transaction.objectStore("storeName");
```

## Create

Insert the data into de database.

- data: can be data of any type
- optionalKey: key to identify the record

```js
const request = objectStore.add(data, optionalKey);
```

## Retrieve data

### get

Makes a request to get a record by key from the object store

```js
const request = objectStore.get("id");
```

### getAll

Return an array of keys/values with all the values of the object store.

```js
const request = objectStore.getAll();
```

We can filter by a range of data using the parameter

```js
const request = objectStore.getAll(IDBKeyRange.lowerBound("5", true)); // id > 5
```

### cursor

Retrieving huge amount of records with `getAll` can fail due to memory availability.

Instead we can use `cursor` to return one key/value at a time, solving the memory problem.

```js
let request = objectStore.openCursor();

request.onsuccess = () => {
  let cursor = request.result;

  if (cursor) {
    let key = cursor.key;
    let value = cursor.value;

    console.log(key, value);
    cursor.continue();
  } else {
    console.log("No more books");
  }
};
```

We can filter by a range of data using the parameter

```js
let request = objectStore.openCursor(IDBKeyRange.upperBound(5));
```

We can use the optional argument `direction` to set the order of the value in the cursor

- next: (default) ascending
- prev: descending
- nextunique, prevunique: same as above, but skips duplicated keys

```js
let request = objectStore.openCursor(IDBKeyRange.upperBound(5));
```

## Update

We can update records with the method `put`.

- data: the item you wish to update
- optionalKey: primary key of the record you want to update

```js
const request = objectStore.put(data, optionalKey);
```

## Delete data

We can delete records with the method `delete`.

We can either a key or a range key can be passed, allowing one or multiple records to be deleted from a store.

```js
const request = objectStore.delete(dataTask);
```

To delete all records in a store, use the method `clear`.

```js
const request = objectStore.clear(dataTask);
```
