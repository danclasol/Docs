# Print working directory

Displays the present working directory.

```bash
pwd
```

# Navigating Directories

Change the directory

```bash
cd <directoryName>
```

Go to root

```bash
cd /
```

Go up one or more folders

```bash
cd ..
cd ../../../
```

# List directories content

Lists the contents of the current directory.

```bash
ls
```

List also hidden files

```bash
ls -a
```

List files providing more details such as permissions, number of links, owner, group, size, and time of last modification

```bash
ls -l
```

Adding `h` to an argument prints a human-readable format.

```bash
ls -lh
ls -sh
```

Recursively lists subdirectories.

```bash
ls -R
```

Sorts files by modification time, newest first.

```bash
ls -t
```

Sorts files by size, largest first.

```bash
ls -S
```

Reverses the order of the sort.

```bash
ls -r
```

List files of a directory

```bash
ls [arguments] <directoryName>
```

List files for a specific filetype

```bash
ls -l \*.jpg
```

# Show directories information

Disk usage of directories, human readable

```bash
du -h
```

Files & folders, Human readable

```bash
du -ah: “ “ “
```

Only show disc usage of folders

```bash
du -sh
```
