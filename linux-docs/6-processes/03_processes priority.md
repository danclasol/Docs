# Process Priority

All processes have a priority and a nice value. Higher priority processes will get more cpu time than lower priority processes.

- Priority value:

  - The priority value is the process’s actual priority which is used by the Linux kernel to schedule a task.
  - In Linux system priorities are `0` to `139` in which
    - `0` to `99` for real-time
    - `100` to `139` for users

- Nice value:
  - User-space values that we can use to control the priority of a process.
  - The nice value range is -20 to +19
    - `-20` is highest
    - `0` default
    - `+19` is lowest.

## Setting priority

You can influence this with the nice and renice commands

`nice`

Starts a process with a specified nice value.

This command starts command with a nice value of 10, lowering its priority.

```sh
nice -n 10 command
```

`renice`

Used to change the nice value of an already running process.

```sh
renice -n 10 -p 1234
```
