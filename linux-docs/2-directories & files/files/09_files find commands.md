## `locate`

The `locate` command is used to quickly find files and directories.

Uses a pre-built database of the filesystem to provide results much faster than other search tools like `find`.

## Updating database

The locate command relies on a database that may not always be up-to-date. To manually update the database

```
sudo updatedb
```

This database is usually updated periodically (often daily) by a system job (cron job). However, can be update manually of change the periodically of the job.

## Installation

The `locate` command may not be installed by default on some Linux distributions.

You can install it using your package manager:

### Sept 1. Install library

```sh
sudo apt-get install plocate
```

### Sept 2. Update the search database

```
sudo updatedb
```

## Common Use

Search for a file or directory

```sh
locate filename
```

```sh
locate myfile.txt
```

## Options

### `-b`

Match only against the file name portion of the path name.

```sh
locate -b filename
```

### `-c`

Show the total number of results found.

```sh
locate -b filename
```

### `-n`

Show a specific number of results.

```sh
locate -n number filename
```

### `-i`

This will return matches regardless of case.

```sh
locate -i filename
```

## `find`

The `find` command is a powerful tool for searching and locating files and directories within the filesystem.

Unlike `locate`, which uses a pre-built database, find searches the filesystem in real-time, which makes it slower but more accurate and flexible.

Can match files based on almost any attribute, such as name, type, size, permissions, modification time, and more.

```sh
find [path] [options] [expression]
```

- `path`: The directory to start searching from. Use . for the current directory.
- `options`: Options to modify the behavior of find.
- `expression`: Criteria for matching files and directories.

## Common Use

### Find files by name

Search for a file named in the current directory and its subdirectories.

```sh
find . -name "myfile.txt"
```

Case-insensitive search

```sh
find . -iname "myfile.txt"
```

### Find files by type

Find all directories.

```sh
find /path/to/search -type d
```

Find all regular files.

```sh
find /path/to/search -type f
```

### Find files by size

Find files larger than _100MB_

```sh
find /path/to/search -size +100M
```

Find files smaller than 1KB:

```sh
find /path/to/search -size -1k
```

### Find files by modification time

Find files modified in the last 7 days.

```sh
find /path/to/search -mtime -7
```

Find files modified more than 30 days ago.

```sh
find /path/to/search -mtime +30
```

### Find files by access time

Find files accessed in the last 7 days.

```sh
find /path/to/search -atime -7
```

Find files accessed more than 30 days ago.

```sh
find /path/to/search -atime +30
```

### Find files by permissions

Find files with specific permissions.

```sh
find /path/to/search -perm 644
```

Find files with executable permissions for the owner.

```bash
find /path/to/search -perm /u=x
```

## Options

### `-not`

Exclude the result that match the pattern

```sh
find . -not -name "myfile.txt"
```
