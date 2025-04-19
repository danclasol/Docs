## Exceptions

Exception used to indicate a problem while calculating a date-time.

```java
try {
    LocalDate fecha4 = LocalDate.parse("16-ABC-2016", formato3);
    System.out.println(formato3.format(localDateTime));
} catch (DateTimeParseException e) {
    System.err.println("Unable to parse the date!");
}
```
