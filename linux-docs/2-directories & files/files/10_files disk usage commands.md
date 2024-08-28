# Check Disk Usage

Estimate and display the disk usage of files and directories.

The information is output in two columns:

- size (in blocks by default)
- directory or file name

```sh
du directory_name
```

## Common uses

Display the disk usage for the specified directory and all its subdirectories.

```sh
du directory_name
```

Display Disk Usage in Human-Readable Format, showing sizes in KB, MB, or GB.

```sh
du -h directory_name
```

Summarize Total Disk Usage

```sh
du -sh directory_name
```

## Options

`-a`

Display disk usage of all files and subdirectories.

```sh
du -a directory_name
```

`-s`

Display disk usage of multiple directories.

```sh
du -sh dir1 dir2 dir3
```

`--exclude`

Exclude specific files or directories.

```sh
du --exclude="*.txt" -h directory_name
```

`--max-depth`

Display the disk usage of a specific depth of subdirectories.

```sh
du --max-depth=1 -h directory_name
```

# Check Space Available

Display information about the amount of disk space available on the mounted filesystems.

The typical output of the df command includes the following columns:

- _Filesystem_: The name of the filesystem or the device name.
- _1K-blocks/Size_: The total size of the filesystem in 1K blocks (or other units if -h is used).
- _Used_: The amount of disk space currently used.
- _Available_: The amount of disk space still available.
- _Use%_: The percentage of the filesystem that is used.
- _Mounted on_: The directory where the filesystem is mounted.

```sh
df
```

## Common use

Display Disk Space for a Specific Filesystem or Directory:

```sh
df -h /home
```

## Options

### `-a`

Display all filesystems including those that have 0 blocks or are pseudo-filesystems like proc and sysfs.

```sh
df -a
```

### `-T`

Display the filesystem type.

```sh
df -T
```

### `-k`

This forces the output to be in kilobytes (1K blocks), regardless of the default block size used by the filesystem.

```sh
df -k
```

### `-b`

This forces the output to be in bytes (1BT blocks), regardless of the default block size used by the filesystem.

```sh
df -b
```

### `-m`

This forces the output to be in megabytes (1M blocks).

```sh
df -m
```
