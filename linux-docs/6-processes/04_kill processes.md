# Kill processes

The kill command is used to send signals to processes, which can be used to terminate or control them.

This command sends the default signal (SIGTERM) to the process with the specified PID, asking it to terminate gracefully.

```sh
kill <PID>
```

## Common Signals

- `SIGTERM (15)`:

  - Terminate the process gracefully.
  - This is the default signal sent by kill if no signal is specified.
  - It allows the process to clean up resources before exiting.

- `SIGKILL (9)`

  - Forcefully terminate the process.
  - This signal cannot be ignored or blocked, and the process does not get a chance to clean up. Use this if SIGTERM does not work.

- `SIGINT (2)`

  - Interrupt the process, typically used to stop a process from the terminal (e.g., when you press Ctrl+C).
  - It is often used to interrupt a process that is running in the foreground.

- `SIGHUP (1)`

  - Hang up the process, which typically causes a process to reload its configuration files.
  - Often used for daemon processes.

- `SIGQUIT (3)`

  - Quit the process and create a core dump.
  - This is similar to SIGINT but also produces a core dump for debugging.

- `SIGSTOP (19)`

  - Stop (pause) the process.
  - This signal cannot be ignored or handled, and the process can be resumed later with SIGCONT.

- `SIGCONT (18)`
  - Continue a process that was stopped with SIGSTOP.

## Options

### `-l`

List all signal names. This is useful for finding the signal number associated with a specific signal name.

```sh
kill -l
```

### `-s`

Specify the signal to send. You can use either the signal name or number.

```sh
kill -s <SIGNAL> <PID>
```

Example of stopping a process

```sh
kill -s -19 1234  # SIGSTOP (19)
```
