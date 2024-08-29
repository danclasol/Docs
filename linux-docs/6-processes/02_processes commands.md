# Display current processes

Displays information about currently running processes on the system.

It provides details such as:

- Process ID (PID)
- User who owns the process
- Amount of CPU and memory usage
- Other relevant information.

```sh
ps
```

## Options

### `aux`

Displays detailed information about all processes running on the system.

- `a`: Shows processes from all users.
- `u`: Displays user-oriented format (showing the user, CPU usage, memory usage, etc.).
- `x`: Includes processes that are not attached to a terminal.

```sh
$ ps aux
```

### `-e`

Displays of all processes.

```sh
ps -e
```

### `-f`

Displays a full-format listing, including the parent process ID (PPID) and command with arguments.

```sh
ps -f
```

### `-l`

Displays a "long-format" listing, which is more detailed and focuses on technical attributes of processes, such as priority and memory usage.

```sh
ps -l
```

### `-e` or `-A`

Lists all processes currently running on the system.

```sh
ps -e
```

### `-u`

Shows processes owned by a specific user.

```sh
ps -u root
```

### `-p`

Displays information about a specific process by its Process ID.

```sh
ps -p 1234
```

### `--ppid`

Displays information about a specific process by its Parent Process ID.

```sh
ps -ppid 1234
```

### `--sort`

Sorts the output by a specified field, such as CPU or memory usage.

```sh
ps aux --sort=-%mem # sort by memory usage
```

```sh
ps aux --sort=-%cpu # sort by CPU usage
```

# Display current processes tree

Displays running processes in a tree-like format, showing the parent-child relationships between processes.

When you run the pstree command without any options, it displays a tree of processes starting from the init or systemd process (the first process started by the kernel).

```sh
pstree
```

## Common Use

Visualize child processes of a specific PID

```sh
pstree 1234
```

## Options

### `-p`

Display by PID.

```sh
pstree -p
```

### `-np`

Show process IDs only without the command names.

```sh
pstree -np
```

### `-c`

Display compact identical branches in the tree.

```sh
pstree -c
```

This will group similar processes together, reducing clutter in the output.

### `-u`

Show the tree for a specific user.

```sh
pstree -u username
```

#

### `top`

Provides a real-time, dynamic view of the system's processes.

It's a powerful tool for monitoring system performance, resource usage, and managing processes.

```sh
top
```

## Interactive Commands

While top is running, you can use various interactive commands

- `h`: Display help information
- `q`: Quit top.
- `P`: Sort processes by CPU usage.
- `M`: Sort processes by memory usage.
- `N`: Sort processes by PID.
- `T`: Sort processes by time.
- `k`: Kill a process. You will be prompted to enter the PID and signal.
- `r`: Renice a process. You will be prompted to enter the PID and new nice value.
- `c`: Toggle between showing the command line and just the command name.
- `1`: Toggle CPU core usage display (if you have a multi-core system).

## Options

### `-d`

Set the delay between updates (in seconds).

For example, to update every 5 seconds.

```sh
$ top -d 5
```

### `-p`

Monitor specific processes by PID.

For example, to monitor processes with PIDs 1234 and 5678.

```sh
$ top -p 1234,5678
```

### `-b`

Start top in batch mode, which is useful for logging or scripting. This mode produces output suitable for processing by other programs.

```sh
$ top -b -n 1
```

### `-n`

Set the number of updates before top exits in batch mode.

For example, to update 10 times and then exit.

```sh
$ top -b -n 10
```

### `-u`

Show processes only for the specified user.

For example, to show processes for user.

```sh
$ top -u john 5. Customizing Display
```
