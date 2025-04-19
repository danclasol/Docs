# Dates

In Java, working with dates and times can be done using the `java.time` package

- introduced in Java 8
- recommended way to handle date and time operations
- legacy date handling (`java.util.Date` / Calendar)

## Classes without timezones

### `LocalDate`

Represents a date without time (e.g., 2025-04-18)

```java
LocalDate date1 = LocalDate.of(1990, 4, 16);
LocalDate date2 = LocalDate.of(1990, Month.APRIL, 16);
LocalDate date3 = LocalDate.now();
LocalDate date4 = LocalDate.parse('1990-04-16');
```

### `LocalTime`

Represents time without a date (e.g., 14:30)

```java
LocalTime time1 = LocalTime.of(13, 50, 3);
LocalTime time2 = LocalTime.now();
```

### `LocalDateTime`

Represents both date and time

```java
LocalDateTime dateTime1 = LocalDateTime.of(1990, 4, 16, 15, 50, 3);
LocalDateTime dateTime2 = LocalDateTime.now();
LocalDate dateTime3 = LocalDate.parse('1990-04-16');
```

## Classes with timezones

### `ZoneId`

```java
ZoneId defaultZoneId = ZoneId.systemDefault();
ZoneId zoneUTC_0 = ZoneId.of(ZoneOffset.UTC.getId());
ZoneId zoneAsia = ZoneId.of("Asia/Tokyo");
ZoneId zoneEuropa = ZoneId.of("Europe/Athens");
```

### `ZonedDateTime`

Date and time with a time zone

#### UTC+8

```java
ZonedDateTime spainDateTime = fechaHora2.atZone(zonaEuropa);
System.out.println("Depart : " + format.format(spainDateTime));
```

#### UTC+9 and flight duration = 7 hours

```java
ZonedDateTime japanDateTime = spainDateTime.withZoneSameInstant(zonaAsia).plusHours(7).plusMinutes(10);
System.out.println("Arrive : " + format.format(japanDateTime));
```

## Timestamps

### `Instant`

Timestamp (machine-readable, precise)

```java
Instant instanteIni = Instant.now();
Thread.sleep(2000);
Instant instanteFin = Instant.now();
```

### `Duration`

Difference between two times

```java
Duration duration = Duration.between(instanteIni, instanteFin);
Long durationMilles = duration.toMillis();
Long durationMin = duration.toMinutes();

Duration oneHours = Duration.ofHours(1);
long durationHours = oneHours.getSeconds();
```

### `Period`

Difference between two dates (in years, months, days)

```java
Period period = Period.between(fecha1, fecha2);
int periodYears = periodo.getYears();
int periodDays = periodo.getDays();

Period tenDays = Period.ofDays(10);
```

## Chrono Units

```java
long years = ChronoUnit.YEARS.between(fecha1, fecha2);
```
