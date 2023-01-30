# Date.now()

Returns the number of milliseconds in a date since midnight of January 1, 1970,

```js
Date.now(); // 1673608810189
```

# Date.UTC()

Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time

```js
let ms = Date.UTC(2023, 1, 13); // 1676246400000
```

# Convert to sting

## `toString()`

Converts a Date object to a string

```js
date.toString(); // 'Fri Jan 13 2023 14:16:20 GMT+0100 (hora estándar de Europa central)'
```

## `toDateString()`

Converts the date portion of a Date object into a readable string

```js
date.toDateString(); // 'Fri Jan 13 2023'
```

## `toTimeString()`

Converts the time portion of a Date object to a string

```js
date.toTimeString(); // '14:16:20 GMT+0100 (hora estándar de Europa central)'
```

## `toUTCString()`

Converts a Date object to a string, according to universal time (UTC 0)

```js
date.toUTCString(); // 'Fri, 13 Jan 2023 13:16:20 GMT' (Local date UTC +1)
```

## `toISOString()`

Returns the date as a string, using the ISO standard (yyyy-mm-ddThh:mm:ss:sss)

```js
date.toISOString(); // '2023-01-13T13:16:20.344Z'
```

## `toLocaleString(locales, options)`

Converts a Date object to a string, using locale conventions

```js
date.toLocaleString(); // '13/1/2023, 14:16:20' (default location Spain)
```

Using locales parameter to set locations

```js
date.toLocaleString("en-EN"); // '1/13/2023 2:16:20 PM'
date.toLocaleString(["ban", "id"]); // '13/13/2023 14.16.20' (if 'ban' is not supported 'id' will be applied)
```

Using options parameter to set timezones

```js
date.toLocaleString("en-EN", { timeZone: "UTC", timeZoneName: "short" }); // '1/13/2023, 1:16:20 PM UTC'
```

Using options parameter to set 24 hour format

```js
date.toLocaleString("en-EN", { hour12: false }); // '1/13/2023, 14:16:20'
```

Using options parameter to edit format of weekday, year, month and day

```js
date.toLocaleString("en-EN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}); // 'lunes, 13 de febrero de 2023'
```

## `toLocaleDateString(locales, options)`

Returns the date portion of a Date object as a string, using locale conventions

```js
date.toLocaleDateString(); // '13/1/2023' (default location Spain)
date.toLocaleDateString("en-EN"); // '1/13/2023'
```

## `toLocaleTimeString(locales, options)`

Returns the time portion of a Date object as a string, using locale conventions

```js
date.toLocaleTimeString(); // '14:14:20' (default location Spain)
date.toLocaleTimeString("en-EN"); // '14:14:20 PM'
```

# Convert to JSON

## `toJson()`

Returns the date as a string, formatted as a JSON date

```js
date.toJSON();
```
