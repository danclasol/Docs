# Calendar

In Linux, both the `cal` and `ncal` commands are used to display calendars, but they have different features and display styles.

## `cal`

Display a calendar in the terminal.

```sh
cal
```

## Installation

In order to use the command `cal` and `ncal` you need to install the following dependency.

```sh
apt-get install bsdmainutils
```

## Common Use

Display the calendar for a specific month and year:

This command displays the calendar for August 2024.

```sh
cal 8 2024
```

Display the calendar for a specific year.

```sh
cal 2024
```

## Options

### `-N`

Displays the previous, current, and next month.

```sh
cal -3
```

### `-y`

Displays the calendar for the entire current year.

```sh
cal -y
```

### `-m`

Displays a specific month of the current year.

```sh
cal -m 12
```

### `-j`

Display the Julian calendar (days of the year).

```sh
cal -j
```

### `-s`

Start the week on Sunday (default behavior in many locales).

```sh
cal -s
```

### `-n`

Displays a specific month.

```sh
cal -n 3
```

## `ncal`

Similar to the cal command but provides more advanced options for displaying calendars.

It offers a different format:

- displays calendar with weeks starting on Monday (by default)
- supports vertical layouts
- allows for highlighting specific days
- provides a more flexible way to view dates

```sh
ncal
```

## Common Use

Display a specific month and year.

```sh
ncal -M 8 2024
```

Display the calendar for a specific year.

```sh
ncal -y 2024
```

Display the Julian days along with the calendar, indicating the day number within the year.

```sh
ncal -j
```

## Options

### `-b`

Use a more traditional layout, similar to the cal command, with the calendar in a horizontal layout.

```sh
ncal -b
```

### `-M`

Start the week on Monday (this is the default behavior).

```sh
ncal -M
```

This forces the calendar to start the week on Monday, which is the default for ncal.

### `-S`

Start the week on Sunday, similar to the default behavior of cal.

```sh
ncal -S
```

### `-w`

Print the week numbers on the left side of the calendar.

```sh
ncal -w
```

### `-C`

Displays the calendar in Roman numerals.

```sh
ncal -C
```
