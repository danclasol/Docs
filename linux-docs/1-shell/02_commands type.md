# Types

## Build in Commands

These are commands that are built into the shell itself, meaning they are part of the shell program (e.g., bash, zsh). They execute directly within the shell process.

The `help` command display all about built-in commands in the shell

```sh
help
```

### Examples

- `cd` -> change directory
- `echo` -> display a line of text
- `pwd` -> print working directory
- `exit` -> exit the shell

## External Commands

These commands are standalone executable files stored on the filesystem. When invoked, the shell locates these files using the _PATH_ environment variable
and runs them in a separate process.

### Examples

- `ls` -> list directory contents
- `grep` -> search text using patterns
- `find` -> search for files in a directory hierarchy
- `tar` -> archive files

## Alias Commands

Shortcuts or custom commands that users define to represent other commands or command sequences.

They are defined in the shell configuration files (e.g., ~/.bashrc or ~/.bash_profile).

```sh
alias name='command'
```

### Examples

```sh
alias ll='ls -la' # a custom command for ls -la
alias gs='git status' # shortcut for checking Git status
```

# Commands

### `type`

Determine how a command is interpreted by the shell.

It helps you identify whether a command is a built-in command, an alias, a shell function, or an external command (an executable file).

```sh
type command_name
```

### `which`

Locates the executable file associated with a given command.

It searches through the directories listed in the _PATH_ environment variable and returns the path to the first matching executable it finds.

```sh
which command_name
which ls # /bin/ls
```

### `whereis`

Locates the binary, source, and manual page files for a given command. Unlike the which command, which only finds the binary executable in the PATH, whereis searches in predefined directories for binaries, source code files, and documentation associated with the command.

```sh
whereis command_name
whereis ls # /bin/ls /usr/share/man/man1/ls.1.gz
```

### `time`

Measures the duration of time taken by a command or process to execute.

It provides detailed information about the execution time, including the real (wall-clock) time, user CPU time, and system CPU time used by the command.

```sh
time command
```

When you run a command with time, you typically get output in the following format.

```
real    0m0.123s
user    0m0.045s
sys     0m0.032s
```
