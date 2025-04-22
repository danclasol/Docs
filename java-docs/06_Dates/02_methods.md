# Methods

## Getting current date

### `now()`

Gets the current date

```java
 LocalDate today = LocalDate.now();
 LocalTime now = LocalTime.now();
```

## Getting parts of a date

Get parts of a date

```java
System.out.println("Year: " + today.getYear());
System.out.println("Month: " + today.getMonth());
System.out.println("Day: " + today.getDayOfMonth());
```

Get parts of a time

```java
System.out.println("Hour: " + now.getHour());
System.out.println("Minute: " + now.getMinute());
System.out.println("Second: " + now.getSecond());
```

## Compararing dates

### `isAfter()`

```java
System.out.println(date1.isAfter(date2));
```

### `isBefore()`

```java
System.out.println(date1.isBefore(date2));
```

## Adding time to dates

Add time to a date

```java
System.out.println("In 10 days: " + today.plusDays(10));
System.out.println("In 2 weeks: " + today.plusWeeks(2));
System.out.println("Next month: " + today.plusMonths(1));
System.out.println("Last year: " + today.minusYears(1));
```

Add time to a time

```java
System.out.println("In 2 hours: " + now.plusHours(2));
System.out.println("In 30 minutes: " + now.plusMinutes(30));
System.out.println("In 30 minutes: " + now.plusMinutes(30));
System.out.println("In 30 nanos seconds: " + today.plusNanos(30));
```

## Subtracting time to dates

Subtracts time to a date

```java
System.out.println("Yesterday: " + today.minusDays(1));
System.out.println("Last week: " + today.minusWeeks(1));
System.out.println("Last month: " + today.minusMonths(1));
System.out.println("Last year: " + today.minusYears(1));
```

Subtracts time to a date

```java
System.out.println("2 hours before: " + today.minusHour(2));
System.out.println("30 minutes before: " + today.minusMinutes(30));
System.out.println("30 seconds before: " + today.minusSeconds(30));
System.out.println("30 nano seconds before: " + today.minusNanos(30));
```

### `.with()`

Move to the next Christmas

```java
LocalDate nextChristmas = fecha1.with(ChronoField.MONTH_OF_YEAR, 12).with(ChronoField.DAY_OF_MONTH, 25);
System.out.println("Siguiente Navidad: " + nextChristmas);
```

### `Locale.setDefault()`

Sets the default locale for your Java application.

```java
Locale.setDefault(Locale.FRANCE);
```

## `TemporalAdjusters`

The utility class `TemporalAdjusters` in the `java.time.temporal` package helps you adjust dates in a readable and declarative way.

### `TemporalAdjusters.firstDayOfMonth()`

```java
LocalDate firstDayOfMonth = date1.with(TemporalAdjusters.firstDayOfMonth());
System.out.println("FirstDayOfMonth : " + firstDayOfMonth);
```

### `TemporalAdjusters.lastDayOfMonth()`

```java
LocalDate lastDayOfMonth = date1.with(TemporalAdjusters.lastDayOfMonth());
System.out.println("LastDayOfMonth : " + lastDayOfMonth);
```

### `TemporalAdjusters.next()`

```java
LocalDate nextMonday = date1.with(TemporalAdjusters.next(DayOfWeek.MONDAY));
System.out.println("Next monday : " + nextMonday);
```

### `TemporalAdjusters.firstDayOfNextMonth()`

```java
LocalDate firstDayOfNextMonth = fecha3.with(TemporalAdjusters.firstDayOfNextMonth());
System.out.println("FirstDayOfNextMonth: " + firstDayOfNextMonth);
```
