# Dates

The `date` command in Linux is used to display the current date and time, as well as to format the date and time in various ways.

## Display date

```sh
date # Wed Aug 14 10:23:45 UTC 2024
```

## Set the System date and time

This requires superuser privileges (sudo), and the format must match the system’s expected input format.

```sh
sudo date --set="2024-08-14 10:52:00"
```

## Display date in a specific Timezone

You can temporarily change the timezone for the date command without affecting the system's timezone.

```sh
TZ="America/New_York" date
```

## Format date

You can customize the output format using the `+` sign followed by format specifiers.

```sh
date +"%Y-%m-%d %H:%M:%S" # 2024/08/20 13:18:26
```

### Format Specifiers

- `%Y`: Year (e.g., 2024)
- `%m`: Month (e.g., 08)
- `%d`: Day of the month (e.g., 14)
- `%H`: Hour (24-hour clock) (e.g., 10)
- `%M`: Minute (e.g., 52)
- `%S`: Second (e.g., 37)
- `%A`: Full weekday name (e.g., "Wednesday")
- `%a`: Abbreviated weekday name (e.g., "Wed")
- `%B`: Full month name (e.g., "August")
- `%b`: Abbreviated month name (e.g., "Aug")
- `%d`: Day of the month (e.g., "14")
- `%H`: Hour (00-23)
- `%I`: Hour (01-12)
- `%M`: Minute (00-59)
- `%S`: Second (00-59)
- `%Y`: Year (e.g., "2024")
- `%y`: Last two digits of the year (e.g., "24")
- `%Z`: Timezone name (e.g., "UTC")

## Displaying dates in the past or future

You can use the `-d` or `--date` option to display a date in the past or future.

```sh
date -d "yesterday"
date -d "next Friday"
```
