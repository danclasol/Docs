# Formatting dates

To format and parse dates/times in Java use the `DateTimeFormatter` from the `java.time` API

- flexible and much better than the old `SimpleDateFormat`

It’s a formatter/parser that converts between LocalDate, LocalTime, LocalDateTime, etc., and String, using custom or built-in patterns.

## Patterns

You can use custom or built-in patterns

### Bult-in patterns

- `ISO_LOCAL_DATE` - yyyy-MM-dd (2025-04-18)
- `ISO_LOCAL_TIME` HH:mm:ss (14:30:00)
- `ISO_LOCAL_DATE_TIME` - Full date+time (2025-04-18T14:30:00)
- `BASIC_ISO_DATE` - yyyyMMdd (20250418)

```java
String iso = LocalDate.now().format(DateTimeFormatter.ISO_LOCAL_DATE); // 2025-04-16
String iso = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME); // 2025-04-16T16:51:28.3933144
```

### Custom patterns

To create a custom pattern combine the following pattern symbols

- `y` Year 2025
- `M` Month (1–12) 4, 04, April
- `d` Day of month 18
- `E` Day of week Fri, Friday
- `H` Hour (0–23) 15
- `h` Hour (1–12) 3
- `m` Minute 30
- `s` Second 45
- `a` AM/PM PM
- `...` Literal text 'at'

For example, format date: _sábado, 18 abril 2025_

```java
DateTimeFormatter customFormat = DateTimeFormatter.ofPattern("EEEE, d MMMM yyyy");
String currentDate = LocalDate.now().format(customFormat);
```

For example, format date: _sáb, 19 04 25_

```java
DateTimeFormatter customFormat = DateTimeFormatter.ofPattern("EE, d MM yy");
String currentDate = LocalDate.now().format(customFormat);
```
