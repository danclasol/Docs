# Objeto Date

Existen multiples formas de crear un objeto `Date`

```js
let today = new Date();
let birthday = new Date("December 17, 1995 03:24:00");
let birthday = new Date("1995-12-17T03:24:00");
let birthday = new Date(1995, 11, 17); // el mes es indexado como 0
let birthday = new Date(1995, 11, 17, 3, 24, 0); // year, month, day, hours, minutes, seconds, millisecond
let birthday = new Date(628021800000); // pasando la marca temporal de la época
```

# Getters

## Obtener día

```js
date.getDate(); // día del mes (1-31)
date.getDay(); // día de la semana (0-6), empezando por el Domingo
```

## Obtener mes

```js
date.getMonth(); // mes (0-11)
```

## Obtener año

```js
date.getFullYear(); // year (yyyy)
// date.getYear(); // deprecated
```

## Obtener hora

```js
date.getHours(); // hora (0-23)
```

## Obtener minutos

```js
date.getMinutes(); // minutos (0-59)
```

## Obtener segundos

```js
date.getSeconds(); // segundos (0-59)
```

## Obtener milisegundos

```js
date.getMiliseconds(); // segundos (0-999)
```

## Obtener epoch

Returns the number of milliseconds since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

```js
date.getTime(); // 1673869456766
```

# Setters

## Modificar día

```js
date.setDate(15);
// date.setUTCDate(15); // Sets the day of the month of a date object, according to universal time
```

## Modificar mes

```js
date.setMonth(2);
// date.setUTCMonth(2); // Sets the month of a date object, according to universal time
```

## Modificar año

```js
// date.setYear(98); // deprecated // sets year 1998
date.setFullYear(98); // sets year 98
date.setUTCFullYear(); // sets the year of a date object, according to universal time
```

Para establecer fechas entre los años `0` y `99`, preferiblemente se usa los métodos `setFullYear()` y `getFullYear()`.

Debido a que si creamos una fecha con un año expresado en 2 dígitos, ese valor del año no es tratado como un año literal, si no como los 2 ultimos digitos del año relativos a 1900.

```js
let date = new Date(98, 1, 2); // Sun Feb 02 1998 00:00:00 GMT+0000 (GMT)
```

```js
date.setFullYear(98); // sets year 98
date.getFullYear(); // 22
```

## Modificar hora

```js
date.setHours(10);
// date.setUTCHours(10); // Sets the hour of a date object, according to universal time
```

## Modificar minutos

```js
date.setMinutes(48);
// date.setUTCMinutes(48); // Set the minutes of a date object, according to universal time
```

## Modificar segundos

```js
date.setSeconds(30);
// date.setUTCSeconds(30); // Set the seconds of a date object, according to universal time
```

## Modificar milisegundos

```js
date.setMillideconds(30);
// date.setUTCMilliseconds(30); // Sets the milliseconds of a date object, according to universal time
```

## Modificar fecha

Sets a date to a specified number of milliseconds after/before January 1, 1970

```js
date.setTime();
```
