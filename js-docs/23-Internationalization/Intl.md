# Intl

El objeto de ámbito global Intl es el espacio de nombres para el API de Internacionalización de ECMAScript, éste provee comparación de cadenas y formato de números, fechas y tiempos con sensibilidad al lenguaje.

## Intl.ListFormat

Enables language-sensitive list formatting.

- _style_:
  - long (default)
  - short
  - narrow
- _type_:
  - conjunction (default)
  - disjunction
  - unit

```js
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Intl.NumberFormat

Enables language-sensitive number formatting.

We could set the following options:

- _style_:
  - decimal (default): for plain number formatting
  - currency: for currency formatting
  - percent: for percent formatting
  - unit: for unit formatting
- _currency_: the currency to use in the formatting

```js
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number
  )
);
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number
  )
);
// Expected output: "￥123,457"
```

## Intl.DateTimeFormat

Enables language-sensitive date and time formatting.

We could set the following options:

- _weekday_:
  - long (e.g.,Thursday)
  - short (e.g, Thu)
  - narrow (e.g., T)
- _year_:
  - numeric (e.g., 2012)
  - 2-digit (e.g., 12)
- _month_:
  - numeric (e.g., 3)
  - 2-digit (e.g., 03)
  - long (e.g., March)
  - short (e.g., Mar)
  - narrow (e.g., M)
- _day_:
  - numeric (e.g., 1)
  - 2-digit (e.g., 01)
- _hour, minute, second_
  - numeric (e.g., 1)
  - 2-digit (e.g., 01)
- _timeZone_: The time zone to use.
  - "Asia/Shanghai", "Asia/Kolkata", "America/New_York", etc
- _timeZoneName_: The localized representation of the time zone name
  - long (e.g., Pacific Standard Time, Nordamerikanische Westküsten-Normalzeit)
  - short (e.g., PST, GMT-8)
- _hour12_: Whether to use 12-hour time (true/false)
- _dayPeriod_: The formatting style used for day periods
  - long (e.g., noon)
  - short (e.g., am)
  - narrow (e.g., n)

```js
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat("en-US").format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date)
);
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## Intl.RelativeTimeFormat

Enables language-sensitive relative time formatting.

We could set the following options:

- _localeMatcher_: The locale matching algorithm to use.

  - lookup
  - best fit (default)

- _numeric_: The format of output message.

  - always (default): e.g., 1 day ago)
  - auto (e.g., yesterday).

- _style_: The length of the internationalized message.

  - long (default, e.g., in 1 month)
  - short (e.g., in 1 mo.),
  - narrow (e.g., in 1 mo.).

```js
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" });

console.log(rtf1.format(3, "quarter"));
// Expected output: "in 3 qtrs."

console.log(rtf1.format(-1, "day"));
// Expected output: "1 day ago"

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

console.log(rtf2.format(2, "day"));
// Expected output: "pasado mañana"
```
