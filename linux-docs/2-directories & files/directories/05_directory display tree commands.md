# Display directory tree

The `tree` command is used to display the hierarchy of files and directories, making it easier to understand the layout of a file system.

```sh
tree [options] [directory]
```

## Installation

The `tree` command may not be installed by default on some Linux distributions.

You can install it using your package manager:

### On Ubuntu/Debian

```sh
sudo apt-get install tree
```

### On CentOS/RHEL:

```sh
sudo yum install tree
```

## Common uses

Display the Directory Structure of a Specific Directory:

```sh
tree /path/to/directory
```

## Options

### `-a`

Include hidden files and directories.

```sh
tree -a
```

### `-L`

Limit the depth of the directory tree to n levels.

```sh
tree -L 2
```

### `-d`

List directories only.

```sh
tree -d
```

### `-f`

Print the full path for each file and directory.

```sh
tree -f
```

### `-I`

Exclude files and directories matching a pattern.

```sh
tree -I "*.log"
```

### `-P`

Show only files and directories matching a pattern.

```sh
tree -P "*.txt"
```

### `-C`

Colorize the output (if your terminal supports colors).

```sh
tree -C
```
