# DayOfWeek

DayOfWeek is an enum representing the 7 days of the week

- Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday
- each day-of-week has an int value from 1 (Monday) to 7 (Sunday)

```
DayOfWeek.FRIDAY
```

# Month

Month is an enum representing the 12 months of the year

- January, February, March, April, May, June, July, August, September, October, November and December
- each month-of-year has an int value from 1 (January) to 12 (December)

```java
MONTH.APRIL
```

# ChronoField

Provide field-based access to manipulate a date, time or date-time

```java
YEAR	// Year	2025
MONTH_OF_YEAR	// Month (1–12)	4
DAY_OF_MONTH	// Day (1–31)	18
DAY_OF_WEEK	// Day (1–7; Mon = 1)	5
HOUR_OF_DAY	// Hour (0–23)	14
MINUTE_OF_HOUR	// Minute (0–59)	30
SECOND_OF_MINUTE	// Seconds	0
DAY_OF_YEAR	// Day in year (1–365/366)	108
EPOCH_DAY	// Days since 1970-01-01	20145 (e.g.)
```

## ChonoUnit

Represents units of time — like days, months, hours, seconds — and is used for:

- measuring the amount of time between two dates/times
- adding or subtracting time units from a Temporal (like LocalDate, LocalDateTime, etc.)

```java
ChronoUnit.YEARS	// One year
ChronoUnit.MONTHS	// One month
ChronoUnit.WEEKS	// 7 days
ChronoUnit.DAYS	    // One day
ChronoUnit.HOURS	// One hour	- For time objects
ChronoUnit.MINUTES	// One minute- For time or datetime
ChronoUnit.SECONDS	// One second	⏱️
ChronoUnit.MILLIS	// Milliseconds - Precise timing
ChronoUnit.MICROS	// Microseconds
ChronoUnit.NANOS	// Nanoseconds
ChronoUnit.DECADES	// 10 years
ChronoUnit.CENTURIES	// 100 years
ChronoUnit.MILLENNIA	// 1000 years
ChronoUnit.ERAS	        // Era (BCE/CE)
```
