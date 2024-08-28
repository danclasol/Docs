# Standard Streams

In Linux, all components—like files, directories, devices, and processes—as files are treated as files.

This simplifies and unifies system interaction, what makes managing and developing the system more flexible and consistent.

### Standard Types

Since Linux treats everything as a file, including devices, processes, and even network connections, the standard streams are also handled as files.

This means that whether you're reading input, writing output, or logging errors, you are interacting with files in the Linux file system.

There are three types of standard streams used for input and output

- Standard input `stdin`
- Standard output `stdout`
- Standard error `stderr`

### File Descriptors

Data streams can be identified by a file descriptor number. This number acts as a handle or reference to that resource. File descriptors serve as an abstraction that allows programs to interact with files, devices, and other I/O (input/output) resources in a standardized way.

Each standard stream has a predefined file descriptor

- Standard input `0`
- Standard output `1`
- Standard error `2`

## Standard Input `stdin`

Standard input is the default source of input data for a command or program.

By default, it reads data from the keyboard (in an interactive shell session), but it can be redirected to read from a file or another command.

## Standard Output `stdout`

Standard output is the default destination for the output data of a command or program. By default, it writes data to the terminal (display), but it can be redirected to write to a file or another command.

## Standard Error `stderr`

Standard error is the default destination for error messages and diagnostics. It is separate from standard output, allowing error messages to be handled differently from regular output.

By default, it writes data to the terminal, but it can also be redirected.
